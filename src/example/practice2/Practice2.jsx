import {useState} from "react";

function InputForm(props){
    return (
        <>
            <form onSubmit={event => {
                event.preventDefault();
                let name = event.target.name.value;
                let telNum = event.target.telNum.value;
                let age = event.target.age.value;
                props.addForm(name,telNum,age)
            }}>
                <input type='text' name='name'/>
                <input type='text' name='telNum'/>
                <input type='text' name='age'/>
                <input type="submit" value="추가"/>
            </form>
        </>
    )
}


export default function Practice2(){
    const [list, setList] = useState([
            {'name' : '신동엽', 'telNum' : '010-XXXX-XXXX', 'age' : 50},
            {'name' : '강호동', 'telNum' : '010-XXXX-XXXX', 'age' : 40},
            {'name' : '유재석', 'telNum' : '010-XXXX-XXXX', 'age' : 30}
        ]
    )

    const addForm = (name,telNum,age) => {
        let newForm = [...list, {'name':name, 'telNum':telNum, 'age':age}]
        setList(newForm);
    }

    const deleteFrom = (i) => {
        list.splice(i,1);
        setList([...list])
    }
    return(
        <>
            <h2> 전화번호부 </h2>
            <InputForm addForm={(name, telNum, age)=> {addForm(name, telNum, age)}}/>
            <ol>
                <ul>
                    {list.map((item, i) =>
                        <li key={i}>{item.name} {item.telNum} {item.age} <button onClick={()=>deleteFrom(i)}> 삭제 </button></li>)}
                </ul>
            </ol>
        </>
    )
}