import { Form, Modal } from "react-bootstrap";

export default function ModalPerfilClienteDependente() {
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

                    <h5>- Documento(s) 🐚</h5>

                    <p>Tipo: Passaporte</p>
                    <p>Data de expedição: 29.03.1993</p>
                    <p>Número: 88888888</p>

                </Form.Group>

            </Form>

        </Modal.Body>
    )
}