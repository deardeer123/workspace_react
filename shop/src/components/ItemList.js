import Item from "./Item";


function ItemList({ itemsList}) {
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
        </div>
    )
}
export default ItemList;