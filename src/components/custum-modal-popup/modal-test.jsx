import React, { useState } from 'react'
import Modal from './modal';
import './modal.css'

export default function ModalTest() {

    const [showModalPopup, setShowMOdalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowMOdalPopup(!showModalPopup)
    }

    function onClose() {
        setShowMOdalPopup(false)
    }

  return (
    <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && (
            <Modal 
            id={'custom-id'}
            header={<h1>Cuatomized header</h1>}
            footer={<h1>Cuatomized footer</h1>}
            onClose={onClose}
            body={<div>Custumized body</div>}
            />)
        }
    </div>
  )
}
