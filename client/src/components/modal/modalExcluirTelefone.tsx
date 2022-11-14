import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { BsXCircle } from 'react-icons/bs'

export default function ModalExcluirTelefone() {

    return (
        <Modal.Body>

            <Form.Label>Exclua um telefone! 🐚</Form.Label>

            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Label>Telefone(s)</Form.Label>

                    <Form.Select>
                        <option disabled>Selecione o telefone a ser excluído</option>
                        <option value="1">2222-9999</option>
                        <option value="2">9999-2222</option>
                    </Form.Select>

                </Form.Group>

                <Button variant="outline-dark" id="botao-criar-tel"><BsXCircle /></Button>

            </Form>

        </Modal.Body>
    )
}