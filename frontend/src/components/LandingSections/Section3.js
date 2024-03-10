import { useContext } from 'react';
import { Accordion, Card, AccordionContext } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import FAQS from './FAQData.json';

import up from '../../assets/icons/up.png';
import down from '../../assets/icons/down.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import section3Image from '../../assets/images/section3.jpg';

import './Section3.css';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        <button
            type="button"
            className="my-accordion-button d-flex w-100 transparentCard"
            onClick={decoratedOnClick}
        >
            <div className='flex-grow-1 d-flex flex-row ps-3 text-start'>
                {children}
            </div>
            <img src={ isCurrentEventKey ? up : down } className="accordion-icon m-auto iconsFAQ" alt="Icon" />
        </button>
    );
}

export default function Section3() {
    return (
        <div className="section3Container">
            <Row>
                <Col sm={12} md={6} className="text-center">
                    <img src={section3Image} className="Section3Image" alt="Section 3"/>
                </Col>
                <Col sm={12} md={6} className="text-center">
                    <p className="title1Section3">Frequently Asked Question</p>
                    <p className="title2Section3">Getting an accurate diagnosis can be one of the most impactful experiences that you can have. We can help you get there.</p>
                    <Accordion flush style={{marginTop: "10%"}}>
                        {FAQS.map((faq, index) => {
                            return (
                                <Card key={index}
                                    className={"p-0 m-3 border-white card-hover" + (index === 0 ? "border-top-0 card-hover" : "")}>
                                    <Card.Header>
                                        <div className='d-flex flex-row p-1 pb-2'>
                                            <ContextAwareToggle eventKey={index + 1} className="cv">{faq.question}</ContextAwareToggle>
                                        </div>                                
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index + 1}>
                                        <Card.Body className="cardAnswer">{faq.response}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })}
                    </Accordion>
                </Col>
            </Row>
        </div>
    )
}