const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')
const log = console.log



//9. Importing Node.js Core Modules
// const fs = require('fs')
// fs.writeFileSync('notes.txt','This file was created by Node.js!')
// fs.appendFileSync('notes.txt','The data i appended')


//10. Importing your own files
// const add = require('./utils')
// const sum = add(4,-2)
// console.log(sum)
// const msg = getNotes()
// console.log(msg)

//11. Import npm modules
// console.log(validator.isURL('httpmead.io'))

//12. Printing color 
// log(chalk.green('Success!'))
// log(chalk.blue.inverse.bold('Error!'))

// 15. Getting input from user
const command = process.argv[2]
if (command === 'add'){
    log('Adding Note!')
}else if(command === 'remove'){
    log('Removing note!')
}




