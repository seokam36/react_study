// export default function 컴포넌트명 (props) {return}
// JSX -> HTML과 유사한 확장문법
// 주의할점 : 리액트가 만든 가상의 HTML
// 차이점 : class -> className , onclick -> onClick
// 실제DOM (개수한계, 상태X)
// 가짜DOM (새로운DOM, 상태(props)O)

export default function MyMarkUp(props){
    return <div> my markup </div>
}

