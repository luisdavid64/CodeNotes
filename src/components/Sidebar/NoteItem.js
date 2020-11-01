import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile } from '@fortawesome/free-solid-svg-icons';
import NoteStorage from "./../../utils/NoteStorage";
import noteActions from './../../actions';
import {useDispatch} from 'react-redux';
import useWindowDimensions from "./../../hooks/useWindowDimensions"

const NoteItem = ({name}) => {

    const {width} = useWindowDimensions();

    const dispatch = useDispatch();

    const clickHandler = () => {
        const newDisplay = NoteStorage.getNoteByName(name);
        dispatch(noteActions.workingTextAction.changeName(newDisplay.name));
        dispatch(noteActions.workingTextAction.changeLanguage(newDisplay.language));
        dispatch(noteActions.workingTextAction.edit(newDisplay.content));
    }

    return ( 
        <li className="note-list__item">
            <button className="note-list__div" onClick={clickHandler}>
                { width > 768 &&
                    <div className="note-list__icon">
                        <FontAwesomeIcon icon={faFile} size="lg"/>
                    </div>
                }
                {name}
            </button>
        </li>
     );
}
 
export default NoteItem;