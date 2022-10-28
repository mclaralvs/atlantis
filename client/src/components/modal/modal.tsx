import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// importing css ✨
import './style.css'

export default function ModalForm(props: any) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                {props.button}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                {props.body}

                <Modal.Footer>

                    <Button variant="outline-dark" onClick={handleClose}>
                        Fechar
                    </Button>

                    <Button variant="outline-dark" onClick={handleClose}>
                        Salvar!
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}