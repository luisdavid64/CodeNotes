import React from 'react';
import Sidebar from "./../Sidebar/Sidebar"
import Editor from "./../Editor/Editor"
import NoteOptions from './../NoteOptions/NoteOptions';
import UserAPI from "./../../utils/UserAPI";
import { Redirect} from 'react-router-dom';

function MainPage() {

  return (
    UserAPI.getCookie() ? 
    <>
      <div className="main-page">
        <NoteOptions/>
        <Sidebar />
        <Editor/>
      </div>
    </>
    : <Redirect to="/login"/>
  );
}

export default MainPage;
