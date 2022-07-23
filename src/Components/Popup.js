import React, { useState } from 'react';

function Popup(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="yes-btn" 
                    onClick={props.handleClose}>No</button>
                <button className="no-btn"
                    onClick={props.handleDelete}>Yes</button>
                {props.content}
            </div>
        </div>
    );
};

export default Popup;
