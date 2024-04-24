import axios from "axios";
import { useEffect, useRef, useState } from "react";

function CarManagement() {

    let [modelName, setModelName] = useState('');
    let [madeBy, setMadeBy] = useState('');
    let [price, setPrice] = useState(0);

    let [chk, setChk] = useState(0);
    let [chk2, setChk2] = useState(false);

    
    let [regCarInfo, setRegCarInfo] = useState([]);


    //input 태그를 컨트롤 할 때 사용
    const modelNameRef = useRef();
    const priceRef = useRef();

    //차량 등록에 필요한 데이터를 저장할 state 변수
    let [carInfo, setCarInfo] = useState({
        modelName: '',
        price: 0,
        madeBy: '현대'
    });

    //마운트 될때는 실행, 컴포넌트가 업데이트 될때 (재 렌더링 state변수가 바뀔때)
    const [cnt, setCnt] = useState(0);
    useEffect(()=>{
        console.log(cnt)
    },[cnt])


    useEffect((
        () => {
            axios.get('/carList')
                .then((response) => {
                    console.log(response.data)
                    setRegCarInfo(response.data)
                })
                .catch((err) => { console.log(err) })
        }
    ), [chk])


    //insert 데이터 세팅 함수 e.target.name => 태그의 이름
    const setData = (e) => {
        setCarInfo({ ...carInfo, [e.target.name]: e.target.value })
    }
    //등록 버튼 클릭 시 실행
    const insertCar = (e) => {
        // document.querySelector('input[name="modelName"]').value == ''
        if(carInfo.modelName == ''){
            alert("모델명 확인.")
            //
            modelNameRef.current.forcus();
            return ;
        }
        if(carInfo.price == 0){
            alert("가격 확인.")
            return ;
        }
        if(carInfo.modelName == '' || carInfo.price ==''){
            alert('빈값 확인.')
        }

        axios.post('/carList', carInfo)
            .then((response) => {
                //modelName를 가리키는 태그의 현재 value값을 ''으로 만듬
                modelNameRef.current.value = ''
                priceRef.current.value=''
                setCarInfo({
                    modelName: '',
                    price: 0,
                    madeBy: '현대'
                })


                axios.get('/carList')
                .then((response) => {
                    console.log(response.data)
                    setRegCarInfo(response.data)
                    setChk(chk+1)
                })
                .catch((err) => { console.log(err) })
            })
            .catch(err => {
                console.log(err)
            })
        // window.location.replace("/carManagement")
    }

    return (
        <>
            <button type="button" value={"asdf"} onClick={()=>{
                setCnt(cnt+1)
            }}></button>
            <h4>차량 등록</h4>
            <div className="row">
                <div className="col-4">
                    <span>
                        제조사
                        <select className="form-select" name="madeBy" onChange={setData}>
                            <option value={'현대'}>현대</option>
                            <option value={'기아'}>기아</option>
                            <option value={'쌍용'}>쌍용</option>
                        </select>
                    </span>
                </div>
                <div className="col-4">
                    <span>
                        모델명
                        <input className="form-control" name="modelName" ref={modelNameRef} onChange={setData}></input>
                    </span>
                </div>
                <div className="col-4">
                    <span>
                        차량가격
                        <input className="form-control" name="price" 
                        ref={priceRef} onChange={setData}
                        onKeyDown={(e)=>{
                            if(e.key == 'Enter'){
                                insertCar()
                            }
                        }}></input>
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-10"></div>
                <div className="col">
                    <input type="button" className="btn btn-primary" value={"등록"} onClick={insertCar}></input>
                </div>
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
                                    regCarInfo.map((e, idx) => {
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