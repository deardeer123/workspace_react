import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CarManagement from "./components/CarManagement";
import SalesInfo from "./components/SalesInfo";
import SalesList from "./components/SalesList";


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
  
      <div className="container">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand onClick={() => {
              navigate('/')
            }}>Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => {
                navigate('/carManagement')
              }}>차량관리</Nav.Link>
              <Nav.Link onClick={() => {
                navigate('/salesInfo')
              }}>판매정보등록</Nav.Link>
              <Nav.Link onClick={() => {
                navigate('/salesList')
              }}>판매목록</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="row mt-3">
          <div className="col text-center">
          </div>
        </div>
        <Routes>
          <Route path="/" element={<><Home></Home></>}></Route>
          <Route path="/carManagement" element={<><CarManagement></CarManagement></>}></Route>
          <Route path="/salesInfo" element={<><SalesInfo></SalesInfo></>}></Route>
          <Route path="/salesList" element={<><SalesList></SalesList></>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
