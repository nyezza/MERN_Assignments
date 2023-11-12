import React,{useState} from 'react'

const Person =(props)=>
{
    const{fisrtName,lastName,age,hairColor}=props;
    const [newAge,setAge]=useState(age)
    console.log(newAge);
    return(
        <div>
            <h1>{lastName}, {fisrtName}</h1>
            <p>Age: {newAge}</p>
            <p>hairColor:{hairColor}</p>
            <button onClick={()=>setAge(newAge-1)}>Birthday Button for {fisrtName} {lastName}</button>
        </div>
    )

}
export default Person;