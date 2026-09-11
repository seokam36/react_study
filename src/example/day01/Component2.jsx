
// 1. 선언적함수 방법으로 컴포넌트 생성
function FrontComp(){
    return <>
        <li> 프론트엔드 </li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
        </ul>
    </>
}

// 2. 화살표함수 방법으로 컴포넌트 생성
const BackComp = () => {
    return <>
        <li> 백엔드 </li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSR</li>
            <li>Spring Boot</li>
        </ul>
    </>
}

// 3. 익명함수 방법으로 컴포넌트 생성
let FormComp = function (){
    return <>
        <form>
            <select>
                <option> 프론트엔드 </option>
                <option> 백엔드 </option>'
            </select>
            <input/>
            <input type="submit" value="추가"/>
        </form>
    </>
}

// 4. 3가지의 컴포넌트 합치는 컴포넌트
export default function Component2(props){
    return <>
        <div>
            <h2> 리액트 컴포넌트</h2>
            <ol>
                <FrontComp></FrontComp>
                <BackComp></BackComp>
            </ol>
            <FormComp></FormComp>
        </div>
    </>
}