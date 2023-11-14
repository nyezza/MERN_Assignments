import React, { useState } from 'react';

const NinjaForm = (props) => {
  // using the getter and setter that were passed from my parent (App.js) component
  const { ninjaBoxArray, setNinjaBoxArray } = props;

  // create state that can only be seen by this component
  //    this is the state to keep track of the text box input value
  const [ color, setColor] = useState("");
  const [ size, setSize] = useState(50);
  
  const submitHandler = (event) => {
    // we must prevent the browser from refreshing the page when a form is submitted
    //    if we do not prevent the default behavior we will lose all values in state
    event.preventDefault();

    // add our new box object to the ninjaBoxArray WITHOUT losing what is already in there
    //    we need to create a new array and spread out the current objects first
    //    then we add the new box object as the last element in the array
    setNinjaBoxArray( [ 
      ...ninjaBoxArray, 
      { 
        color: color,
        // be sure to add the px to the string so it can update the style correctly
        size: size + "px",
      }
      ] );

    // Ninja Bonus: clear out the color input and reset to the default size value
    //    on successful submission.
    // This makes it easier to add a new color once we submit the first one
    setColor("");
    setSize(50);
  }

  return (
    <div>
      <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
          <label>Color</label>
          {/* 
            Ninja Bonus: clear out the color input on successful submission
            By setting our input value to be the value in state, we can reset 
            it after successful submission 
          */}
          <input 
            type="text" 
            name="color"
            value={color}
            onChange={ (e) => setColor(e.target.value) }
          />
        </div>
        <div>
          <label>Width and Height in Pixels</label>
          {/* 
            Ninja Bonus: reset the size input on successful submission
            By setting our input value to be the value in state, we can reset 
            it after successful submission 
          */}
          <input 
            type="text" 
            name="size"
            value={size}
            onChange={ (e) => setSize(e.target.value) }
          />
        </div>
        <button>Add</button>
      </form>

  </div>
  )
}

export default NinjaForm;