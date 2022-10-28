import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

// importing css ✨
import './style.css'

export default function Login() {
    return (
        <>

            <div className="container-login">
                <h1>Login</h1>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />

                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingPassword"
                    label="Senha"
                >

                    <Form.Control type="password" placeholder="Password" />

                </FloatingLabel>

                <Button variant="outline-dark"><Link to="/home">Reservar!</Link></Button>

            </div>
        </>
    )
}