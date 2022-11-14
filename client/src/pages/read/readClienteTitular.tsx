import { Button, Table } from "react-bootstrap";
import Navigation from "../../components/navbar/navbar";

// importing icons ✨
import { BsPencil, BsTrash, BsLink45Deg } from "react-icons/bs"

// importing css ✨
import './style.css'

// importing modals ✨
import ModalForm from "../../components/modal/modal";
import ModalEditarClienteTitular from "../../components/modal/modalEditarClienteTitular";
import ModalPerfilClienteTitular from "../../components/modal/modalPerfilClienteTitular";
import ModalExcluirDocumento from "../../components/modal/modalExcluirDocumento";
import ModalExcluirTelefone from "../../components/modal/modalExcluirTelefone";

export default function ReadClienteTitular() {
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
                                    body={<ModalPerfilClienteTitular />}
                                />
                            </td>
                            <td>
                                <ModalForm
                                    button='Editar!'
                                    title='Edite informações do cliente!'
                                    body={<ModalEditarClienteTitular />}
                                />
                            </td>
                            <td>
                                <Button variant="outline-dark">Excluir!</Button>

                                <ModalForm
                                    button='Excluir documento!'
                                    title='Exclua documento do cliente!'
                                    body={<ModalExcluirDocumento />}
                                />

                                <ModalForm
                                    button='Excluir telefone!'
                                    title='Exclua telefone do cliente!'
                                    body={<ModalExcluirTelefone />}
                                />
                            </td>

                        </tr>

                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>                                
                                <ModalForm
                                    button='Perfil!'
                                    title='Visualizar informações do cliente!'
                                    body={<ModalPerfilClienteTitular />}
                                />
                            </td>
                            <td>
                                <ModalForm
                                    button='Editar!'
                                    title='Edite informações do cliente!'
                                    body={<ModalEditarClienteTitular />}
                                />
                            </td>
                            <td>
                                <Button variant="outline-dark">Excluir!</Button>

                                <ModalForm
                                    button='Excluir documento!'
                                    title='Exclua documento do cliente!'
                                    body={<ModalExcluirDocumento />}
                                />

                                <ModalForm
                                    button='Excluir telefone!'
                                    title='Exclua telefone do cliente!'
                                    body={<ModalExcluirTelefone />}
                                />
                            </td>

                        </tr>

                    </tbody>

                </Table>

            </div>

        </>
    )
}