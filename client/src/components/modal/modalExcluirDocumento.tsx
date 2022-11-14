import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { BsXCircle } from 'react-icons/bs'

export default function ModalExcluirDocumento() {

    return (
        <Modal.Body>

            <Form.Label>Exclua um documento! 🐚</Form.Label>

            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Label>Documento(s)</Form.Label>

                    <Form.Select>
                        <option disabled>Selecione o documento a ser excluído</option>
                        <option value="1">222.299.999.22 - Passaporte</option>
                        <option value="2">999.922.222.99 - Cadastro de Pessoa Física</option>
                    </Form.Select>

                </Form.Group>

                <Button variant="outline-dark" id="botao-criar-tel"><BsXCircle /></Button>

            </Form>

        </Modal.Body>
    )
}