import {useNavigate} from 'react-router-dom';

function Item({itemInfo}) {
    const navigate = useNavigate();
    return (
        
        <div className='col-4' onClick={()=>navigate('/detail')}>
            <img width='100%' src={process.env.PUBLIC_URL + `/images/${itemInfo.imgName}`}></img>
            <h4>{itemInfo.title}</h4>
            <p>{itemInfo.price}</p> 
        </div>
    )
}
export default Item;