import axios from "axios";
import { useEffect, useState } from "react";

const SalesList = () => {
    let [salesList, setSalesList] = useState([])

    useEffect(() => {
        axios.get("/salesList").then((response) => {
            console.log(response.data)
            setSalesList(response.data);
        }).
            then((err) => { })
    }, [])

    return (
        <>
            판매목록
            <table className="table table-success">
                <thead>
                    <tr>
                        <td>no</td>
                        <td>구매자명</td>
                        <td>연락처</td>
                        <td>구매일</td>
                        <td>색상</td>
                        <td>모델명</td>
                        <td>금액</td>
                    </tr>
                </thead>
                <tbody>
                    {salesList.map((info, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{salesList.length - idx}</td>
                                <td>{info.buyer}</td>
                                <td>{info.tel}</td>
                                <td>{info.salesDate}</td>
                                <td>{info.color}</td>
                                <td>{info.carInfoVO.modelName}</td>
                                <td>{info.carInfoVO.price}</td>
                            </tr>
                        )

                    })}
                </tbody>


            </table>
        </>
    )
}

export default SalesList;