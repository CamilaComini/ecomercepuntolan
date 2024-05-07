import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget';

export const NavBar = () => {

    return (
        <Navbar className="cssNav sticky-top">
            <Navbar.Brand as={Link} to="/" className="text-links">
                Punto Lan
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/products" className="text-links">
                    Productos
                </Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/products/Accesorios">
                        Accesorios
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/products/Software">
                        Software
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/products/Gamer">
                        Gamer
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/products/Hardware">
                        Hardware
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Link to="/cart" className="text-links">
                <CartWidget />
            </Link>
        </Navbar>
    );
};
