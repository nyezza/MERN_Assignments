import React,{useState} from 'react'
const BoxDisplay =(props)=>{
    const {boxColor, setBoxColor}=props;
    const [color , setColor]=useState("");

    const colorHandler=(e)=> {
        e.preventDefault();
        setBoxColor(color);
    }
    return(
        <form onSubmit={colorHandler}>
            <div>
                <label>Color</label>
                <input type='text' name='color' onChange={(e)=>(e.target.value)} />
            </div>
            <input type='submit' name='ADD' />
        </form>
    )
}
export default BoxDisplay;