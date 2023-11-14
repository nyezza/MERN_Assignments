import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
    

    // Lifting State includes creating it in a common parent that can pass data down to ALL
    //    components that will need access to the getter, setter or both
    // imports removed for brevity
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
          // We pass in our function that will take in a string and update our state in our App component
          <MessageForm onNewMessage={ youveGotMail } />
          // We pass our state getter from our App component down to MessageDisplay through props
          //    for displaying its value
          <MessageDisplay message={ currentMsg } />
      </>
  );
}
  

    
export default App;
