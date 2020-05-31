import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {


    return (
        <div className={s.blockBody}>
            <header className={s.header}>
                <div className={s.logo}>
                    <h1>Social Network</h1>
                </div>
                    <div className={s.topMenu}>
                        <a href="#">Topic</a>
                        <a href="#">Info</a>
                        <a href="#">About</a>
                        <a href="#">Call back</a>
                        <a href="#">Contacts</a>
                        <a className={s.login}>{props.isAuth
                            ? <div>{props.login} - <button onClick={props.logout}>Log uot</button></div>
                            : <NavLink to={'/login'}>Login</NavLink>}</a>
                    </div>

            </header>
        </div>

    )
        ;

};

export default Header;