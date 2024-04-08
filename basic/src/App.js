import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const num1 = 10;
  const myName = 'hong'
  const student ={
    'stuName' : '자바',
    'age' : 30,
    'score' : 80
  }
  //헤더에 전달 할것

  //구조분해할당 문법
  const arr= [1,2,3]
  //배열의 구조분해 할당
  const [a,b,c] = arr;
  console.log(`a = ${a}`);
  //순차적으로 들어감
  const [a1, b1] = arr;// a1 = 1. b1 = 2
  const [a2, b2, c2, d2] = arr; //d2 = undifined
  //객체의 구조분해할당
  const {stuName, age, score} = student
  console.log(`stuName = ${stuName}`)
  const {age:abc} = student;
  console.log(abc);

  //useState사용
  let [test_num, setTest_num] = useState(10);
  function changeNum(){
    setTest_num(20);
  }
  return (
    <div className="App">
      hello react
      <div>{test_num}</div>
      <div>
        <button type='button' onClick={changeNum}>클릭!</button>
        <button type='button' onClick={()=>{setTest_num(30)}}>클릭2!</button>
      </div>
      <Header num1 = {num1} myName={myName}/>
      <Body stuInfo={student}/>
      <Footer/>
    </div>
  );
}

//연습용 컴포넌트
function TestComponent() {
  return(
    <>
      <div>연습용 컴포넌트</div>
    </>
  );
}

export default App;
