import React from "react";
import Modal from "./Modal";
import "./styles/Modal.css";

function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You about to delete this badge.</p>
        <div className="DeleteBadgeModal__button-container">
            <button onClick={props.onDeleteBadge} className="btn-danger">Delete</button>
            <button onClick={props.onClose} className="btn-primary">Cancel</button>
        </div>
        </div>

    </Modal>
}

export default DeleteBadgeModal;