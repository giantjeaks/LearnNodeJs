const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')
const yargs = require('yargs')
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
// const command = process.argv[2]
// if (command === 'add'){
//     log('Adding Note!')
// }else if(command === 'remove'){
//     log('Removing note!')
// }

//16. Argrument parsing with yargs 
//Customize yargs verison
yargs.version('1.0.0')

//Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

//Create remove command 
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

//Create lsit command
yargs.command({
    command:'lsit',
    describe:'Listing all notes',
    handler: function(){
        console.log('List notes')
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function(){
        console.log('read the note')
    }
})

yargs.parse()

//add, remove, read, Lsit
//log(yargs.argv)




