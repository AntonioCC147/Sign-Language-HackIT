import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import LocationSymbol from '../../assets/icons/LocationSymbol.png';
import PhoneSymbol from '../../assets/icons/PhoneSymbol.png';
import MailSymbol from '../../assets/icons/MailSymbol.png';

import Facebook from '../../assets/icons/Facebook.png';
import Instagram from '../../assets/icons/Instagram.png';
import Linkedin from '../../assets/icons/Linkedin.png';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerContainer" id="contact">
            <Row>
                <Col sm={12} md={6} className="text-center">
                    <p className="title1Contact">Make Appointment</p>
                    <p className="title2Contact">Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there.</p>
                    <Row className="justify-content-center text-center" style={{marginTop: "10%"}}>
                        <Col sm={4}>
                            <p className="title3Contact">Quick Links</p>
                            <a href="/"><p className="linkFooter">Home</p></a>
                            <a href="/articles"><p className="linkFooter">Articles</p></a>
                            <a href="/browser"><p className="linkFooter">Browser</p></a>
                        </Col>
                        <Col sm={4}>
                            <p className="title3Contact">Other Pages</p>
                            <a href="/"><p className="linkFooter">Terms</p></a>
                            <a href="/"><p className="linkFooter">Conditions</p></a>
                            <a href="/"><p className="linkFooter">Services</p></a>
                        </Col>
                        <Col sm={4}>
                            <p className="title3Contact">Contact Info</p>
                            <div style={{marginBottom: "15px"}}>
                                <img src={LocationSymbol} alt="Symbol"/>{' '}Bucharest, Romania<br/>
                            </div>
                            <div style={{marginBottom: "15px"}}>
                                <img src={PhoneSymbol} alt="Symbol"/>{' '}+40123456789<br/>
                            </div>
                            <div style={{marginBottom: "15px"}}>
                                <img src={MailSymbol} alt="Symbol"/>{' '}sign@gmail.com
                            </div>
                        </Col>
                        <Row className="contactCard">
                            <Col sm={7}>
                                <p className="titleContactCard">Stay connected with us:</p>
                            </Col>
                            <Col sm={5}>
                                <img src={Facebook} className="iconContact" alt="Icon"/>
                                <img src={Instagram} className="iconContact" alt="Icon"/>
                                <img src={Linkedin} className="iconContact" alt="Icon"/>
                            </Col>
                        </Row>
                        <hr/>
                        <p className="copyRight">© {new Date().getFullYear()} Copyright | Website made by Sign Language Company</p>
                    </Row>
                </Col>
                <Col sm={12} md={6} className="d-flex justify-content-center">
                    <Form className="formCard" id="contact">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className="titleFormContact">Contact</p>
                            <Form.Label className="titleBoxContact">Name:</Form.Label>
                            <Form.Control type="name" placeholder="Enter name"/>
                            <Form.Label className="titleBoxContact">Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Label className="titleBoxContact">Message:</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter message"/>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="light" type="submit" style={{width: "130px", height: "50px"}}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}