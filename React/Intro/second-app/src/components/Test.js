import React, {useState} from 'react'

const Test = (props)=>{
    // ------------fisrt statement------
    // const [text, setText] = useState("");
    //const changeText = ()=> {setText("new message")};
    // console.log(text);

    // ------------second statement-----
    // const [state, setState] = useState({
    //     items: [],
    //     totalPrice: 0.00
    // });
    // const changeState=()=>setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
    // console.log(state.items);
    
    // ----------Third Statement ----------
    // const [arr, setArr] = useState([]);
    // const pullarray=()=>{
    //     for(let i=1; i<=5; i++) {
    //     setArr([...arr, i]);
    //     }
    // }
    
    // console.log(arr);

    // ----------fourth Statement ----------
    const [state, setState] = useState({greeting: "Knock knock, "});
    const changeGreeting=()=>{
        setState({ greeting: state.greeting + "Neo"} );
        }
    console.log(state);
    
    

    return(
        <div>
            {/* <button onClick={changeText}>click Me</button>
            <button onClick={changeState}>click Me</button> 
            <button onClick={pullarray}>click Me</button>*/}
            <button onClick={changeGreeting}>click greeting</button>

        </div>
    )
    


}
export default Test