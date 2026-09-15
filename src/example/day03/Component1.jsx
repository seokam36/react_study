/*
상대경로 : 현재파일 위치 기준으로 호출할 파일 경로
    ../ : 상위폴더로 1번 이동
    ../../ : 상위폴더 2번 이동
    ./ : 현재 경로
절대경로 : 특정경로(주로 루트) 기준으로 호출할 파일 경로
    / : 루트경로 뜻함
*/

// 전통방식의 css 파일 import css 파일경로
import './index.css'
import logo from '../../assets/hero.png'

export default function Component1(){
    // [3] CSS 객체 방식의 CSS 적용 : -하이픈 대신에 카멜표기법 사용
    const myStyle = {
        color : 'white', backgroundColor : 'DodgerBlue', padding : '10px', fontFamily : 'Verdana'
    }

    const iWidth = {
        maxWidth : '300px'
    }
    return(
        <>
            <h2>리액트 스타일</h2>
            <ol>
                {/* [2] 인라인방식의 CSS 적용 , { key:value } */}
                <li style={{color:"blue"}}>프론트 엔드</li>
                <ul>
                    {/* [4] 이미지 삽입하는 3가지 방법 */}
                    <li><img src="/img/logo.avif" style={iWidth}/></li>
                    <li><img src={logo}/></li>
                    <li><img src="http://nakja.co.kr/images/reactjs.png"/></li>
                </ul>
                {/* [1] 전통방식의 CSS 적용*/}
                <li className="backEnd">백 엔드</li>
                <ul>
                    <li id="backEndSub"> java </li>
                    <li class="warnings"> oracle </li>
                    <li style={myStyle}> jsp </li>
                </ul>
            </ol>
        </>
    )
}