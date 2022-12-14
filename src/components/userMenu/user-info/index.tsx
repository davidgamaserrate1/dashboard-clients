import React from "react";
import './style.css'

import userPic from '../../../assets/img/user.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const UserInfo = () => {
    return (
        <div className="userInfo">
            <img className="userInfo__pic" src={userPic} />
            <div className="userInfo__name">Name Example</div>

            <section className="userInfo__options">
                <ul className="userInfo__social" >
                    <li className="userInfo__social-item">
                        <InstagramIcon className="userInfo__social-icon" />
                        <span className="userInfo__social-value">instagram_example</span>
                    </li>
                    <li className="userInfo__social-item">
                        <WhatsAppIcon className="userInfo__social-icon" href="#" />
                        <span className="userInfo__social-value">(xx) xxxxx-xxxx</span>
                    </li>
                    <li className="userInfo__social-item">
                        <EmailIcon className="userInfo__social-icon" />
                        <span className="userInfo__social-value">emailexample@example.com</span>
                    </li>

                </ul>
            </section>


        </div>
    )
}

export default UserInfo