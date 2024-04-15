import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import mockData from './mockData';
import ItemList from './components/ItemList';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import axios from 'axios';
//페이지 이동과 같은 기능 : Router 설치
//npm install react-router-dom@6
//설치 후 index.js 세팅
//Route 기능 사용을 위한 import
function App() {
  const [itemsList, setItemsList] = useState(mockData);
  //useNavigate 선언
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {// 데이터 가져오기
        setData(response.data);
      });
  }, []);
  console.log(`받아온 데이터 수 : ${data.length}`)
  return (
    <div className="App">
      <ul>
        {
        data.map((e,idx)=>{
          return(
            <li key={idx}>{e.title}</li>
          )
        })
      }
      </ul>
      

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 배너 */}
      <div className='main-bg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/main_bg.jpg)` }}></div>

      {/* 라우터 연습 */}
      {/* 상품목록 */}
      <Routes>
        <Route path='/' element={<ItemList itemsList={itemsList}></ItemList>}></Route>
        <Route path='/detail' element={<ItemDetail></ItemDetail>}></Route>
      </Routes>

      {/* Link */}
      <Link to='/detail'>상세페이지</Link>
      {/* useNavigate*/}
      <button className='btn btn-success' onClick={() => navigate('detail')}>상세페이지이동</button>

    </div>
  );
}

export default App;
