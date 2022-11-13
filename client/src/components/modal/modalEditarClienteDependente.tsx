import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { BsXCircle, BsPlusCircle } from 'react-icons/bs'

export default function ModalEditarClienteDependente() {
    const [formValue, setFormValue] = useState([{}])
    const [documento, setDocumento] = useState([{ 'tipo': "", 'numero': "", "data": "" }])

    const handleInputChange = (e: any, index: any) => {
        const { name, value } = e.target;
        const list = [...formValue];
        //list[index][name] = value;
        setFormValue(list);
    };

    const handleAddDocument = () => {
        setDocumento([...documento, { tipo: "", numero: "", data: "" }]);
    };

    let handleRemoveDocument = (indexDoc: any) => {
        let newDocuments = [...documento];
        newDocuments.splice(indexDoc, 1);
        setDocumento(newDocuments)
    }

    return (
        <Modal.Body>

            <Form.Label>Escolha apenas o que quiser atualizar! 🐚</Form.Label>

            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Novo nome do cliente dependente</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Insira o novo nome do cliente dependente"
                        autoFocus
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Novo nome social do cliente dependente</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Insira o novo nome social do cliente dependente"
                    />

                </Form.Group>

                {documento.map((field, indexDoc) => {
                    return (

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Label>Documento(s)</Form.Label>

                            <Form.Select>
                                <option disabled>Selecione o documento a ser alterado</option>
                                <option value="1">222.299.999.22</option>
                                <option value="2">999.922.222.99</option>
                            </Form.Select>

                            <Form.Control
                                type="tel"
                                placeholder="Insira o novo número do documento"
                            />

                            <Form.Control
                                type="tel"
                                placeholder="Insira a data de expedição no formato dd/mm/yyyy"
                            />

                        </Form.Group>

                    )
                })}

                <Button variant="outline-dark" onClick={handleAddDocument} id="botao-criar-tel"><BsPlusCircle /></Button>

                {documento.length > 1 ?
                    <Button variant="outline-dark" onClick={handleRemoveDocument} id="botao-criar-tel"><BsXCircle /></Button>

                    :

                    <></>
                }

            </Form>

        </Modal.Body>
    )
}