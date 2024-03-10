import NavbarComponent from "../../components/Navbar/Navbar";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import './Landing.css';

export default function Landing() {
    return (
        <div>
            <NavbarComponent variant="landing"/>
            <div className="landing">
                <Row>
                    <Col sm={5}>
                        <p className="title1">Get closer to people!</p>
                        <p className="title2">Learn sign language and be informed on disabilities. Resposibility for a better life for everyone</p>
                        <div className="buttonLandingPadding">
                            <Button variant="light" className="buttonLanding1">Contact Us</Button>
                            <Button variant="light" className="buttonLanding2">Learn More</Button>
                        </div>
                    </Col>
                    <Col sm={7}/>
                </Row>
            </div>
        </div>
    )
}