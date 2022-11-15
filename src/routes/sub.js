import { Outlet } from "react-router-dom";

function Directory() {
  return <h2>외부 routes폴더에서 불러온 파일입니다.</h2>;
}

function Event() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
}

export { Directory, Event };
