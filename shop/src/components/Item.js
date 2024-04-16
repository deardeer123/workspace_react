import {useNavigate} from 'react-router-dom';

function Item({itemInfo}) {
    const navigate = useNavigate();
    return (
        //${itemInfo.id}
        <div className='col-4' onClick={()=>navigate(`/detail/${itemInfo.id}`)}>
            <img width='100%' src={process.env.PUBLIC_URL + `/images/shoes_4.jpg`}></img>
            <h4>{itemInfo.title}</h4>
            <p>{itemInfo.price}</p> 
        </div>
    )
}
export default Item;