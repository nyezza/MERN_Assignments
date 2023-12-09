import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Dashboard = () => {
  const [product , setProduct] = useState({Title:"",Price:0,Description:""})
    useEffect((
        Axios.get('http://127.0.0.1:5000/api/Product')
        .then(allProduct=>{
            console.log(allProduct.data);
            setProduct(allProduct.data)
        })
        .catch(err=>console.log(err))
    ),[])
  return (
    <div>{product}</div>
  )
  }

export default Dashboard