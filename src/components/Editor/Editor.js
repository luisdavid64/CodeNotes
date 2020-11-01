import React, {useEffect} from "react";
import Display from "./Display";
import InputArea from "./InputArea";
import {useDispatch , useSelector } from 'react-redux';
import noteActions from './../../actions';
import HighlightManager from "./../../utils/HighlightManager";
import {welcome} from "./../../utils/Welcome";
import EmptyScreen from "./../EmptyScreen/EmptyScreen";

const Editor = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.fileReducer);
    const noteStore = useSelector(state => state.workingText);

    //Check if this works, otherwise revert to usual useEffect
    const initEditor = () => {
        dispatch(noteActions.workingTextAction.changeName(welcome.name));
        dispatch(noteActions.workingTextAction.changeLanguage(welcome.language));
        dispatch(noteActions.workingTextAction.changeStyle(HighlightManager.getTheme("shadesOfPurple")));
        dispatch(noteActions.workingTextAction.edit(welcome.content));
        dispatch(noteActions.fileAction.set(true));
        dispatch(noteActions.counterAction.increment());
    }

    useEffect(initEditor,[])


  return (

    (noteStore.name !== "") && (notes.mode === false || notes.mode === true) ?
      <div className="code-editor">
        { 
          notes.mode && <InputArea />
        }
        <Display/>
      </div>
      :
      <EmptyScreen />
  );
};

export default Editor;