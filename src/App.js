import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import NoteHeader from "./components/NoteHeader/NoteHeader"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app-container">

        <Router>
          <NoteHeader />
          <Switch>

            <Route exact path="/">
              <MainPage />
            </Route>

            <Route path="/login/">
              <Login/>
            </Route>
            
          </Switch>
          <Footer />
        </Router>

    </div> 
  );
}

export default App;
