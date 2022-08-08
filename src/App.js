/* eslint-disable */

import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 메인이미지 from './img/main-bg.jpg';

import './App.css';
import data from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [prd] = useState(data);
  
  return (
    <div className="App">
    
      <Navbar variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">SAMPLE SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" >HOME</Link>
            <Link to="/detail" >DETAIL</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          // (1)라우터 생성시 공백태그로 감싸고 시작하기
          <>
            <div className='main-bg' style={{background: 'url(' + 메인이미지 + ') center center no-repeat', backgroundSize: 'cover' }} />
            <Container>
              <Row>
                {/* (2)컴포넌트.map()을 외부에서 만들기 */}
                <PrdList 데이터= {prd}/>
              </Row>
            </Container>
          </>
        } />

        <Route path='/detail' element={
          <>
            <div className="container">
              {/* (3)컴포넌트.map()을 내부에서 만들기 */}
              {
                prd.map((a, i) => {
                  return (
                    <div className="row" key={i}>
                      <div className="col-md-6">
                        <img src={prd[i].img} width="100%" />
                      </div>
                      <div className="col-md-6">
                        <h4 className='pt-5'>{prd[i].title}</h4>
                        <p>{prd[i].content}</p>
                        <p>{prd[i].price}</p>
                        <button className="btn btn-danger">주문하기</button> 
                      </div>
                    </div>
                  );
                })
              }
            </div> 
          </>
        } />
      </Routes>

      
    </div>
  );
}

function PrdList(props) {   // (2)컴포넌트.map()을 외부에서 만들기

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
