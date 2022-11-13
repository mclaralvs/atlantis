import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BsXCircle, BsPlusCircle } from 'react-icons/bs'

// importing css ✨
import './style.css'

export default function CreateClienteTitular() {
    const [formValue, setFormValue] = useState([{}])
    const [telefone, setTelefone] = useState([{ 'ddd': "", 'numero': "" }])
    const [documento, setDocumento] = useState([{ 'tipo': "", 'numero': "", "data": "" }])

    const handleInputChange = (e: any, index: any) => {
        const { name, value } = e.target;
        const list = [...telefone];
        //list[index][name] = value;
        setTelefone(list);
    };

    const handleAddTelefone = () => {
        setTelefone([...telefone, { ddd: "", numero: "" }]);
    };

    let handleRemoveTelefone = (indexTel: any) => {
        let newTelefone = [...telefone];
        newTelefone.splice(indexTel, 1);
        setTelefone(newTelefone)
    }

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

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Nome do cliente titular</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Insira o nome do cliente titular"
                            autoFocus
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Nome social do cliente titular</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Insira o nome social do cliente titular"
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Endereço do cliente titular</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Insira a rua do cliente titular"
                        />

                        <Form.Control
                            type="text"
                            placeholder="Insira o bairro do cliente titular"
                        />

                        <Form.Control
                            type="text"
                            placeholder="Insira a cidade do cliente titular"
                        />

                        <Form.Control
                            type="text"
                            placeholder="Insira o estado do cliente titular"
                        />

                        <Form.Control
                            type="text"
                            placeholder="Insira o país do cliente titular"
                        />

                        <Form.Control
                            type="text"
                            placeholder="Insira o código postal do cliente titular"
                        />

                    </Form.Group>

                    {telefone.map((field, indexTel) => {
                        return (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                <Form.Label>Telefone(s)</Form.Label>

                                <Form.Control
                                    type="tel"
                                    value={field.ddd}
                                    placeholder="Insira o ddd"
                                />

                                <Form.Control
                                    type="tel"
                                    value={field.numero}
                                    placeholder="Insira o telefone"
                                />

                            </Form.Group>

                        )
                    })}

                    <Button variant="outline-dark" onClick={handleAddTelefone} id="botao-criar-tel"><BsPlusCircle /></Button>

                    {telefone.length > 1 ?
                        <Button variant="outline-dark" onClick={handleRemoveTelefone} id="botao-criar-tel"><BsXCircle /></Button>

                        :

                        <></>
                    }

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
                                    value={field.numero}
                                    placeholder="Insira o número do documento"
                                />

                                <Form.Control
                                    type="tel"
                                    value={field.data}
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

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Label>Acomodação</Form.Label>

                        <Form.Select>

                            <option disabled>Selecione o telefone a ser alterado</option>
                            <option value="Casal Simples">Casal Simples</option>
                            <option value="Familia Simples">Familia Simples</option>
                            <option value="Familia Mais">Familia Mais</option>
                            <option value="Familia Super">Familia Super</option>
                            <option value="Solteiro Simples">Solteiro Simples</option>
                            <option value="Solteiro Mais">Solteiro Mais</option>
                        </Form.Select>

                    </Form.Group>

                    <Button variant="outline-dark">Cadastrar!</Button>

                </Form>

            </div>

        </>
    )
}