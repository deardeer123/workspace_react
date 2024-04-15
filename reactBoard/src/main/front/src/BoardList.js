import { useState } from "react"

function BoardList({boardList}){
   
    return(
        <>
        <div className="row">
            <div className="col">
                <table className="table table-striped table-hover">
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
                        {
                        boardList.map((board,idx)=>{
                            return(
                                <tr key={board.boardNum}>
                                    <td>{boardList.length - idx}</td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                    <td>{board.createDate}</td>
                                    <td>{board.readCnt}</td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default BoardList;