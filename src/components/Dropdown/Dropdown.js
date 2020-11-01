import React, { useState, useEffect, useRef} from 'react';
import DDItem from './DDItem';
import HighlightManager from "./../../utils/HighlightManager"
import { useSelector} from 'react-redux';

function useOutsideAlerter(ref, setter) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setter(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setter]);
}


const Dropdown = function({list, firstItem, type}) {

    const isLanguage = type === "language" ? "button--icon" : ""; 
    const [isOpen, setIsOpen] = useState(false);
    const [currentHeader, setCurrentHeader] = useState(firstItem);
    const displayData = useSelector(state => state.workingText);

    //Remember to change these if error ocurrs
    useEffect(() => {
        if(type==="language") {
            //set as the icon for the programming language
            setCurrentHeader(HighlightManager.getLanguageIcon(firstItem));
        } else {
            //Set to the string
            setCurrentHeader(firstItem);
        }
    },[firstItem, type])

    useEffect(()=> {
        if(type ==="language") {
            setCurrentHeader(HighlightManager.getLanguageIcon(displayData.language));
        }
    }, [displayData.language, type])

    const toggleOpen = () => setIsOpen(!isOpen);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setIsOpen);
    
    return ( 
        currentHeader ?
        <div ref={wrapperRef} className="dd-container">
            <button className={`button ${isLanguage}`} onClick={()=> toggleOpen()}>{currentHeader}</button>
            {
                isOpen && <ul className="dd-list">
                    {list.map((el => {
                        return <DDItem key={el} item={el} type={type} setIsOpen={setIsOpen} setCurrentHeader={setCurrentHeader}/>
                    }))}

                </ul>
            }
        </div>
        : <></>
     );
}

export default Dropdown;