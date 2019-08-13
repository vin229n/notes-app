const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0') 



//Create add command
yargs.command({
    'command': 'add',
    'describe': 'Add a new note',
    'handler': function (){
        console.log("adding a new note!")
    }
})

//create remove command
yargs.command({
    'command': 'add',
    'describe': 'Remove a new note',
    'handler': function (){
        console.log("Removing the note!")
    }
})

//create list command
yargs.command({
    'command': 'list',
    'describe': 'List your notes',
    'handler': function (){
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