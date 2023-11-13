import React,{useState} from 'react';
import './FormTest.css'
const FormTest= (props)=> 
{
    const [fisrtName , setFisrtname]=useState("");
    const [fisrtNameError , setFisrtNameError]=useState("");
    const [lastName , setLastName]=useState("");
    const [lastNameErr , setLastNameErr]=useState("");
    const [email , setEmail]=useState("");
    const [emailErr , setEmailErr]=useState("");
    const [password , setPassword]=useState("");
    const [passwordErr , setPasswordErr]=useState("");
    const [confirmPassword , setConfirm]=useState("");
    const [confirmPasswordErr , setConfirmErr]=useState("");

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
//   ------------------ Validation First Name----------
    const handleFirstNAme =(e)=>{
        setFisrtname(e.target.value);
        if (e.target.value.length <2){
            setFisrtNameError("First Name must be at least 2 characters");
        }else{
            setFisrtNameError("");
        }  
    }
//   ------------------ Validation Last Name----------
    const handleLastNAme =(e)=>{
        setLastName(e.target.value);
        if (e.target.value.length <2){
            setLastNameErr("Last Name must be at least 2 characters");
        }else{
            setLastNameErr("");
        }  
    }
//   ------------------ Validation Email----------
    const handleEmail =(e)=>{
        setEmail(e.target.value);
        if (e.target.value.length <2){
            setEmailErr("Last Name must be at least 2 characters");
        }else{
            setEmailErr("");
        }  
    }
//   ------------------ Validation Password----------
    const handlePassword =(e)=>{
        setPassword(e.target.value);
        if (e.target.value.length <8){
            setPasswordErr("Last Name must be at least 8 characters");
        }else{
            setPasswordErr("");
        }  
    }
//   ------------------ Validation Confirm Password----------
    const handleConfirmPassword =(e)=>{
        setConfirm(e.target.value);
        if (e.target.value === password.length){
            setConfirmErr("Must Much");
        }else{
            setConfirmErr("");
        }  
    }
    return(
        <>
            <form onSubmit={createOne} className='formStyle'>
                <div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Fisrt Name:</label>
                        <input type='text' value={fisrtName} onChange={handleFirstNAme} className='inputStyle' />
                        {
                            fisrtNameError?
                            <p>{fisrtNameError}</p>:
                            ''
                        }
                    </div>
                    <div>
                        {
                            fisrtNameError?
                            <input type='hidden' value={createOne} disabled />:
                            <input type='hidden' value={createOne} />
                        }
                        
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Last Name:</label>
                        <input type='text' value={lastName} onChange={handleLastNAme} className='inputStyle'/>
                        {
                            lastNameErr?
                            <p>{lastNameErr}</p>:
                            ''
                        }
                    </div>
                    <div>
                        {
                            lastNameErr?
                            <input type='hidden' value={createOne} disabled />:
                            <input type='hidden' value={createOne} />
                        }
                        
                    </div>
                    
                    <div className='oneLine'>
                        <label className='labelStyle'>Email:</label>
                        <input type='text' value={email} onChange={handleEmail} className='inputStyle' />
                        {
                            emailErr?
                            <p>{emailErr}</p>:
                            ''
                        }
                    </div>
                    <div>
                        {
                            emailErr?
                            <input type='hidden' value={createOne} disabled />:
                            <input type='hidden' value={createOne} />
                        }
                        
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Password:</label>
                        <input type= "passwrod" value={password} onChange={handlePassword} className='inputStyle' />
                        {
                            passwordErr?
                            <p>{passwordErr}</p>:
                            ''
                        }
                    </div>
                    <div>
                        {
                            passwordErr?
                            <input type='hidden' value={createOne} disabled />:
                            <input type='hidden' value={createOne} />
                        }
                        
                    </div>
                    <div className='oneLine'>
                        <label className='labelStyle'>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPassword} className='inputStyle' />
                        {
                            confirmPasswordErr?
                            <p>{confirmPasswordErr}</p>:
                            ''
                        }
                    </div>
                    <div>
                        {
                            confirmPasswordErr?
                            <input type='hidden' value={createOne} disabled />:
                            <input type='hidden' value={createOne} />
                        }
                        
                    </div>
                    <input type='submit' value="createOne" />
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