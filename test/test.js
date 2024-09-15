const db = require("../db");
const fs = require("fs/promises");
const { readdirSync } = require("fs");
const path = require("path");
const { expect } = require("chai");
const results = require("./results");
const { execSync } = require("child_process");

const files = readdirSync(path.join(__dirname, "../queries")).filter(
  (fileName) => !fileName.match(/(update|insert|delete)/i)
);

describe("Music DB SQL Query Practice", () => {
  describe("Database Schema", () => {
    it("should have artists, albums, and songs table", async () => {
      const [result] = await db.query("show tables;");
      expect(result.map((x) => x.Tables_in_music_db)).to.have.members([
        "artists",
        "songs",
        "albums",
      ]);
    });
    describe("artists table", () => {
      let result;
      before(async () => {
        result = (await db.query("describe artists"))[0];
      });
      it("should have id column set to primary key, integer, auto increment", () => {
        const col = result.find((col) => col.Field === "id");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
        expect(col.Extra).to.include("auto_increment");
        expect(col.Key).to.include("PRI");
      });
      it("should have name column set to varchar", () => {
        const col = result.find((col) => col.Field === "name");
        expect(col).to.exist;
        expect(col.Type).to.include("varchar");
      });
    });
    describe("albums table", () => {
      let result;
      before(async () => {
        result = (await db.query("describe albums"))[0];
      });
      it("should have id column set to primary key, integer, auto increment", () => {
        const col = result.find((col) => col.Field === "id");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
        expect(col.Extra).to.include("auto_increment");
        expect(col.Key).to.include("PRI");
      });
      it("should have name column set to varchar", () => {
        const col = result.find((col) => col.Field === "name");
        expect(col).to.exist;
        expect(col.Type).to.include("varchar");
      });
      it("should have release_year column set to int", () => {
        const col = result.find((col) => col.Field === "release_year");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
      });
      it("should have artist_id column set to int that is foreign key of artists.id", () => {
        const col = result.find((col) => col.Field === "artist_id");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
        expect(col.Key).to.include("MUL");
      });
    });
    describe("songs table", () => {
      let result;
      before(async () => {
        result = (await db.query("describe songs"))[0];
      });
      it("should have id column set to primary key, integer, auto increment", () => {
        const col = result.find((col) => col.Field === "id");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
        expect(col.Extra).to.include("auto_increment");
        expect(col.Key).to.include("PRI");
      });
      it("should have name column set to varchar", () => {
        const col = result.find((col) => col.Field === "name");
        expect(col).to.exist;
        expect(col.Type).to.include("varchar");
      });
      it("should have track_number column set to int", () => {
        const col = result.find((col) => col.Field === "track_number");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
      });
      it("should have artist_id column set to int that is foreign key of artists.id", () => {
        const col = result.find((col) => col.Field === "artist_id");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
        expect(col.Key).to.include("MUL");
      });
      it("should have album_id column set to int that is foreign key of albums.id", () => {
        const col = result.find((col) => col.Field === "album_id");
        expect(col).to.exist;
        expect(col.Type).to.include("int");
        expect(col.Key).to.include("MUL");
      });
    });
  });
  describe("SELECT Queries", () => {
    for (const file of files) {
      it(`${file} should return correct result`, async () => {
        const queryText = await fs.readFile(
          path.join(__dirname, "../queries/" + file),
          "UTF-8"
        );
        const [result] = await db.query(queryText);
        if (process.env.DEBUG) {
          console.log(`\n${file}\n`);
          console.log(`\n${queryText}\n`);
          console.log("\nACTUAL:\n");
          console.table(result);
          console.log("\nEXPECTED:\n");
          console.table(results[file]);
        }
        expect(result).to.deep.eq(results[file]);
      });
    }
  });
  describe("Other Queries", () => {
    beforeEach(async () => {
      await db.query("DROP DATABASE music_db");
      execSync(
        `docker exec -d mysql-sandbox mysql -u root -e "source docker-entrypoint-initdb.d/schema.sql"`
      );
      execSync(
        `docker exec -d mysql-sandbox mysql -u root -e "source docker-entrypoint-initdb.d/seed.sql"`
      );
      await db.query("USE music_db");
      execSync("sleep 0.1");
    });
    after(async () => {
      await db.query("DROP DATABASE music_db");
      execSync(
        `docker exec -d mysql-sandbox mysql -u root -e "source docker-entrypoint-initdb.d/schema.sql"`
      );
      execSync(
        `docker exec -d mysql-sandbox mysql -u root -e "source docker-entrypoint-initdb.d/seed.sql"`
      );
      await db.query("USE music_db");
      execSync("sleep 0.1");
    });
    it("06-insert.sql should insert row into songs table", async () => {
      const queryText = await fs.readFile(
        path.join(__dirname, "../queries/06-insert.sql"),
        "UTF-8"
      );
      await db.query(queryText);
      const [result] = await db.query("SELECT * FROM songs WHERE name=?", [
        "Endless, Nameless",
      ]);
      expect(result[0].name).to.eq("Endless, Nameless");
      expect(result[0].track_number).to.eq(13);
      expect(result[0].artist_id).to.eq(6);
      expect(result[0].album_id).to.eq(9);
    });
    it("07-update.sql should update row in albums table", async () => {
      const queryText = await fs.readFile(
        path.join(__dirname, "../queries/07-update.sql"),
        "UTF-8"
      );
      await db.query(queryText);
      const [result] = await db.query("SELECT * FROM albums WHERE name=?", [
        "Metallica",
      ]);
      expect(result[0].name).to.eq("Metallica");
      expect(result[0].artist_id).to.eq(1);
    });
    it("11-delete.sql should delete Justin Bieber", async () => {
      const queryText = await fs.readFile(
        path.join(__dirname, "../queries/11-delete.sql"),
        "UTF-8"
      );
      await db.query(queryText);
      const [result] = await db.query("SELECT * FROM artists WHERE name=?", [
        "Justin Bieber",
      ]);
      expect(result.length).to.eq(0);
      const [result2] = await db.query("SELECT * FROM artists WHERE name=?", [
        "Metallica",
      ]);
      expect(result2.length > 0).to.be.true;
    });
  });
});
