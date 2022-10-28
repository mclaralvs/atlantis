import { Form, Modal } from "react-bootstrap";

export default function ModalAcomodacao() {
    return (
        <Modal.Body>
            
            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Documento do cliente titular</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Insira o número do documento"
                        autoFocus
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Label>Acomodação</Form.Label>
                    
                    <Form.Select>
                        <option disabled>Selecione a acomodação desejada</option>
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