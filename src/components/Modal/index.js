import React from "react"

import "./style.scss"

const Modal = ({ handleClose, title, body }) => {
  return (
    <div className="modalWrapper">
      <div className="modalContent">
        <div className="modelHeader">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>{title}</h2>
        </div>
        <div className="modalBody">{body}</div>
      </div>
    </div>
  )
}

export default Modal
