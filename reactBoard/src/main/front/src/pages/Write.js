import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Write = () => {

    let [title, setTitle] = useState('');
    let [writer, setWriter] = useState('');
    let [content, setContent] = useState('');

    let [boardInfo, setBoardInfo] = useState({
        title: '',
        writer: '',
        content: ''
    });

    const [isShow, setIsShow] = useState(false)
    let navigator = useNavigate();

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="row mt-2">
                        {/* 제목 */}
                        <div className="col-5">
                            제목
                        </div>
                        <div className="col-7 d-grid">
                            <input type="text" className="form-control" onChange={(e) => {
                                setBoardInfo({ ...boardInfo, title: e.target.value })
                            }}></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* 작성자 */}
                        <div className="col-5">
                            작성자
                        </div>
                        <div className="col-7 d-grid">
                            <input type="text" className="form-control" onChange={(e) => {
                                setBoardInfo({ ...boardInfo, writer: e.target.value })
                            }}></input>
                        </div>
                    </div>

                    <div className="row mt-2">
                        {/* 내용 */}
                        <div className="col-5">
                            내용
                        </div>
                        <div className="col-7 d-grid">
                            <textarea rows={5} cols={30} className="form-control" onChange={(e) => {
                                setBoardInfo({ ...boardInfo, content: e.target.value })
                            }}></textarea>
                        </div>
                    </div>

                    {isShow ?
                        <div>
                            <div>제목 : {boardInfo.title}</div>
                            <div>작성자 : {boardInfo.writer}</div>
                            <div>내용 : {boardInfo.content}</div>
                        </div>:null
                    }
                    <div className="row mt-5">
                        <div className="col">
                            <input type="button" className="btn btn-primary" value={'글쓰기'} onClick={(e) => {
                                setIsShow(true)
                                axios.post(`/insertBoard`,{...boardInfo}).then((response)=>{}).catch((err)=>{console.log(err)})
                                navigator("/list")
                            }}></input>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Write