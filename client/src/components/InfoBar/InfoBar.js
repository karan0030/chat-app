import React from 'react';
import './InfoBar.css';
import close_icon from '../../icons/close_icon.png';
import online_icon from '../../icons/online_icon.png';


const InfoBar = ({room}) => (
    <div className="info-bar">
        <div className="left-inner-container">
            <img src={online_icon} alt="online icon" className="online-icon" />
            <h3>{room}</h3>
        </div>
        <div className="right-inner-container">
            <a href="/"><img src={close_icon} alt="close icon"/></a>
        </div>
    </div>
);

export default InfoBar;