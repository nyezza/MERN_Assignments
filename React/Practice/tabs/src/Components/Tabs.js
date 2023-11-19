import React from 'react'

export const Tabs = (props) => {
    const {allTabs , currentTabIndex , setCurrentTabIndex}=props;

    const tabStyle = (index) =>{
        if (index === currentTabIndex){
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }

    const setSelectedTab =(index)=>{
        setCurrentTabIndex(index);
    }
    return (
        <div style={{
            margin:"auto",
            width:"85%",
            textAlign:"left"}}>
        {
            allTabs.map((item,index) =>(
                <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index)}>{item.label}</div>))
        }
    </div>

    )
}
export default Tabs;