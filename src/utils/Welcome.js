import NoteStorage from "./NoteStorage";
import HighlightManager from "./HighlightManager";

export const welcome = { 
     name: "Welcome!",
     content: 
`//Welcome to CodeNotes! 
/*Code notes helps you sort out all code snippets you use frequently!
/*This promotes code reuse.*/
/*Simply type them into the editor and make them available anywhere*/
/*Have your snippets ready to be shared with your colleagues!*/

console.log("Have Fun!");
printf("Have Fun in C!");`,
     language: "javascript",
     style: "dracula",
}

if(!NoteStorage.noteExistsByName(welcome.name)) NoteStorage.addNote(welcome.name, welcome.content, welcome.language, HighlightManager.getTheme(welcome.style));


