import React, {useState} from 'react'

const Form = (props) => {
    const [color , setColor]=useState('');
    const [height , setHeight] = useState(50);
    const [width , setWidth] = useState(50);
    const{addNewBox}=props
    const submitHandler=(e)=>{
        e.preventDefault();
        props.addNewBox(color,height,width);
        console.log(color, height, width);
        setColor('');
        setHeight(50);
        setWidth(50);
    }

    return (
        <fieldset>
            <legend>From</legend>
            <form onSubmit={submitHandler}>
                <label>Color</label>
                <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} />
                <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} />
                <input type='number' value={width} onChange={(e)=>setWidth(e.target.value)} />
                <button>Add new</button>
            </form>
        </fieldset>
    
    )
}

export default Form;