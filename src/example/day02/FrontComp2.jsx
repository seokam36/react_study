export default function FrontComp2(props){
    return(
        <>
            <li>
                <a href="/" onClick={(event)=>{
                    event.preventDefault();
                    props.onSetMode('front');
                }}> 프론트 엔드 </a>
            </li>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
            </ul>
        </>
    )
}