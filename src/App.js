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
            <Nav.Link href="#features">버버리</Nav.Link>
            <Nav.Link href="#pricing">아디다스</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{background: 'url(' + 메인이미지 + ') center center no-repeat', backgroundSize: 'cover' }}>
        
      </div>
      
      <Container>
        <Row>
          <PrdList 데이터= {prd}/>

          {/* 이렇게 사용해도 됨
          {
            prd.map((a, i) => {
              return (
                <Col sm key={i}>
                  <img src={prd[i].img} width="100%" />
                  <h4>{prd[i].title}</h4>
                  <p>{prd[i].content}</p>
                </Col>
              );
            })
          } 
          */}
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
          {/* (1) public 경로를 이용한 이미지 불러오기
          <img src={process.env.PUBLIC_URL + '/img' + (i + 1) + '.jpg'} width="100%" /> */}

          {/* (2) 데이터에 이미지 추가 */}
          <img src={props.데이터[i].img} width="100%" />

          <h4>{props.데이터[i].title}</h4>
          <p>{props.데이터[i].content}</p>
        </Col>
      )
    })
    
  );
}

export default App;
