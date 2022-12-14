import React from "react";
import './style.css'
import UserInfo from "./user-info";

import bottomImg from '../../assets/img/bottom-img.webp'
import line from '../../assets/img/quebra.png'

const UserMenu = () => {
    return (
        <nav className="user-menu">

            <UserInfo />
            {/* <img className="menu__imgLine" src={line} /> */}
            {/* <img className="user-menu__imgBottom" src={bottomImg} /> */}
            <div className="user-menu__imgBottom"> a </div>
        </nav>
    )
}

export default UserMenu