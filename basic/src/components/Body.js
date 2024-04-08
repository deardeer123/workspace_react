function Body(props){
    console.log('하위 body')
    const num2 = 20
    const person ={
        'name' : 'hong',
        'age' : 20
    }

    const {num1, myName} = props;
    return(
        <>
            <div>body</div>
            <div>{num1}/{num2}</div>
            <div>{num1/num2} / {num1+num2} </div>
            <div>{person.name} {person.age} {person['age']}</div>
            <div>{props.stuInfo.stuName} {props.stuInfo.age} {props.stuInfo.score}</div>
        </>
    )
}

export default Body;