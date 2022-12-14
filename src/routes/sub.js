import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";

function Directory() {
  return <h2>외부 routes폴더에서 불러온 파일입니다.</h2>;
}

function Event() {
  return (
    <>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </>
  );
}

function Detail(props) {

  let { id } = useParams();
  let 찾은상품 = props.prd.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);

  useEffect(() => { 
    let a = setTimeout( ()=> { setAlert(false) }, 2000)
    return ()=> { // 클린업 function - 페이지를 새로 mount시 타이암아웃같은 경우 타이머가 쌓임 -> 모두 클리어 후 새롭게 타이머 생성
        clearTimeout(a);
    }
  }, [ /* dependency - 특정 state변경시에만 실행 (아무것도 안 넣으면 mount후 1회만 실행) */ ]);

  // console.log("aa"); // 페이지 전환 또는 업데이트 후 바로 실행되는 것

  // useEffect(()=> { /* 1. 재렌더링마다 코드 실행하고 싶으면 여기 안으로 코드 삽입 */ }) 
  // useEffect(()=> { /* 2. mount시 1회 코드 실행하고 싶으면 여기 안으로 코드 삽입 */ }, [ /* 5. 특정 state 변경시에만 실행하려면 여기 안으로 state명 삽입 */ ]) 
  // useEffect(()=> { 
  //   return ()=> {
  //     // 3. unmount시 1회 코드 실행하고 싶으면 여기 안으로 코드 삽입
  //     // 4. useEffect 실행 전에 뭔가 실행하려면 언제나 여기 안으로 코드 삽입
  //   }
  //  }, [])

  // 숙제) input태그에 숫자 아닌 다른거 넣을때 알럿창 띄우기
  // let [num, setNum] = useState('');
  // useEffect(()=> {
  //   if (isNaN(num) === true) {
  //     alert('돈 두뎃')
  //   }
  // }, [num])

  return (
    <div className="container">
      { alert === true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null }
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row w-100">
        <div className="col-md-5 w-100 row align-items-center justify-content-center">
          <img src={찾은상품.img} className="w-auto" />
          <div className="w-50">
            {/* <input onChange={((e)=> { setNum(e.target.value) })} /> 숙제) 인풋창에 숫자아닌 다른거 넣으면 알럿창 띄우기 */}
            <h4 className="pt-2">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0" className="mt-5">
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(0) }} eventKey="link0">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(1) }} eventKey="link1">버튼2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(2) }} eventKey="link2" >버튼3</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭}/>

      </div>
    </div>
  );
}

function TabContent({탭}) {
  // if (탭 === 0) {
  //   return <div>내용1</div>
  // } else if (탭 === 1) {
  //   return <div>내용2</div>
  // } else if (탭 === 2) {
  //   return <div>내용3</div>
  // }

  // 위에 if문 대신 들어갈 수 있는 것 배열형식으로 반환하기
  return [ <div>내용1</div>, <div>내용2</div>, <div>내용3</div> ][탭]
}


export { Directory, Event, Detail };
