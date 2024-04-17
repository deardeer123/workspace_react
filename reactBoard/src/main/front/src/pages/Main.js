import { Link, useNavigate } from "react-router-dom";

//게시판 프로젝트 시작 시 처음 보여주는 메인 컴포넌트
const Main = () => {
  const navigate = useNavigate();
  // 나오는거 변수가 아니라 함수 입니다.

  return (
    <>
      <div className='row mt-3'>
        {/* 게시판 프로젝트  */}
        <div className='col text-center'>
          <h1>게시물 프로젝트</h1>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col text-center'>
          <span className="link-span" onClick={()=>{
            navigate('/list')
          }}><h4>게시판 프로젝트 시작</h4></span>
        </div>
      </div>
    </>
  )
}

export default Main;