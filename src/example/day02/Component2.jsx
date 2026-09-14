// useSate 구조분해
// const [name, setName] = [ '유재석', function setter(){} ]
import {useState} from "react";

let global = 0; // 함수 밖 변수

export default function Component2(props){
    let local = 0; // 함수 안 변수
    // 1. 전역,지역변수 증가함수 : 내부적으로 증가O, 화면으로는 증가X
    const addFun1 = () => {
        local++;
        global++;
        console.log(global, local)
    }

    // 2. useState 함수 이용한 새로고침/재렌더링 ( 함수 재호출 -> 함수 return )
    // const [상태변수명, set상태변수명 ] = useState( 초기값 );
    // setXXX( 새로운 값 ) : 자동으로 현재 함수 재실행 , 지역변수는 초기화 , 상태변수는 유지
    const [count, setCount] = useState(0);
    const addFun2 = () => {
        setCount(count + 1)
    }

    // 3. 수박 요소 1개를 갖는 배열 초기값으로 상태변수 선언
    const [array, setArray] = useState(['수박'])

    // 배열내 '사과' 요소 추가하여 배열을 대입. 내부적으로 배열내 추가, 화면으로는 추가안됨
    // push는 값 변경이 아니고 내부적으로 추가
    // *** useState 상태의 주소값이 변경되어야 새로고침이 된다 ***
    // 주로 스프레드연산자 이용해서 배열/객체 복사
    const addFun3 = () => {
        // array.push('사과'); setArray(array);
        array.push('사과');
        setArray([...array]);
        console.log(array)
    }

   return (
       <>
           <h3> 상태 관리 </h3>
           <h4> 전역변수 : {global} , 지역변수 : {local}</h4>
           <button onClick={addFun1}> 버튼 1</button>
           <h4> 상태변수 : {count} </h4>
           <button onClick={addFun2}> 버튼 2</button>
           <h4> 상태변수 : {array} </h4>
           <button onClick={addFun3}> 버튼 3</button>
       </>
   )
}