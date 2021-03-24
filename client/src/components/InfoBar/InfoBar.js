import React from 'react'
import './InfoBar.css';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <i style={{ marginRight: '10px', color: 'lightgreen' }} className="fas fa-user-secret"></i>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png" alt="close-img" /></a>
            </div>
        </div>
    )
}

export default InfoBar
