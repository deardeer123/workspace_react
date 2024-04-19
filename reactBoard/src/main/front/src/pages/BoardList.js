import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

function BoardList() {
    const navigate = useNavigate();

    let [boardList, setBoardList] = useState({});
    useEffect(() => {
        axios.get("/getList").then(
            (response) => {
                console.log(response.data)
                setBoardList(response.data)
            }
        ).catch((e) => { console.log(e) })
    }, [])
    return (
        <>
            {/* 게시글 목록 페이지 */}
            <div>게시글 목록 페이지</div>

            <table className="table table-success table-striped mt-5">
                <thead>
                    <tr>
                        <td>NO</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                        <td>조회수</td>
                    </tr>
                </thead>

                <tbody>
                    {boardList.map((e, idx) => {
                        return (
                            <tr onClick={() => {
                                navigate(`/detailBoard/${e.boardNum}`)
                            }} key={idx}>
                                <td>{boardList.length - idx}</td>
                                <td>{e.title}</td>
                                <td>{e.writer}</td>
                                <td>{e.createDate}</td>
                                <td>{e.readCnt}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

            <div>
                <input type="button" className="btn btn-success" value={'글쓰기'}
                    onClick={() => {
                        navigate('/write');
                    }
                    }></input>
            </div>
        </>
    )

}
export default BoardList;