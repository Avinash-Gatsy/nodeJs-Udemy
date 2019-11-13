const fs = require('fs');

const getNotes = function () {
    return 'Notes';
};
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Note successfully added');
    }else{
        console.log('Note with same title found. Change the title and try again');
    }
    
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};