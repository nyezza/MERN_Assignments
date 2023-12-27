import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Display = (props) => {
  const nav = useNavigate()
  const {tab,DeleteTab}=props;
  const submitHandler =()=>{
    nav("/new")
  }
  return (
    <div>
      <Button variant="primary" onClick={submitHandler}>Cretae new Tab</Button>{' '}
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      { 
        tab.map((item,index)=>{
          return (<Tab eventKey={index} title={item.tite}>
        {item.content}
        {' '}<Button variant="danger" onClick={()=>DeleteTab(index)}>Delete</Button>{' '}
          </Tab>
          )
        })
      
      }
      </Tabs>
    </div>
  )
  }


export default Display