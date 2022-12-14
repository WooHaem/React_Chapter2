/* eslint-disable */

import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import 메인이미지 from "./img/main-bg.jpg";

import "./App.css";
import data from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Directory, Event, Detail } from "./routes/sub.js";
import axios from 'axios';
import styled from "styled-components";

function App() {
  let [prd, setPrd] = useState(data); // use... 들은 hook임.
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">SAMPLE SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">HOME</Link>
            <Link to="/list">LIST</Link>
            <Link to="/sub">EVENT</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/directory">자료실</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            // (1)라우터 생성시 공백태그로 감싸고 시작하기
            <>
              <div
                className="main-bg"
                style={{
                  background: "url(" + 메인이미지 + ") center center no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <Container>
                <Row>
                  {/* (2)컴포넌트.map()을 외부에서 만들기 */}
                  <PrdList 데이터={prd} />
                </Row>
                <button onClick={()=> { 
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((결과)=> {
                    let copy = [...prd, ...결과.data];
                    setPrd(copy);
                    
                  })
                  .catch(()=> {
                    console.log('실패함')
                  })

                  Promise.all([ axios.get('url1'), axios.get('url2')])  // 두개 이상의 ajax 데이터를 가져올 때
                  .then(()=> {
                  })

                  // axios.post('/data', {name: 'kim'}) // 서버로 전송하기
                 }}>더보기</button>
              </Container>
            </>
          }
        />

        {/* (3)컴포넌트.map()을 내부에서 만들기 */}
        <Route
          path="/list"
          element={
            <>
              <div className="container">
                {prd.map((a, i) => {
                  return (
                    <div className="row" key={i}>
                      <div className="col-md-6">
                        <img src={prd[i].img} width="100%" />
                      </div>
                      <div className="col-md-6">
                        <h4 className="pt-5">{prd[i].title}</h4>
                        <p>{prd[i].content}</p>
                        <p>{prd[i].price}</p>
                        <button className="btn btn-danger">주문하기</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          }
        />

        <Route path="/list/:id" element={<Detail prd={prd} />} />

        <Route path="/directory" element={<Directory />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="/sub" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<h1>없는페이지요</h1>} />
      </Routes>
    </div>
  );
}

function About() {
  useEffect(() => {
    console.log("d");
  });

  return (
    <div>
      <h4>
        회사정보 nested routes 입니다. 현재 url에 뒤에 /member 또는 /location을
        입력해주세요
      </h4>
      <Outlet></Outlet>
    </div>
  );
}

function PrdList(props) {
  // (2)컴포넌트.map()을 외부에서 만들기

  return props.데이터.map(function (a, i) {
    return (
      <Col sm key={i}>
        {/* (1) public 경로를 이용한 이미지 불러오기
          <img src={process.env.PUBLIC_URL + '/img' + (i + 1) + '.jpg'} width="100%" /> */}

        {/* (2) 데이터에 이미지 추가 */}
        <img src={props.데이터[i].img} width="100%" />

        <h4>{props.데이터[i].title}</h4>
        <p>{props.데이터[i].content}</p>
      </Col>
    );
  });
}

export default App;
