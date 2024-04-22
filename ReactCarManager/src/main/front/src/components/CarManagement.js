function CarManagement() {
    return (
        <>
            <h4>차량 등록</h4>
            <div className="row">
                <div className="col-4">
                    <span>
                        제조사
                        <select className="form-select">
                            <option>현대</option>
                            <option>기아</option>
                            <option>쌍용</option>
                        </select>
                    </span>
                </div>
                <div className="col-4">
                    <span>
                        모델명
                        <input className="form-control"></input>
                    </span>
                </div>
                <div className="col-4">
                    <span>
                        차량가격
                        <input className="form-control"></input>
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="col-10"></div>
                <div className="col">
                    <input type="button" className="btn btn-primary" value={"등록"}></input>
                </div>
            </div>

            {/* 차량목록 */}
            <h4>차량목록</h4>
            <div className="row">
                <div className="col">
                    <table className="table-success">
                        <colgroup>
                            <col width={'30%'}></col>
                            <col width={'30%'}></col>
                            <col width={'40%'}></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <td>모델번호</td>
                                <td>모델명</td>
                                <td>제조사</td>
                            </tr>
                        </thead>
                        {/* map 써야할듯 */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>아반떼</td>
                                <td>제조사</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default CarManagement;