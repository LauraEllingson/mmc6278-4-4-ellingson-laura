const db = require("./db")
const fs = require('fs/promises')
const path = require('path')
const inquirer = require('inquirer');

console.clear()

async function main() {
  const files = await fs.readdir(path.join(__dirname, '/queries'))
  const {fileName} = await inquirer.prompt({
    type: 'list',
    name: 'fileName',
    choices: [...files, 'Exit'],
    message: 'Select Query to Run'
  })
  if (fileName === 'Exit') return db.end()
  
  const text = await fs.readFile(
    path.join(__dirname, '/queries/' + fileName),
    'UTF-8'
  )
  console.clear()
  console.log('Running: ' + fileName)
  console.log(text, '\n')
  try {
    const [res] = await db.query(text);
    console.table(res);
    // await fs.appendFile(path.join(__dirname, './test/results.js'), `${fileName}: ${JSON.stringify(res, null, 2)}`)
  } catch(err) {
    console.error(err.message)
  }
  main()
}

main()
