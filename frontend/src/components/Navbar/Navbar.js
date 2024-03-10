import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../assets/logo/Logo.png';
import Phone from '../../assets/icons/Phone.png';
import Location from '../../assets/icons/Location.png';

import './Navbar.css';

export default function NavbarComponent({ variant }) {
    const { loggedUser } = useContext(AppContext);

    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <div className="navbarContainer">
            {variant === "landing" &&
                <>
                    <Container fluid className="navbarFirstComponent">
                        <Row>
                            <Col sm={3}>
                                <img src={Logo} className="logo" alt="Logo" />
                            </Col>
                            <Col sm={3} className="alignText">
                                <div className="dissapear">
                                    <img src={Location} className="iconLanding" alt="Location" />
                                    <span className="iconText">Bucharest, Romania</span>
                                </div>
                            </Col>
                            <Col sm={3} className="alignText">
                                <div className="dissapear">
                                    <img src={Phone} className="iconLanding" alt="Phone" />
                                    <span className="iconText">+40123456789</span>
                                </div>
                            </Col>
                            <Col sm={3} className="alignText">
                                <div className="dissapear">
                                    <Button variant="primary" className="buttonNavbar" href="#contact">Contact Us</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <hr className="hr" />
                </>
            }
            <Navbar key="xl" expand="xl" className="navbar mb-3">
                <Container>
                    <Navbar.Brand className="navbarTitle">For a better world of signs</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/" className="navbarText">Home</Nav.Link>
                            <Nav.Link href="/articles" className="navbarText">Articles</Nav.Link>
                            {loggedUser ? 
                                <>
                                    <Nav.Link href="/create" className="navbarText">Create</Nav.Link>
                                    <Nav.Link href="/browser" className="navbarText">Browser</Nav.Link>
                                    <Nav.Link href="/#contact" className="navbarText">Contact</Nav.Link>
                                    <Nav.Link onClick={logout} className="navbarText">Logout</Nav.Link> 
                                </>
                            : <>
                                <Nav.Link href="/browser" className="navbarText">Browser</Nav.Link>
                                <Nav.Link href="/#contact" className="navbarText">Contact</Nav.Link>
                                <Nav.Link href="/login" className="navbarText">Login</Nav.Link>
                                <Nav.Link href="/register" className="navbarText">Register</Nav.Link>
                            </>}
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}