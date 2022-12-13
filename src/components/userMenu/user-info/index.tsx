import React from "react";
import './style.css'

import userPic from '../../../assets/img/user.png'



const UserInfo = () => {
    return (
        <div className="user-info">
            <img className="user-info__pic" src={userPic} />
            <div className="user-info__name">Name Example</div>

            <section className="user-info__options">
                <ul >
                    <li>option 1</li>
                    <li>option 2</li>
                    <li>option 3</li>
                    <li>option 4</li>
                </ul>
            </section>


        </div>
    )
}

export default UserInfo