import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BsXCircle, BsPlusCircle } from 'react-icons/bs'

export default function CreateClienteDependente() {
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
        <>
            <div className="container-cadastro">

                <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Label>Cliente titular</Form.Label>

                        <Form.Select>

                            <option disabled>Selecione cliente responsável por esse</option>
                            <option value="1">000.000.000-00 - Taylor Swift</option>
                            <option value="2">222.222.222-22 - Maria Clara</option>
                            <option value="3">444.444.444-44 - Mariana</option>

                        </Form.Select>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Nome do cliente dependente</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Insira o nome do cliente dependente"
                            autoFocus
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Nome social do cliente dependente</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Insira o nome social do cliente dependente"
                        />

                    </Form.Group>

                    {documento.map((field, indexDoc) => {
                        return (

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                <Form.Label>Documento(s)</Form.Label>

                                <Form.Select>

                                    <option disabled>Selecione o tipo de documento</option>
                                    <option value="1">Cadastro de Pessoa Física</option>
                                    <option value="2">Registro Geral</option>
                                    <option value="3">Passaporte</option>

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

                    <Form.Group></Form.Group>

                    <Button variant="outline-dark">Cadastrar!</Button>

                </Form>

            </div>


        </>
    )
}