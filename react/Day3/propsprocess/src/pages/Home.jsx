import React from 'react'
import Product from '../components/Product'
import About from '../components/About'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navlinkProcess = useNavigate()  
  const dataValue = "This is My Data" 
  const productCatvalue = 2000
  const dataString = "This is my Process"
  
  const handelCLick = ()=>{

    navlinkProcess("/assinmentone")

  }

  return (
    <div>
    <h1>Assinments</h1>
    <button onClick={handelCLick}>Assinment 1</button>
    </div>
  )
}

export default Home
