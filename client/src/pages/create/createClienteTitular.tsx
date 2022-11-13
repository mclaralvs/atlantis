import { useState } from "react";
import { Button, Form } from "react-bootstrap";

// importing css ✨
import './style.css'

export default function CreateClienteTitular() {
    const [telefone, setTelefone] = useState([{ 'ddd': '', 'numero': '' }])

    const handleInputChange = (e: any, index: any) => {
        const { name, value } = e.target;
        const list = [...telefone];
        //list[index][name] = value;
        setTelefone(list);
    };

    const handleAddClick = () => {
        setTelefone([...telefone, { ddd: "", numero: "" }]);
    };

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

                    {telefone.map((field, index) => {
                        return (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                <Form.Label>Telefone(s)</Form.Label>

                                <Form.Control
                                    type="tel"
                                    placeholder="Insira o ddd"
                                />

                                <Form.Control
                                    type="tel"
                                    placeholder="Insira o telefone"
                                />

                            </Form.Group>
                        )
                    })}

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