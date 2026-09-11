// 프롭스 : 상위컴포넌트에서 하위컴포넌트에게 전달하는 객체 props
function  plus2( props ){}
plus2({v1:3, v2:4}) // 3과 4 갖는 객체 1개
// ---------------------------------------------------------//

export default function Component3(props){  // -- 상위 요소
    let name = "유재석";
    // ---- return 부터 jsx 문법 구역 , 주석 : {/* 주석 */}
    // jsx 에서는 html문법 {js표현식}
    return(<>
            <div> {name} </div>
            <div> {10+20} </div>
            <input type="text" value="안녕" name="입력상자"/>
            <SubComp1 name="유재석" age="40"></SubComp1>
            <SubComp2 name={"유재석"} age={"40"}></SubComp2>
        </>)
}

function SubComp1(props){  // -- 하위 요소
    console.log(props) // {age:"40", name:"유재석"}
    return (
        <>
            <h4>{props.name}님 {props.age}세</h4>
        </>
    )
}

function SubComp2({name, age}){
    return(
        <>
            <h4>{name}님 {age}세</h4>
        </>
    )
}

// props : 객체 { }
// {name, age} = props{ }
// 즉, props 객체를 name 과 age 변수에 각각 저장