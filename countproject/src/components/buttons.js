const Buttons = ({changeCount})=>{
  
    
    return(
        <>
        <div>
            <button value="1" onClick={()=>{changeCount(1)}}>1</button>
            <button value="10" onClick={()=>changeCount(10)}>10</button>
            <button value="100" onClick={()=>changeCount(100)}>100</button>
            <button value="-100" onClick={()=>changeCount(-100)}>-100</button>
            <button value="-10" onClick={()=>changeCount(-10)}>-10</button>
            <button value="-1" onClick={()=>changeCount(-1)}>-1</button>
        </div>
        </>
    )
}

export default Buttons 