import React, { useState, useEffect } from 'react';
import HighlightManager from "./../../utils/HighlightManager"
import {useDispatch } from 'react-redux';
import noteActions from './../../actions';

const DDItem = ({item, type, setIsOpen, setCurrentHeader}) => {

    const dispatch = useDispatch();
    const [element, setElement] = useState(null);

    const isLanguage = type === "language" ? "button--icon" : ""; 

    //Check in case of error of item
    useEffect(() => {
        if(type==="language") {
            //set as the icon for the programming language
            setElement(HighlightManager.getLanguageIcon(item));
        } else {
            //Set to the string
            setElement(item);
        }
    },[item,type])
    
    const handleClick = () => {
        //Change the dropdown header component and close dropdown
        setIsOpen(false);
        setCurrentHeader(element);
        if(type==="language") {
            dispatch(noteActions.workingTextAction.changeLanguage(item));
        } else if (type ==="theme") {
            dispatch(noteActions.workingTextAction.changeStyle(HighlightManager.getTheme(item)));
        }
    }

    return (
        element && <li className="dd-li">
            <button className={`button ${isLanguage}`} onClick={()=> handleClick()}>{element}
            </button>  
        </li>    
    );
}
 
export default DDItem;