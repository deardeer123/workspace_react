import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardList from './BoardList';

function App() {
  const [num, setNum] = useState(0); //hock
  const [num2, setNum2] = useState(0);

  //컴포넌트의 생애주기(life cycle)
  //컴포넌트가 최초로 로딩 : mount
  //컴포넌트가 리랜더링 : update
  //컴포넌트가 제거 : : unmount

  //console.log("app 재 랜더링1")
  //useEffect 안의 내용은 모든 내용이 렌더링 된 후에 실행
  //api로 데이터를 조회할 때
  //useEffect의 두번째 매개변수를 세팅하지 않으면0
  //최초 컴포넌트 로딩 + 리랜더 될 때마다 실행
  //마운트 시 + 업데이트

  // useEffect(()=>{
  //   //console.log('마운트 + 업데이트')
  // })

  // useEffect(()=>{
  //   //console.log('마운트')
  // }, [])

  // //num 변수만 바뀔때만 실행됨
  // useEffect(()=>{
  //   //console.log('마운트 + num update 시 ')
  // }, [num])

  
  // useEffect(()=>{
  //   console.log(1);

  //   //useEffect 내용이 실행되기 전에 실행
  //   //마운트 될 때는 실행이 안됨
  //   //언마운트 될때도 실행 
  //   return ()=>{console.log(2)}
  // })

  //어떤 업데이트 될때만 콘솔에 1을 출력
  // useEffect(()=>{

  //   return()=>{console.log(1)};
  // })
  


////////////////////////
// axios.get('/getList')
//     .then((response)=>{
//       console.log(response);
      
//     })
//     .catch((error)=>{

//     });
//////////////

const [boardList , setBoardList] = useState([]);

useEffect(()=>{
  
    axios.get('/getList')
    .then((response)=>{
  
      setBoardList(response.data);
    })
    .catch((error)=>{
      console.log(error)
    });
  
},[])




  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div>num = {num}</div>
            <div>
              <button className='btn btn-warning' onClick={(e)=>{
                let num1 = num+1
                setNum(num1)
              }}> button</button>
            </div>
            <div>num2 = {num2}</div>
            <div>
              <button className='btn btn-success' onClick={()=>{
                setNum2(num2+1)
              }}>button2</button>
            </div>
              
            <div className='mt-5'>
              <BoardList boardList={boardList}/>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
