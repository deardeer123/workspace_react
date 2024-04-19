import axios from "axios";

function Exam() {
    //axios로 데이터 가져오기
    //axios.get(url, [config]) : 서버에서 데이터 받아오는 작업할때 @getmapping
    //axios.post(url, 데이터, [config]) : 서버에서 insert 작업할 때  @postmapping
    //axios.put(url, 데이터, [config]) : 서버에서 update 작업할때 @putmapping
    //axios.delete(url, [config]) ㅣ 서버에서 delete 작업 할 떄  @deletemapping

    //axios를 이용하여 controller로 데이터 넘기기

    const post_1 = () => {
        alert(1)
        axios.post('/exam/post1', {
            title: 'java',
            content: '내용'
        }).then(() => { }).catch((err) => { console.log(err) })

    }

    // post 방식으로 데이터 넘기기2
    const data1 = {
        title: 'java',
        content: '내용'
    }

    const post_2 = () => {
        alert(1)
        axios.post('/exam/post2',
            data1
        ).then((response) =>{ console.log(response)}).catch((err) => { console.log(err) })

    }
    //get 방식으로 데이터 보내기
    const get_1 = () =>{
        axios.get('/exam/get1?name=java&age=20')
    }

    //get 방식으로 데이터 보내기2
    const get_2 = () =>{
        axios.get('/exam/get2',{
            params : {
                name : 'java' ,
                age : 20
            }
        })
    }

    //get 방식으로 데이터 보내기
    const get_3 = () =>{
        axios.get('/exam/get3/1')
    }

    return (
        <>
            <div>
                <button type="button" onClick={post_1}>post 방식으로 데이터 받기1</button>
            </div>
            <div>
                <button type="button" onClick={post_2}>post 방식으로 데이터 받기2</button>
            </div>
            <div>
                <button type="button" onClick={get_1}>get 방식으로 데이터 받기</button>
            </div>
            <div>
                <button type="button" onClick={get_2}>get 방식으로 데이터 받기2</button>
            </div>
            <div>
                <button type="button" onClick={get_3}>get 방식으로 데이터 받기3</button>
            </div>
        </>
    )


}

export default Exam;