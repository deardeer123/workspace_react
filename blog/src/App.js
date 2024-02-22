import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //let title = '첫번째 글';

  let arr = [1,2];
  let num1 = arr[0];
  let num2 = arr[1];

  let [a, b] = [1,2];
  console.log(a);


  //state 변수
  let [title, setTitle] = useState(['리액트 학습', '울산 맛집', '겨울 코드 추천']);
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [isShow, setIsShow] = useState(false);

  //input 태그에 입력한 값을 저장하고 있는 state 변수
  let [newTitle, setNewTitle] = useState('')

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      <button type='button' onClick={() => {
        let title2 = [...title];
        title2[0] = '남자 옷 추천';
        setTitle(title2);
      }}>글 변경</button>
      
      {
        title.map((e, i) => {
          return (
            <List setIsShow={setIsShow} key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt} title1={title} setTitle={setTitle}/>
          );
        })
      }
      <div>
        <input type='text' onChange={(e)=>{
          //  input 태그에 입력한 값을 출력
          //console.log(e.target.value)
          setNewTitle(e.target.value)}} />
          <input type='button' value={'저장'} onClick={()=>{
            let title1 = [...title];
            title1.push(newTitle)
            setTitle(title1)
            let i = [...likeCnt]
            i.push(0)
            setLikeCnt(i)
          }
          }/>
          
      </div>
      



      {
        isShow ? <Detail /> : ''
      }
      
      

    </div>
  );
}

//블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return (
    <div className='list'>
        <h4><span onClick={() => {
          props.setIsShow(true)
        }}>{props.title}</span>
        <span onClick={() => {
          let copyLikeCnt = [...props.likeCnt];
          copyLikeCnt[props.idx]++;
          props.setLikeCnt(copyLikeCnt);
        }}>👍</span> {props.likeCnt[props.idx]}
        </h4>
        <p>2월 19일 작성1 11</p>
        <button type='button' onClick={()=>{
          let title2=[...props.title1]
          let likeCnt1=[...props.likeCnt]
          title2.splice(props.idx,1)
          likeCnt1.splice(props.idx,1)
          props.setLikeCnt(likeCnt1)
          props.setTitle(title2);
        }
        }>삭제</button>
      </div>
  );
}

//상세 정보를 표현하는 컴포넌트
function Detail(){
  return (
      <div className='detail'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

function WriteBoard(props){
  let title1 = [...props.title]
  title1.push(props.newTitle)
  props.setTitle(title1);
  let likeCnt1 = [...props.likeCnt]
  likeCnt1.push(0)
  props.setLikeCnt(props.likeCnt1);

}

export default App;
