import React, { useEffect, useState } from 'react';
import NoteStorage from "./../../utils/NoteStorage";
import {useSelector } from 'react-redux';
import NoteItem from "./NoteItem";
import uid from 'uid';

const SideBar = ()  => {

    const [displayNotes, setDisplayNotes] = useState(null);

    const counter = useSelector(state => state.counter);

    useEffect(()=> {
        setDisplayNotes(NoteStorage.getNotes());
    },[])

    useEffect(()=> {
        setDisplayNotes(NoteStorage.getNotes());
    },[counter])

    return (
        <menu className="sidebar">
            {
                displayNotes ? 
                    <ul className="note-list">
                        {displayNotes.map((item)=>{return <NoteItem key={uid()} name={item.name}/>})}
                    </ul>
                : <ul className="note-list"> </ul> 
            }
        </menu>
    )
}

export default SideBar;