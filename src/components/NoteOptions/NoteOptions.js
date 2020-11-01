import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from './../../actions';
import NoteStorage from './../../utils/NoteStorage';
import HighlightManager from './../../utils/HighlightManager';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '250px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '99',
        backgroundColor: 'white',
        borderWidth: "4px",
        borderColor: "#05386b",
        borderStyle: "solid",
        color: '#05386b',
    }
};

const NoteOptions = () => {

    const dispatch = useDispatch();
    const notes = useSelector(state => state.fileReducer);
    const noteStore = useSelector(state => state.workingText);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }


    //Toggles the state of the view button
    const handleToggle = () => {
        dispatch(noteActions.fileAction.toggleMode());
    }

    //Saves the data in the localStorage
    const handleSave = () => {
        const curList = NoteStorage.getNotes();
        if(curList.length !== 0) {
            const { name, content, language, style } = noteStore;
            NoteStorage.saveNote(name,content, language, style);
            toast.success("Snippet saved!");
        }
    }

    const handleRemove = () => {
        const isDeleted = NoteStorage.removeNoteByName(noteStore.name);
        const curList = NoteStorage.getNotes();
        if(curList.length !== 0) {
            dispatch(noteActions.workingTextAction.changeName(curList[0].name));
            dispatch(noteActions.workingTextAction.changeLanguage(curList[0].language));
            dispatch(noteActions.workingTextAction.edit(curList[0].content));
            dispatch(noteActions.fileAction.set(true));
            dispatch(noteActions.counterAction.decrement());
            toast.success("Snippet deleted!");
        }
        else if (isDeleted === true) {
            dispatch(noteActions.workingTextAction.changeName(""));
            dispatch(noteActions.workingTextAction.edit(""));
            dispatch(noteActions.fileAction.set(true));
            dispatch(noteActions.counterAction.decrement());
            toast.success("Snippet deleted!");
        }

    }

    //Modal submit functuon
    const handleSubmit = (event) =>  {
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get("name");
        var language = data.get("language").toLowerCase();
        if(language ==="sass") language = "scss";
        const content = "";
        if(HighlightManager.isValidLanguage(language)) {
            NoteStorage.addNote(name, content, language, noteStore.style);
            dispatch(noteActions.workingTextAction.changeName(name));
            dispatch(noteActions.workingTextAction.changeLanguage(language));
            dispatch(noteActions.workingTextAction.edit(content));
            dispatch(noteActions.fileAction.set(true));
            dispatch(noteActions.counterAction.increment());
            toast.success("Snippet added!");
        }
        else {
            toast.error("Language error: Try again with a valid language");
        }
        closeModal();
    }

    Modal.setAppElement('body');

    return (
        <>
            <menu className="note-options">
                <button title="Create Snippet" className="note-options__rounded-button" onClick={() => openModal()}>
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </button>
                {
                    notes.mode ?
                        <button title="Set view mode" className="note-options__rounded-button" onClick={() => handleToggle()}>
                            <FontAwesomeIcon icon={faEye} size="lg" />
                        </button>
                        :
                        <button title="Set edit mode" className="note-options__rounded-button" onClick={() => handleToggle()}>
                            <FontAwesomeIcon icon={faEdit} size="lg" />
                        </button>
                }
                <button title="Save snippet" className="note-options__rounded-button" onClick={() => handleSave()}>
                    <FontAwesomeIcon icon={faSave} size="lg" />
                </button>
                <button title="Delete snippet"className="note-options__rounded-button" onClick={() => handleRemove()}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
            </menu>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form className="modal-form" onSubmit={handleSubmit}>
                    <h2 className="modal-form__title">Create Note</h2>
                    <label>
                        <input type="text" name="name" className="modal-form__input" placeholder="Snippet Name"/>
                    </label>
                    <label>
                        <input type="text" name="language" className="modal-form__input" placeholder="Language"/>
                    </label>
                    <input className="modal-form__button" type="submit" value="Submit" />
                </form>
            </Modal>
        </>
    );
}

export default NoteOptions;