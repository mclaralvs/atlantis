import { Form, Modal } from "react-bootstrap";

export default function ModalEditarClienteDependente() {
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

            </Form>

        </Modal.Body>
    )
}