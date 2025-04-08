import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imgUrl = "https://www.tjoeun.co.kr/upload/site/banner/2025/2025032416514958335421102.png";

    return (
        <>
            <header id="header">
                <img src={imgUrl} className='img' alt="TjoeunLogo" />
                <h3>Tjoeun</h3>
                <div>
                    <Button variant="outline-primary">회원가입</Button> &emsp;
                    <Button variant="outline-success" onClick={handleShow}>로그인</Button>
                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>닫기</Button>
                    <Button variant="success">로그인</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;
