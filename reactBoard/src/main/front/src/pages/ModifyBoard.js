import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ModifyBoard = ()=>{
    let navigate = useNavigate();

    const {boardNum} = useParams()
    console.log(boardNum)

    let [boardInfo, setBoardInfo] = useState([])

    useEffect(()=>{
        axios.get(`/detailBoard/${boardNum}`)
        .then((response)=>{
            console.log(response.data)
            setBoardInfo(response.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    return(
        <>
        <div>글 수정</div>

        <table class="table table-success table-striped">
            <tbody>
            <tr>
                <td>글번호 : {boardInfo.boardNum}</td>
                <td>제목 : {boardInfo.title}</td>
                <td>작성자 : {boardInfo.writer}</td>
                <td>작성일 : {boardInfo.createDate}</td>
                <td>조회수 : {boardInfo.readCnt}</td>
            </tr>

            <tr>
                <td colSpan={5} onChange={(e)=>{
                    let content1 = e.target.value
                    setBoardInfo({...boardInfo,content:content1})
                }}>내용 : <textarea value={boardInfo.content}></textarea></td>
            </tr>

            </tbody>
            
        </table>
        <div>
            <button onClick={()=>{
                    axios.post("/modifyBoard", boardInfo).then((response)=>{console.log(response.data)}).catch((err)=>{console.log(err)})
                    navigate("/list")
                }
            }>
                수정하기
            </button>
        </div>
        </>
    )
}
export default ModifyBoard;