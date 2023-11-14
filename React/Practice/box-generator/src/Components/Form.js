import React, { useState } from 'react';

const Form = (props) => {
  // using the getter and setter that were passed from my parent (App.js) component
  const { boxColorArray, setBoxColorArray } = props;

  // create state that can only be seen by this component
  //    this is the state to keep track of the text box input value
  const [ color, setColor] = useState("");
  
  const submitHandler = (event) => {
    // we must prevent the browser from refreshing the page when a form is submitted
    //    if we do not prevent the default behavior we will lose all values in state
    event.preventDefault();

    // add our new color to the boxArray WITHOUT losing what is already in there
    //    we need to create a new array and spread out the current values first
    //    then we add the new color as the last element in the array
    setBoxColorArray( [ ...boxColorArray, color ] );
  }

  return (
    <div>
      <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
          <label htmlFor="firstName">Color</label>
          <input 
            type="text" 
            name="color"
            onChange={ (e) => setColor(e.target.value) }
          />
        </div>
        <button>Add</button>
      </form>

  </div>
  )
}

export default Form;