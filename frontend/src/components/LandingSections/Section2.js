import Row from 'react-bootstrap/Row';

import poza from '../../assets/icons/Icon1Section1.png';

import './Section2.css';

export default function Section2() {
    return (
        <div className="section2Container">
            <Row>
                <p className="title1Section2">We Provide you with better ways to learn</p>
                <p className="title2Section2">We have collected many ways for you to learn about disabilities</p>
                    <div className="containerBox">
                        <div className="cardBox">
                            <img src={poza} className="imageCard" alt="Design"/>
                            <p className="cardTitle">Watch videos</p>
                            <p className="cardDescription">Watch short tutorials, lear sign language, braille, and many other methods to connect with disabled people</p>
                        </div>
                        <div className="cardBox">
                            <img src={poza} className="imageCard" alt="Design"/>
                            <p className="cardTitle">Read stories</p>
                            <p className="cardDescription">Learn about disabled people from other people sharing their own experiences</p>
                        </div>
                        <div className="cardBox">
                            <img src={poza} className="imageCard" alt="Design"/>
                            <p className="cardTitle">Read specialized articles</p>
                            <p className="cardDescription">You can find a currated collection of proffesional articles on the topic for you to read anytime, anywhere</p>
                        </div>
                        <div className="cardBox">
                            <img src={poza} className="imageCard" alt="Design"/>
                            <p className="cardTitle">Share thoughts</p>
                            <p className="cardDescription">Inform the world about your own experiences and stories by creating an article</p>
                        </div>
                        <div className="cardBox">
                            <img src={poza} className="imageCard" alt="Design"/>
                            <p className="cardTitle">Find articles online and share them</p>
                            <p className="cardDescription">You can use our cutting-edge web scrapper to search for keywords and automatically create an article</p>
                        </div>
                        <div className="cardBox">
                            <img src={poza} className="imageCard" alt="Design"/>
                            <p className="cardTitle">Transform webpages into articles</p>
                            <p className="cardDescription">Seen a good article elsewhere online? Just insert the url here and create a shortened article based off it</p>
                        </div>
                    </div>
            </Row>
        </div>
    )
}