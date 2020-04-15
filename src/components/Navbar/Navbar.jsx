import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'


const Navbar = (props) => {
  return (

    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/receptions" activeClassName={s.active}>Receptions</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/customers" activeClassName={s.active}>Customers</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/sidebar" activeClassName={s.active}>Sidebar</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/medicines" activeClassName={s.active}>Medicines</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/add" activeClassName={s.active}>Add</NavLink>
      </div>
    </nav>


  );
};

export default Navbar