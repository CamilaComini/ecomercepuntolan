import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
    return (
        <footer className="footer" variant="bot">
            <div className="footer-ull">
                <span> 
                <a href="#" >Punto Lan</a>
                </span>
                <ul>
                    <li>
                        <Nav.Link to="/" as={NavLink}>Inicio</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link to="/category/Accesorios" as={NavLink}>Accesorios</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link to="/category/Software" as={NavLink}>Software</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link to="/category/Hardware" as={NavLink}>Hardware</Nav.Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer