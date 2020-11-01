
const NoteStorage = (() => {
    /*Constant keys*/
    const ALLNOTESKEY = "notes";

    //Utility functions
    const get = (key) => localStorage.getItem(key);
    const set = (key,value) => localStorage.setItem(key,value);

    const getNotes = () => {
        const noteList = get(ALLNOTESKEY);
        //console.log(`returning: ${noteList}`);
        if(noteList) {
            return JSON.parse(noteList);
        }
        /*Return empty if list does not exist*/
        return [];
    } 

    const noteExistsByName = (name) => {
        var notes = getNotes();
        if(notes.findIndex((element) => element.name === name) >=0) {
            return true;
        }
        return false;
    }

    const addNote = (name, content, language, style)  => {
        const note = {name, content, language, style} //Create object from redux state
        const notes = getNotes();
        notes.unshift(note);
        set(ALLNOTESKEY, JSON.stringify(notes));
    }

    /*Removes the task at index=index*/
    const removeNoteByIndex = (index) => {
        const notes = getNotes();
        if(index >= 0 && index < notes.length) {
            notes.splice(index,1);
            set(ALLNOTESKEY, JSON.stringify(notes))
        }
    }

    const removeNoteByName = (name) => {
        if(name === null) {
            return false;
        }
        const target = getNoteIndexByName(name);
        if(target !== -1) {
            removeNoteByIndex(target);
            return true;
        }
        else {
            console.log("Error: No such file exists in storage");
            return false;
        }
    }

    const getNoteIndexByName = (name) => {
        var notes = getNotes();
        return notes.findIndex((element) => element.name === name)
    }

    const saveNote = (name, content, language, style) => {
        var notes = getNotes();
        if(NoteStorage.noteExistsByName(name)) {
            const position = getNoteIndexByName(name);
            notes[position] = {name,content,language,style}; //Add new data
            set(ALLNOTESKEY, JSON.stringify(notes));
        } else {
            //Note doesn't exist: so add!
            addNote(name,content,language,style);
        }
    }

    const getNoteByName = (name) => {
        const index = getNoteIndexByName(name);
        return getNotes()[index];
    }
    
    return {
        getNotes,
        addNote,
        removeNoteByIndex,
        removeNoteByName,
        noteExistsByName,
        saveNote,
        getNoteByName
    }

})();

export default NoteStorage;
