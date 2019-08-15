const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) =>{

    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }else{
        console.log(chalk.red.inverse("Title already taken"))
    }


}

const removeNote = (title) =>{
    const notes= loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else
    console.log(chalk.red.inverse('No Note found!'))
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length > 0)
    {
        console.log(chalk.yellow('Your Notes..'))
        notes.forEach(note => console.log(chalk.green(". " +note.title)));
    }
    else
        console.log(chalk.yellow("No notes found!"))
    
}

const readNotes = (title) =>{
    notes = loadNotes()
    noteToRead = notes.find(note => note.title === title )
    if(noteToRead)
    {
        console.log(chalk.yellow(noteToRead.title))
        console.log(chalk.green(noteToRead.body))
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}