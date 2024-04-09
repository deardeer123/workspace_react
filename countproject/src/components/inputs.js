import { useState } from "react";

const Inputs = () => {

    let[member,setMember] = useState({
        'name' : '',
        'date' : '',
        'car' : '',
        'contnet' : ''
    });
    
    const changeMemberInfo = (e)=>{
        setMember({...member,
            [e.target.name] : e.target.value})
    }

    let[input1, setInput1] = useState('')
    let[date1, setDate1] = useState('')
    let[select1, setSelect1] = useState('아반떼')
    let[area1, setArea1] = useState('')


    console.log(member)
    return (
        <>
            <div>
                <div>input 컴포넌트</div>
                <div>
                    <input type="text" name="name" onChange={
                        changeMemberInfo
                    //     (e)=>{
                    //     const newMember = {...member}
                    //     newMember.name=e.target.value
                    //     setMember(newMember);

                    //     setMember({
                    //         ...member,
                    //         'name':e.target.value
                    //     })
                    // }
                    }/>
                </div>
                <div>
                    <input type="date" name="date"onChange={
                        changeMemberInfo
                    //     (e)=>{
                    //     setMember({
                    //         ...member,
                    //         'date':e.target.value
                    //     })
                    // }
                    }/>
                </div>
                <div>
                    <select name="car" onChange={
                        changeMemberInfo
                    //     (e)=>{
                    //     setMember({
                    //         ...member,
                    //         'car' : e.target.value
                    //     })
                    // }
                    }>
                        <option value={'아반떼'} aria-checked>아반떼</option>
                        <option value={'k3'}>k3</option>
                        <option value={'모닝'}>모닝</option>
                    </select>
                </div>
                <div>
                    <textarea cols={30} rows={5} name="content"onChange={
                        changeMemberInfo
                    //     (e)=>{
                    //     setArea1(e.target.value)
                    // }
                    }></textarea>
                </div>

                <div>
                    <button type="button" onClick={()=>{
                        let resultDiv = document.querySelector(".result-div")
                        resultDiv.children[0].innerHTML=`이름 : ${member.name}`
                        resultDiv.children[1].innerHTML=`날짜 : ${member.date}`
                        resultDiv.children[2].innerHTML=`설렉트 : ${member.car}`
                        resultDiv.children[3].innerHTML=`내용 : ${member['contnet']}`
                        
                    }}>입력 내용 확인</button>
                </div>
                <div className="result-div">
                    <div>이름 : </div>
                    <div>날짜 : </div>
                    <div>설렉트 : </div>
                    <div>내용 : </div>
                    
                </div>
            </div>
        </>
    );
}

export default Inputs