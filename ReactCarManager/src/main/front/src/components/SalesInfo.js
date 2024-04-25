import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SalesInfo() {
    let navigate = useNavigate();

    let [num, setNum] = useState(0);
    let [modelName, setModelName] = useState([]);

    let[salesInfo,setSalesInfo] = useState({
        buyer : '',
        tel : '' ,
        color : 'black' ,
        carNum : 0
    })

    let buyerRef = useRef();
    let telRef = useRef();
    let colorRef = useRef();
    let carNumRef = useRef();


    useEffect(() => {
            axios.get("/carList").then((respanse) => {
                console.log(respanse.data)
                setModelName(respanse.data)
                console.log(respanse.data[0])
                setSalesInfo({...salesInfo,carNum:respanse.data[0].carNum})
            }).catch((err) => {
                console.log(err)
            })

        },[])
    
    

    let setInfo = (e)=>{
        setSalesInfo({...salesInfo, [e.target.name]:e.target.value})
    }
    const insertInfo = ()=>{
        if(salesInfo.buyer == ''){
            alert("확인")
        }
        console.log(salesInfo)
        axios.post("/salesInfo",salesInfo).then(()=>{
            buyerRef.current.value=''
            telRef.current.value=''
            setSalesInfo({
                buyer : '',
                tel : '' ,
                color : colorRef.current.value ,
                carNum : carNumRef.current.value
            })
            navigate("/salesList")
        })
        
    }
    
    return (
        <>
            판매 정보 등록
            <div className="row text-center">
                <div className="col">
                    <div className="row">
                        <div className="col-2">
                            {/* 구매자명 */}
                            구매자명
                        </div>
                        <div className="col">
                            <input className="form-control" name="buyer" ref={buyerRef} onChange={setInfo}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            색상
                        </div>
                        <div className="col-3">
                            {/* 색상 */}
                            <select className="form-select" name="color" ref={colorRef} onChange={setInfo}>
                                <option value={"black"}>블랙</option>
                                <option value={"whire"}>화이트</option>
                                <option value={"silver"}>실버</option>
                                <option value={"red"}>레드</option>
                            </select>
                        </div>
                        <div className="col-2">

                        </div>
                        <div className="col-2">
                            모델
                        </div>
                        <div className="col-3">
                            {/* 모델 */}
                            <select className="form-select" name="carNum" ref={carNumRef} onChange={setInfo}>
                                {
                                    modelName.map((e, idx) => {
                                        // console.log(e)
                                        return (
                                            
                                            <option value={e.carNum} key={idx}>{e.modelName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            연락처
                        </div>
                        <div className="col">
                            <input className="form-control" name="tel" ref={telRef} onChange={setInfo}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary" onClick={insertInfo}>등록</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SalesInfo;