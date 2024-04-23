import axios from "axios";
import { useEffect, useState } from "react";

function CarManagement() {

    let [modelName, setModelName] = useState('');
    let [madeBy, setMadeBy] = useState('');
    let [price, setPrice] = useState(0);

    let [chk, setChk] = useState(false);
    let [chk2, setChk2] = useState(false);

    let [regCarInfo, setRegCarInfo] = useState({
        modelName: '현대'
    });

    let [carInfo, setCarInfo] = useState([]);

    useEffect((
        () => {
            axios.get('/carList')
                .then((response) => {
                    console.log(response.data)
                    setCarInfo(response.data)
                })
                .catch((err) => { console.log(err) })
        }
    ), [chk])

    return (
        <>
            <h4>차량 등록</h4>
            <div className="row">
                <div className="col-4">
                    <span>
                        제조사
                        <select className="form-select" onChange={(e) => {
                            setRegCarInfo({ ...regCarInfo, modelName: e.target.value })
                        }}>
                            <option value={'현대'}>현대</option>
                            <option value={'기아'}>기아</option>
                            <option value={'쌍용'}>쌍용</option>
                        </select>
                    </span>
                </div>
                <div className="col-4">
                    <span>
                        모델명
                        <input className="form-control" onChange={(e) => {
                            setRegCarInfo({ ...regCarInfo, madeBy: e.target.value })
                        }}></input>
                    </span>
                </div>
                <div className="col-4">
                    <span>
                        차량가격
                        <input className="form-control" onChange={(e) => {
                            setRegCarInfo({ ...regCarInfo, price: e.target.value })
                        }}></input>
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-10"></div>
                <div className="col">
                    <input type="button" className="btn btn-primary" value={"등록"} onClick={() => {
                        axios.post('/carList', regCarInfo)
                        window.location.replace("/carManagement")
                        // if(chk){
                        //     setChk(false);
                        //     setChk2(true)
                        //     console.log(chk)
                            
                        // }else{
                        //     setChk(true)
                        //     setChk2(false)
                        //     console.log(chk)
                        // }
                        
                    }}></input>
                </div>
            </div>

            <div>
                test
                <span>{regCarInfo.modelName}</span>
                <span>{regCarInfo.madeBy}</span>
                <span>{regCarInfo.price}</span>
                <span></span>
            </div>
            {/* 차량목록 */}
            <h4>차량목록</h4>
            <div className="row">
                <div className="col">
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <td>모델번호</td>
                                <td>모델명</td>
                                <td>제조사</td>
                            </tr>
                        </thead>
                        {/* map 써야할듯 */}
                        <tbody>
                            {
                                carInfo.length == 0 ?
                                    <tr><td colSpan={3}>조회된 데이터가 없어요</td></tr> :
                                    carInfo.map((e, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td>{e.carNum}</td>
                                                <td>{e.modelName}</td>
                                                <td>{e.madeBy}</td>
                                            </tr>
                                        )
                                    })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default CarManagement;