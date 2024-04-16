import Item from "./Item";
import axios from 'axios';
import { useEffect, useState } from 'react';


function ItemList({ itemsList, moreData }) {
    const [isShow , setIsShow] = useState(true);

    //https://codingapple1.github.io/shop/data2.json

    return (
        <div className='container item-list-div mt-3'>
            <div className='row'>
                {
                    itemsList.map((e, idx) => {
                        return (
                            <Item itemInfo={e} key={idx}></Item>
                        )
                    })
                }
            </div>
            {
                isShow ? 
                <div className='row'>
                    <div className='col text-center'>
                        <button className='btn btn-primary' onClick={(e) => {
                            moreData()
                            let tag = e.target
                            tag.remove()
                            // setIsShow(false)
                        }}>더보기</button>
                    </div>
                </div> : null

            }

            
        </div>
    )
}
export default ItemList;