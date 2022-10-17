import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// importing css ✨
import './style.css'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">

            <Container>

                <Navbar.Brand><Link to="/">Atlantis</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link><Link to="/">Home</Link></Nav.Link>

                        <NavDropdown title="Cliente" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.2">Ver todos</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">Atualizar</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.4">Excluir</NavDropdown.Item>

                        </NavDropdown>

                        <NavDropdown title="Dependente" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.2">Ver todos</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">Atualizar</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.4">Excluir</NavDropdown.Item>

                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Navigation;