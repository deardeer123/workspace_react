import { useNavigate, useParams } from 'react-router-dom';

function ItemDetail({ itemsList }) {
  const navigate = useNavigate();


  //url에서 넘어오는 데이터 받기
  // const p = useParams();
  const { id } = useParams();
  let itemInfo
  console.log(id)
  for (let i of itemsList) {
    if (i.id == id){
      itemInfo = i;
      break;
    }
  }

  let i = itemsList.find(item=>item.id === id);

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <img width='100%' src={process.env.PUBLIC_URL + `/images/${itemInfo.imgName}`}></img>
          <h4>{itemInfo.title}</h4>
          <p>{itemInfo.content}</p>
          <p>{itemInfo.price}</p>
        </div>
        <button className="btn btn-primary mt-1">주문하기</button>
        <button className="btn btn-primary mt-1" onClick={() => navigate('/')}>상품목록으로 가기</button>
      </div>
    </div>
  )

}
export default ItemDetail;