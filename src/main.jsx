// [필수] 1. 리액트 라이브러리 최초로 렌더링하는 함수
import { createRoot } from "react-dom/client";
import Component1 from "./example/day02/Component1.jsx";
import Component2 from "./example/day02/Component2.jsx";
import Component3 from "./example/day02/Component3.jsx";
import Component5 from "./example/day01/Component5.jsx";
import Practice1 from "./example/practice1/Practice1.jsx";
// [필수] 2. index.html 에서 root 마크업 가져오기
const root = document.querySelector('#root')
// [필수] 3. 거져온 root 마크업을 createRoot 함수에 전달
const create = createRoot(root)

// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 렌더링
// 1. import 이용하여 컴포넌트 가져오기

// 2. 가져온 컴포넌트 렌더링
//create.render(<App></App>)
//import MyMarkUp from "./example/day01/MyMarkUp.jsx";
//create.render(<MyMarkUp></MyMarkUp>)
//create.render(<Component1></Component1>)
//create.render(<Component2></Component2>)
create.render(<Component3></Component3>)