import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import { CartWidget } from './CartWidget';
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Cart} from "./Cart";

export const Navbar = () => {
    return (
        <NavBar expand="lg" bg="dark" data-bs-theme="dark" >
            <Container>
                <NavBar.Brand href="/">Punto Lan</NavBar.Brand>
                <Cart />
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link className="" to="/" as={NavLink}>
                    Inicio
            </Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#home"></Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item to="/category/Accesorios" as={NavLink}>
                Accesorios
            </NavDropdown.Item>
            <NavDropdown.Item to="/category/Software" as={NavLink}>
                Software
            </NavDropdown.Item>
            <NavDropdown.Item to="/category/Hardware" as={NavLink}>
                Hardware
            </NavDropdown.Item>
            <NavDropdown.Item to="/category/Gamer" as={NavLink}>
                Gamer
            </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
            </Form>
        </Nav>
        </NavBar.Collapse>
        <CartWidget />
    </Container>
    </NavBar>
    );
}