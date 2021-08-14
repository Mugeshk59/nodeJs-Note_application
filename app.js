const chalk = require("chalk");
const yargs = require("yargs");
// const { getNotes, addNote, removeNote } = require("./notes");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

//add,remove,read,list

//Creat add command
yargs.command({
  command: "add",
  describe: "Add a new node",
  builder: {
    body: {
      describe: "Note Body",
      //to set to mandatory
      demandOption: true,
      type: "string",
    },
    title: {
      describe: "Note Title",
      //to set to mandatory
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

//Creat Remove command
yargs.command({
  command: "remove",
  describe: "remove a new node",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

//Creat Read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  builder: {
    title: {
      describe: "note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.searchNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List a nite",
  handler(argv) {
    notes.listNotes();
  },
});
//it will call the functions instaed we use parse()
// console.log(yargs.argv);
yargs.parse();
