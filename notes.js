const fs = require("fs");
const chalk = require("chalk");
const notes = require("c:/users/mugi1999/desktop/n3-04-06-adding-note/notes-app/notes");

const addNote = function (title, body) {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New note added!"));
  } else {
    console.log(chalk.red.bold("Note title taken!"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);
  console.log(notes.length, notesToKeep.length);
  if (notes.length === notesToKeep.length) {
    const notFoundMsg = chalk.bgRed.bold("note not Found!");
    console.log(notFoundMsg);
  } else {
    saveNotes(notesToKeep);
    const foundMsg = chalk.green.bold("note Successfully removed");
    console.log(foundMsg);
  }
};

const listNotes = function () {
  const notename = loadNotes();
  console.log(chalk.blue.bold(`listing your`));

  notename.forEach((note) => {
    console.log(note.title);
  });
};

const searchNote = function (title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse("Your Notes..."));
    console.log(chalk.blue(note.title) + ":");
    console.log(note.body);
  } else console.log(chalk.red("Note Not Found"));
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  searchNote: searchNote,
};
