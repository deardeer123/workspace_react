import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const DetailBoard = (e) => {

    const navigate = useNavigate();

    let [boardInfo, setBoardInfo] = useState({});

    const { boardNum } = useParams();

    useEffect(() => {
        axios.get(`/detailBoard/${boardNum}`)
            .then((response) => {
                console.log(response.data)
                setBoardInfo(response.data)
            }).catch((err) => { console.log(err) })
    }, [])

    return (
        <>
            {/* <div>글번호 : {boardInfo.boardNum}</div>
        <div>제목 : {boardInfo.title}</div>
        <div>내용 : {boardInfo.content}</div>
        <div>작성자 : {boardInfo.writer}</div>
        <div>작성일 : {boardInfo.createDate}</div>
        <div>조회수 : {boardInfo.readCnt}</div> */}

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
                        <td colSpan={5}>내용 : {boardInfo.content}</td>
                    </tr>

                </tbody>

            </table>

            <div>
                <button className="btn btn-success" type="button" onClick={() => {
                    navigate("/list")
                }}>목록가기</button>

                <button className="btn btn-success" type="button" onClick={() => {
                    navigate(`/modifyBoard/${boardInfo.boardNum}`)
                }}>수정하기</button>

                <button className="btn btn-success" type="button" onClick={() => {
                    if (window.confirm("삭제하실건가요")) {
                        axios.get(`/deleteBoard/${boardNum}`)
                        navigate("/list")
                    }

                }}>삭제하기</button>
            </div>


        </>
    )
}

export default DetailBoard;