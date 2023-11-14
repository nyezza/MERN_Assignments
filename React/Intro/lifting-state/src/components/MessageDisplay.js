import React, { useState } from 'react';
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
        </>
    );
};
    
export default MessageDisplay;

