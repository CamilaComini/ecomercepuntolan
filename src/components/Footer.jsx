import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <span>
                    <a href="#">Punto Lan</a>
                </span>
                <Nav className="footer-nav">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/category/Accesorios">Accesorios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/category/Gamer">Software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/category/Hardware">Hardware</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </footer>
    );
};
