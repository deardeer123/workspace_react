import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import BoardList from './pages/BoardList';
import Write from './pages/Write';

function App() {
  let [boardList, setBoardList] = useState([]);
  useEffect(() => {
    axios.get("/getList").then(
      (response) => {
        console.log(response.data)
        setBoardList(response.data)
      }
    ).catch((e) => { console.log(e) })
  }, [])

  
  useEffect(()=>{
    console.log("useEffect 안에서 실행")
  })

  console.log("useEffect 밖에서 실행")


  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/list' element={<BoardList boardList={boardList} ></BoardList>}></Route>
          <Route path='/detailBoard:boardNum' element={<div>상세보기</div>}></Route>
          <Route path='/write' element={<Write></Write>}></Route>
          <Route path='/*' element={<><div>없는 페이지 입니다.</div></>}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
