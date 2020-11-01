import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import noteActions from './../../actions';
import HighlightManager from "./../../utils/HighlightManager"
import DropDown from "./../Dropdown/Dropdown";

const InputArea = () => {

    const displayData = useSelector(state => state.workingText);
    const dispatch = useDispatch();
    
    const handleKeyDown = evt => {
        let value = displayData.content;
        let selStartPos = evt.currentTarget.selectionStart;

        if (evt.key === "Tab") {
            value =
                value.substring(0, selStartPos) +
                "    " +
                value.substring(selStartPos, value.length);
            evt.currentTarget.selectionStart = selStartPos + 3;
            evt.currentTarget.selectionEnd = selStartPos + 4;
            evt.preventDefault();

            dispatch(noteActions.workingTextAction.edit(value));

        }
    };
    return (
        <div className="input-container">
            <header className="input-header">
                <div className="uncollapsable">
                    <h1>{displayData.name}</h1>
                </div>
                <div className="row-container">
                    <DropDown list={HighlightManager.availableLanguages} firstItem={"javascript"} type="language"/>
                    <DropDown list={HighlightManager.availableThemes} firstItem="shadesOfPurple" type="theme"/>
                </div>
            </header>
            <textarea
                spellCheck={false}
                className="code-input"
                value={displayData.content}
                onChange={evt => dispatch(noteActions.workingTextAction.edit(evt.target.value))}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}


export default InputArea;