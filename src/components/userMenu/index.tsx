import React from "react";
import './style.css'
import UserInfo from "./user-info";

import bottomImg from '../../assets/img/bottom-img.webp'
import line from '../../assets/img/quebra.png'

const UserMenu = () => {
    return (
        <nav className="user-menu">
            <UserInfo />
        </nav>
    )
}

export default UserMenu