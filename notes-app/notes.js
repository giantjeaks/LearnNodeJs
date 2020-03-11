//18. Adding a note
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}
const addNote = (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    debugger

    if(!duplicateNote){
            notes.push({
                title: title,
                body: body
            })

            saveNotes(notes)
            console.log(chalk.green.inverse('New note added'))
        } else {
            console.log(chalk.red.inverse('Note title taken!'))
        }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length !== notes.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }

    
}
//24. Reading a note
const readNote = (title) => {
    const notes = loadNotes()
    const noteToread = notes.find((note) => note.title === title)
    if(noteToread){
        console.log(chalk.yellow.inverse(noteToread.title))
        console.log(noteToread.body)
        // saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }

    
}

//23. Listing Notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes'));
    
    notes.forEach((note) => {console.log(note.title)})
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}