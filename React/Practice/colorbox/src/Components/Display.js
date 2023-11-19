import React from 'react'

export const Display = (props) => {
    const {boxes}=props;
    return (
        <fieldset>
            <legend>Display</legend>
            {
                boxes.map((t,i)=>
                <div style={{
                    width:t.widthBox+'px',
                    height:t.heightBox+'px',
                    margin:"10px",
                    backgroundColor:t.colorBox,
                    display:"inline-block"
                }}>
                </div>
                )           
            }
        </fieldset>
    
    )
}

export default Display;
