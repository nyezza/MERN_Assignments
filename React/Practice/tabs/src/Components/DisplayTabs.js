import React from 'react'

export const DisplayTabs = (props) => {
    const { allTabs , currentTabIndex }=props;
    return (
        <div className="display">
            
                                
                {allTabs[currentTabIndex].content}
                
            
            
        </div>
    )
}
export default DisplayTabs;