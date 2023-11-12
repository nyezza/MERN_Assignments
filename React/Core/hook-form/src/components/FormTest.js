import React,{useState} from 'react';
import './FormTest.css'
const FormTest= (props)=> 
{
    //const {fisrtName,lastName,email,password,confirmPassword}=props;
    const [fisrtName,setFisrtname]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword, setConfirm]=useState("");

    const createOne=(e)=>{
        e.preventDefault();
        const User={fisrtName,lastName,email,password,confirmPassword};
        console.log("new one",User);
        setFisrtname("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    }

    return(
        <>
            <form onSubmit={createOne} className='formStyle'>
                <div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Fisrt Name:</label>
                        <input type='text' value={fisrtName} onChange={(e)=>setFisrtname(e.target.value)} className='inputStyle' />
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Last Name:</label>
                        <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='inputStyle'/>
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Email:</label>
                        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='inputStyle' />
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Password:</label>
                        <input type= "passwrod" value={password} onChange={(e)=>setPassword(e.target.value)} className='inputStyle' />
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e)=>setConfirm(e.target.value)} className='inputStyle' />
                    </div>
                    <input type='hidden' value="createOne" />
                </div>
            </form>
            <div >
                <h1>Your Form Data</h1>
                <br></br>
                <div className='resultStyle'>
                    <p>Fisrt Name: {fisrtName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
                
            </div>
        </>
    )
}
export default FormTest;