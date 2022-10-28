import { Form, Modal } from "react-bootstrap";

export default function ModalPerfilClienteTitular() {
    return (
        <Modal.Body>

            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <h5>- Pessoal 🐚</h5>

                    <p>Nome: Taylor Alisson Swift</p>
                    <p>Nome social: Taylor Swift</p>
                    <p>Data de nascimento: 13/12/1989</p>
                    <p>Data de cadastro: 28/10/2022</p>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <h5>- Endereço 🐚</h5>

                    <p>Rua: Rua das Laranjeiras</p>
                    <p>Bairro: Bairro das Laranjeiras</p>
                    <p>Cidade: Cidade das Laranjeiras</p>
                    <p>Estado: São Paulo</p>
                    <p>País: Brasil</p>
                    <p>Código postal: 00000-000</p>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <h5>- Telefone(s) 🐚</h5>

                    <p>Número: (12)2222-9999</p>
                    <p>Número: (12)9999-2222</p>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <h5>- Documento(s) 🐚</h5>

                    <p>Tipo: Passaporte</p>
                    <p>Data de expedição: 29.03.1993</p>
                    <p>Número: 88888888</p>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <h5>- Acomodação 🐚</h5>

                    <p>Nomenclatura: Acomodação simples para casal</p>
                    <p>Quantidade de leitos para solteiros: 0</p>
                    <p>Quantidade de leitos para casais: 1</p>
                    <p>Climatização: sim</p>
                    <p>Quantidade de garagens disponíveis: 1</p>
                    <p>Quantidade de suites: 1</p>

                </Form.Group>

            </Form>

        </Modal.Body>
    )
}