const fs = require('fs');
const chalk = require('chalk');

const error = chalk.red.inverse;
const success = chalk.green.inverse;

const getNotes = () => {
    return 'notes';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title.toLowerCase() === title.toLowerCase());
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(success('Note successfully added'));
    } else {
        console.log(error('Note with same title found. Change the title and try again'));
    }

};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const listNotes = () => {
    const notes = loadNotes();
    //notes.map(note => note.title);
    return notes.reduce((acc, note) => {
        return acc.concat(note.title);
    }, []);
};

const removeNote = (title) => {
    const currentNotes = loadNotes();
    const updatedNotes = currentNotes.filter((note) => {
        return note.title.toLowerCase() !== title.toLowerCase();
    });
    if (currentNotes.length > updatedNotes.length) {
        console.log(success(`removed note with title - ${title}`));
        saveNotes(updatedNotes);
    } else {
        console.log(error(`No note found with title - ${title}`));
    }
};
const readNotes = (title) => {
    const noteRequested = loadNotes().find((note) => note.title.toLowerCase() === title.toLowerCase());
    if(noteRequested){
        console.log(chalk.keyword('skyblue')(`--${noteRequested.title.toUpperCase()}--`));
        console.log(chalk.keyword('lightgreen')(`--${noteRequested.body}--`));
    }else{
        console.log(error('Requested Note Not Found'));
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};