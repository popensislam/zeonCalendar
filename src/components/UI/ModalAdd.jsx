import React, { useEffect, useRef, useState } from 'react';

const ModalAdd = ({ active, setActive }) => {

    return (
        <>
            <div onClick={() => setActive(false)} className={active ? "modal-wrapper" : "modal-wrapper active-modal"}>
            </div>
            <div className={active ? "modal" : "modal active-modal"}>
                <div className="modal-data">
                    <h1>8 FEB 2022</h1>
                </div>
                <div className="modal-title">
                    <input type='text' placeholder="Title" />
                </div>
                <div className="modal-text">
                    <textarea placeholder='Write down your plans' />
                </div>
                <div className="modal-button">
                    <button>Add</button>
                </div>
            </div>
        </>
    );
}

export default ModalAdd;