import React from "react";
const FormBox=(props)=>{
    const{boxColor}=props;
    return(
        <>
            {
                boxColor.map((color,index)=>
                <div key={index} style={{
                    display:'inline-block',
                    margin:'10px',
                    height:"50px",
                    width:"50px",
                    backgroundColor:color
                }}>

                </div>
                )
            }
        </>
    )
}
export default FormBox;