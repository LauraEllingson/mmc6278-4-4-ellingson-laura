# Module 4 Assignment: MySQL Practice

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;

**WARNING:** This is the first assignment to use Docker in its NPM scripts. **Please make sure that you do not have spaces or capital letters in your directory names.** You can check the path of your assignment using `pwd` in the terminal from within the folder on your machine. If you see spaces or capital letters, please change them to underscores or lower case characters.

&nbsp;
## Introduction

For this assignment, you'll be learning how to design a MySQL database and how to use SQL queries to access and modify data within that database. We'll be using a database titled `music_db` that is seeded (pre-populated) with artist, album, and song information.

&nbsp;
## Setup

Copy the starter files inside of `unsolved` into the root directory of your GitHub repository.

Ensure you include a `.gitignore` file in your repo that includes at minimum:

```
**/.DS_Store
**/node_modules/
.env
```

Run `npm i` in the root directory of your repository (your `package.json` should be in the root directory).

&nbsp;
## Instructions

First you will need to complete the [schema.sql](./unsolved/schema/schema.sql) file by filling in the column data for the three tables within the database.

**NOTE:** The [schema.sql](./unsolved/schema/schema.sql) file **must** be completed before the tests OR application will run.

Next, you'll need to fill in the missing queries within the [queries](./unsolved/queries/) folder. Each query has a comment describing what the query should do. Some of the queries are already completed as an example of more advanced queries.

&nbsp;
## App Behavior

This application relies on Docker to create the local MySQL database to run queries against. The [package.json](./unsolved/package.json) file contains many scripts that assist in creating/seeding the MySQL database.

However, this assignment also includes an [inquirer](https://github.com/SBoudrias/Inquirer.js)-based CLI tool to run the queries for the assignment. This program reads the files in the `/queries` folder and allows you to select which of those query files to run against the database.

To run the CLI, use:

```
npm start
```

**NOTE:** You will see lots of output in your terminal, including errors, after running any of the included start scripts. This is **normal**. It will take anywhere from 15-30 seconds for Docker to establish a new MySQL instance each time you run one of the scripts depending on the machine you are using. If after waiting, the command still fails, be sure to check the `schema.sql` file for errors.

There are also other scripts included in the `package.json` file. If you would like to start the database on its own, you may do so with:

```
npm run mysql
```

This script will stop any previous containers, start a fresh MySQL container, and run the schema and seed files for you automatically. Once this script finishes, you may use TablePlus or any other SQL tool to connect to the database using port 3306, username of `root` and a blank/no password.

You can also open the MySQL command line tool to this container using:

```
npm run mysql:shell
```

&nbsp;
## Testing

Automated tests are included with this assignment that run and check all of the queries in the queries folder. To receive full credit, all automated tests must pass.

To run the tests once, run:

```
npm test
```

To run the tests in watch mode, run:

```
npm run test:watch
```

There is also a special debug mode included in the tests that will `console.log` the expected vs actual query results. To run the tests in this mode, run:

```
npm run test:watch:debug
```

&nbsp;
## Requirements for full credit

To receive full credit for this assignment, you MUST:

  * Ensure that all queries are completed in the queries folder.
  * Write your queries so that all automated tests pass.

&nbsp;
## Submission

When submitting this assignment, please include:

  * A link to the assignment's GitHub repository.
  * A screenshot of the automated test results.
