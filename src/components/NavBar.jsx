import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Punto Lan</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/category/Accesorios">
                            Accesorios
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Software">
                            Software
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Hardware">
                            Hardware
                        </Nav.Link>
						<Nav.Link as={NavLink} to="/category/Gamer">
                            Gamer
                        </Nav.Link>
                    </Nav>
                    <CartWidget />
            </Container>
        </Navbar>
    </>
);
};

