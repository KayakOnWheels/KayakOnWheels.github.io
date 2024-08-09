import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/backgroundImage.svg';
import githubLogo from '../assets/github-mark.svg';
import linkedInLogo from '../assets/linkedInLogo.png';
import cv from '../assets/cv-Gajewski-Grzegorz.pdf';
import {Button, Image, Modal} from 'react-bootstrap';
import './home.css';
import {useState} from "react";

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center" // Remove padding and margin
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden' // Ensure no overflow issues
            }}
        >
            <Col xs={12} sm={10} md={8} xl={6} className="d-flex flex-column border border-5 border-dark-subtle rounded-3 p-3 ps-4 bg-white mx-0 mx-sm-2 mx-md-2" style={{maxWidth: '640px'}}>
                <Col className="mb-3 d-flex gap-2 row">
                    <h1 className="mb-0 fw-normal">Grzegorz Gajewski</h1>
                    <h5 className="mb-0 fw-light">Third year student of computer science</h5>
                    <h6 className="fw-light">Specialized in Java Business Applications</h6>
                </Col>
                <Col className="mb-3 d-flex gap-2">
                    <Button href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="dark" className="border-2 bg-dark-subtle text-black custom-btn" >Resume</Button>
                    <Button variant="warning" className="border border-black border-2 fw-bold" onClick={handleShow}>Contact</Button>
                </Col>
                <Col className="d-flex gap-2">
                    <Button href={"https://github.com/KayakOnWheels/Gear2Go"} variant="outline-secondary" className="border-black" style={{maxWidth: '50px', maxHeight: '50px'}}>
                         <Image rounded src={githubLogo} alt="GitHub Logo" fluid />
                    </Button>
                    <Button href={"https://www.linkedin.com/in/grzegorz-gajewski-330506259/"} variant="outline-secondary" className="border-black" style={{maxWidth: '50px',maxHeight: '50px'}}>
                        <Image rounded src={linkedInLogo} alt="LinkedIn Logo" fluid />
                    </Button>
                </Col>
            </Col>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <Col>
                        Please visit my LinkedIn profile or Resume to obtain contact info.
                    </Col>
                </Modal.Body>
            </Modal>

        </Container>
    );
}

export default Home;