import React from 'react'
const PersonCard=(props)=> {
    const {firstName,lastName,age,hairColor}= props
    return(
        <>
            <h1>{firstName}, {lastName}</h1>
            <p>age: {age}</p>
            <p>hair Color: {hairColor}</p>
        </>
    )
}
export default PersonCard