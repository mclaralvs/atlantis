import { Form, Modal } from "react-bootstrap";

export default function ModalEditarClienteTitular() {
    return (
        <Modal.Body>

            <Form.Label>Escolha apenas o que quiser atualizar! 🐚</Form.Label>

            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Novo nome do cliente titular</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Insira o novo nome do cliente titular"
                        autoFocus
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Novo nome social do cliente titular</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Insira o novo nome social do cliente titular"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Novo endereço do cliente titular</Form.Label>

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

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Label>Telefone(s)</Form.Label>

                    <Form.Select>
                        <option disabled>Selecione o telefone a ser alterado</option>
                        <option value="1">2222-9999</option>
                        <option value="2">9999-2222</option>
                    </Form.Select>

                    <Form.Control
                        type="tel"
                        placeholder="Insira o novo ddd"
                    />

                    <Form.Control
                        type="tel"
                        placeholder="Insira o novo telefone"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Label>Documento(s)</Form.Label>

                    <Form.Select>
                        <option disabled>Selecione o documento a ser alterado</option>
                        <option value="1">222.299.999.22 - Passaporte</option>
                        <option value="2">999.922.222.99 - Cadastro de Pessoa Física</option>
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

            </Form>

        </Modal.Body>
    )
}