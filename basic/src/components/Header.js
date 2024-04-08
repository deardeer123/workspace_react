import { useState } from "react";

function Header({num1, myName}) {

    // const{num1, myName} = props;
    //input 태그에 입력한 데이터를 저장할 변수
    let [addr, setAddr] = useState('');
    return (
        <>
            <div>
                {/* <h1>headrer{props.num1}</h1>
                <h1>headrer{props.myName}</h1> */}
                <h1>headrer{num1}</h1>
                <h1>headrer{myName}</h1>
                <h1>{addr}</h1>
                <input type="text" name="addr" onChange={(e)=>{
                    console.log(e.target)
                    setAddr(e.target.value)}}></input>
                <h1>---------------------</h1>
            </div>
        </>
        
    )
}

export default Header;