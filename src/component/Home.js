import React,{useState,useEffect} from 'react'
import Lottie from "lottie-react"
import run from "./run.json"
import "./styles.css"
export default function Home() {
 
    

useEffect(()=>
  {
    document.title="Maruti Home";
  },[]);
  return (
   <div style={{backgroundColor:"black",display:"flex"}}>
    <div  style={{height:500,marginTop:100}} >
      <Lottie style= {{height:550,width:700,marginTop:20,marginLeft:50,backgroundColor:"white"}} animationData={run} loop={true}/>
      </div>
      
      <h1 style={{color:"white",marginTop:150,marginLeft:100,fontFamily:"Roboto"}}>
        DRIVE YOUR DREAMS

      <br/>
      
      Discover the Maruti Experience
At Maruti, we blend innovation with reliability to create vehicles that redefine your driving experience. Embrace the journey with unmatched performance and exceptional comfort.

</h1>
    </div>
    


   
  )
}
