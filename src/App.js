/* eslint-disable */

import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 메인이미지 from './img/main-bg.jpg';

import './App.css';
import data from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [prd] = useState(data);
  
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

      <div className='main-bg' style={{background: 'url(' + 메인이미지 + ') center center no-repeat', backgroundSize: 'cover' }}>
        
      </div>
      
      <Container>
        <Row>
          <PrdList 데이터= {prd}/>
        </Row>
      </Container>
    </div>
  );
}

function PrdList(props) {

  return (

    props.데이터.map(function(a, i) {
      return (
        <Col sm key={i}>
          {/* <img src={process.env.PUBLIC_URL + '/img' + (i + 1) + '.jpg'} width="100%" /> public 경로를 이용한 이미지 불러오기 */}
          <img src={props.데이터[i].img} width="100%" /> {/* 데이터에 이미지 추가 */}
          <h4>{props.데이터[i].title}</h4>
          <p>{props.데이터[i].content}</p>
        </Col>
      )
    })
    
  );
}

export default App;
