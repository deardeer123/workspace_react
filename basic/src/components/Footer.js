import { useState } from "react"

function Footer(){
    const num = 5
    console.log("Footer 렌더링!!!!!!!!!!!!!!")

    const [title, setTitle] = useState("기존제목")

    function changeTitle(){
        setTitle('바뀐 제목')
    }
    return(
        <>
        <div>Footer</div>
        <div>{num %2 == 0 ? '짝수' : '홀수'}</div>
        <div>{title}</div>
        <div><button type="button" onClick={changeTitle}>제목변경</button></div>
        <div><button type="button" onClick={()=>setTitle('바뀐 제목2')}>제목변경</button></div>
        
        </>
    )
}

export default Footer;