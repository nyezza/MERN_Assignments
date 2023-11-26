import React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props)=>{

    const {word, color, bgCol} = useParams();

    return(
        <div>

            {
                isNaN(word)?
                <h1 style={color? 
                {color: color, backgroundColor: bgCol}:
                null}>
                    This is a word: {word}
                </h1>
                :
                <h1>This is a number: {word}</h1>
            }

        </div>
    )
}



export default Number