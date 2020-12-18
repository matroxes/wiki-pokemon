import React from 'react'
import {  NavLink  } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <div className="nav-con">
                    <NavLink  className="home-con" exact activeClassName="acive" to="/" > Главная  </NavLink >
                    <NavLink  className="all-con"  activeClassName="acive" to="/all" > Все покемоны </NavLink >
                </div>
            </div>

        </>
    )
}

export default Header
