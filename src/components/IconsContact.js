import React from "react";
import location from '../image/location2.svg'
import message from '../image/message.svg'
import phone from '../image/phone.svg'
import planet from '../image/planet.svg'
import '../styles/iconograpic.css'

function IconsContact(){
    return(
        <div className="contact-icons">
            <div className="iconography">
                <div className="iconography-icon_section">
                    <img src={location} alt=""/>
                </div>
                <label>Address: <span>198 West 21th Street, <br/>Suite 721 New York NY 10016</span></label>
            </div>
            <div className="iconography">
                <div className="iconography-icon_section">
                    <img src={phone} alt=""/> 
                </div>
                <label>Phone: <span>+ 1235 2355 98</span></label>
            </div>
            <div className="iconography">
                <div className="iconography-icon_section">
                    <img src={message} alt=""/>
                </div>
                <label>Email: <span>info@yoursite.com</span></label>
            </div>
            <div className="iconography">
                <div className="iconography-icon_section">
                    <img src={planet} alt=""/>
                </div>
                <label>Website: <span>yoursite.com</span></label>
            </div>
        </div>
    );
}

export { IconsContact }
