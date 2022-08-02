/* eslint-disable */

import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 메인이미지 from './img/main-bg.jpg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">Wshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{background: 'url(' + 메인이미지 + ')' }}></div>
      
      <Container>
        <Row>
          <Col sm>상품</Col>
          <Col sm>상품</Col>
          <Col sm>상품</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
