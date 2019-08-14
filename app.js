const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//customize yargs version
yargs.version('1.1.0') 



//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function (){
        console.log("Listing out all notes")
    }
})

//creating read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log("Reading a note")
    }
})

yargs.parse()