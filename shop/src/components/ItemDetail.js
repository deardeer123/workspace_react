import {useNavigate} from 'react-router-dom';

function ItemDetail() {
  const navigate = useNavigate();
  return(
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
        <img width='100%' src={process.env.PUBLIC_URL + `/images/shoes_1.jpg`}></img>
            <h4>상품명</h4>
            <p>상품설명</p>
            <p>5000</p>
        </div>
        <button className="btn btn-primary">주문하기</button>
        <button className="btn btn-primary" onClick={()=>navigate('/')}>상품목록으로 가기</button>
      </div>
    </div>
  )

}
export default ItemDetail;