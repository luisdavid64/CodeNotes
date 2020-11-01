import React from 'react';
import { Link , useLocation} from "react-router-dom";
import UserAPI from "./../../utils/UserAPI"
const NoteHeader = () => {

    const location = useLocation();

    return ( 
        <header className="note-header">
            <h1 className="note-header__title">
                <span className="note-header__title--reverse">Code</span>Notes
            </h1>
            {
                (location.pathname !== "/login") && 
                <Link className="note-header__button" to="/login" onClick={() => UserAPI.removeCookie()}>
                    <h2>
                        Log Out
                    </h2>
                </Link>
            }
        </header>
    );
}
 
export default NoteHeader;