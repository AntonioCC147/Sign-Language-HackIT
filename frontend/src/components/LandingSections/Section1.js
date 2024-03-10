import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Icon1Section1 from '../../assets/icons/Icon1Section1.png';
import Icon2Section1 from '../../assets/icons/Icon2Section1.png';
import Icon3Section1 from '../../assets/icons/Icon3Section1.png';

import './Section1.css';

export default function Section1() {
    return (
        <div className="section1Container">
            <Row>
                <Col sm={12} md={6}>
                    <p className="title1Section1">Sign Language for a better<br/> understanding word</p>
                    <p className="title2Section1">Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there.</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                        <img src={Icon1Section1} className="section1IconImage" alt="Icon" style={{ marginRight: '10px' }} />
                        <div>
                            <span className="title3Section1">First sign tutorial</span><br/>
                            <span className="title4Section1">Watch the short video explaining some basic signs and do take your first step towards creating bridges between you and disabled people</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                        <img src={Icon3Section1} className="section1IconImage" alt="Icon" style={{ marginRight: '10px' }} />
                        <div>
                            <span className="title3Section1">Read articles and get informed</span><br/>
                            <span className="title4Section1">We have gathered some of the top articles on sign language and disabilities for you to read</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                        <img src={Icon2Section1} className="section1IconImage" alt="Icon" style={{ marginRight: '10px' }} />
                        <div>
                            <span className="title3Section1">Have better knowledge? Share with the world!</span><br/>
                            <span className="title4Section1">Sign in and create articles for the entire world to read. Help people around the globe connect through better understanding of each other</span>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} className="text-center" style={{marginTop: "25vh"}}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0FcwzMq4iWg?si=1LuQU7QnJJQXZQ2r" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
            </Row>
        </div>
    )
}