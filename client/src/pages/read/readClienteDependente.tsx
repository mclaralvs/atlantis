import { Button, Table } from "react-bootstrap";
import Navigation from "../../components/navbar/navbar";

// importing icons ✨
import { BsPencil, BsTrash, BsLink45Deg } from "react-icons/bs"

// importing css ✨
import './style.css'

// importing modals ✨
import ModalForm from "../../components/modal/modal";
import ModalEditarClienteDependente from "../../components/modal/modalEditarClienteDependente";
import ModalPerfilClienteDependente from "../../components/modal/modalPerfilClienteDependente";

export default function ReadClienteDependente() {
    return (
        <>

            <div className="container-visualizacao">

                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th>Nome</th>
                            <th>Nome Social</th>
                            <th id="link-icon"><BsLink45Deg /></th>
                            <th><BsPencil /></th>
                            <th><BsTrash /></th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Mark</td>
                            <td>Johnson</td>
                            <td>
                                <ModalForm
                                    button='Perfil!'
                                    title='Visualizar informações do cliente!'
                                    body={<ModalEditarClienteDependente />}
                                />
                            </td>
                            <td>
                                <ModalForm
                                    button='Editar!'
                                    title='Edite informações do cliente!'
                                    body={<ModalEditarClienteDependente />}
                                />
                            </td>
                            <td>
                                <Button variant="outline-dark">Excluir!</Button>
                            </td>

                        </tr>

                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>                                
                                <ModalForm
                                    button='Perfil!'
                                    title='Visualizar informações do cliente!'
                                    body={<ModalPerfilClienteDependente />}
                                />
                            </td>
                            <td>
                                <ModalForm
                                    button='Editar!'
                                    title='Edite informações do cliente!'
                                    body={<ModalEditarClienteDependente />}
                                />
                            </td>
                            <td>
                                <Button variant="outline-dark">Excluir!</Button>
                            </td>

                        </tr>

                    </tbody>

                </Table>

            </div>

        </>
    )
}