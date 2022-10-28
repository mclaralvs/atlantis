import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// importing css ✨
import './style.css'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">

            <Container>

                <Navbar.Brand><Link to="/home">Atlantis</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>

                        <NavDropdown title="Clientes" id="basic-nav-dropdown">

                            <NavDropdown.Item><Link to="/cadastrar">Cadastrar</Link></NavDropdown.Item>

                            <NavDropdown.Item><Link to="/visualizar">Visualizar</Link></NavDropdown.Item>

                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Navigation;