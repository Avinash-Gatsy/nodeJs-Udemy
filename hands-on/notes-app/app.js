const fs = require('fs'); //fs is Node core module
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const noteUtility = require('./notes');

// fs.writeFileSync('notes.txt', 'This file was created by node.js.');
// fs.appendFileSync('notes.txt', 'This text is appended');

const error = chalk.bold.red;
let warning = chalk.inverse.keyword('orange');

//create an add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(`Adding a new note with title - ${argv.title} and body - ${argv.body}`);
        noteUtility.addNote(argv.title, argv.body);
    }
});

//create an read command
yargs.command({
    command: 'read',
    description: 'Read a new note',
    handler: () => {
        console.log('Reading a new note');
    }
});

//create an remove command
yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        noteUtility.removeNote(argv.title);
    }
});

//create an list command
yargs.command({
    command: 'list',
    description: 'List a new note',
    handler: () => {
        console.log('Listing a new note');
    }
});

yargs.parse();
//console.log(warning('Warning'));
//console.log(error(validator.isEmail(getNotes())));

//console.log(process.argv);
/*[
    '/usr/local/bin/node',
    '/Users/avinash/Desktop/UI/NodeJs-DeveloperCourse-Udemy/hands-on/notes-app/app.js',
    'add',
    '--title=Temp Title'
  ]*/
//console.log(yargs.argv); //{ _: [ 'add' ], title: 'Temp Title', '$0': 'app.js' }