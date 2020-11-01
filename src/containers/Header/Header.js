import React from 'react';
import "./Header.scss";
import {useDispatch } from 'react-redux';
import allActions from './../../actions';

/*Key word and set keyword follow the events on search bar in parent element */
const Header = ({setKeyWord}) => {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const search = data.get("search");
        dispatch(allActions.inputAction.setInput(search));
    }

    return(
        <header className="youtube-header">
               <button className="empty" onClick={() => dispatch(allActions.homeAction.setHomeOn())}>
                   <h1 className="youtube-header__title"><span>Important</span> Videos</h1>
               </button>
            <form onSubmit={handleSubmit} >
                <input 
                    name="search" 
                    className="youtube-header__input" 
                    placeholder="Search">
                </input>
            </form>

            <button className="youtube-header__button">Log <span>in</span></button>
        </header>

    )

}

export default Header;