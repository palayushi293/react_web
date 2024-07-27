import React ,{useEffect,useState} from 'react'
import Lottie from "lottie-react"
import contact from "./contact.json"

export default function Contat() {
    
const handle = () => {
    alert('Successfully submitted')
  };
  useEffect(() => {
    document.title = "Maruti Contact"
  }, 2000);
 
  return (
    <div>

    <div style={{ display: 'flex', alignItems: 'flex-start', padding: 20 ,backgroundColor:"black"}}>
      <div style={{backgroundColor:"brown",height:540,width:550,  padding: 0 ,borderColor:"white",marginLeft:100,marginTop:50}}>
        <br/>
        <b><i><h1 style={{color:"white"}}>Contact Us</h1></i></b>
        <br/>
        <input type="text" placeholder="Name" style={{textAlign:"center",marginTop:20,height:40,width:400,borderRadius:20}} required />
        <input type="text" placeholder="Email" style={{textAlign:"center",marginTop:20,height:40,width:400,borderRadius:20}} required />
        <input type="text" placeholder="Phone No" style={{textAlign:"center",marginTop:20,height:40,width:400,borderRadius:20}} required />
        <textarea className="form-control mx-2 my-5" placeholder="Write message" id="exampleFormControlTextarea1" rows="3" style={{textAlign:"center",height:100,width:515}}></textarea>
        <button type="button" className="btn btn-success" style={{height:50,width:250,borderRadius:20}} onClick={handle}>Submit</button>
      </div>
      <div style={{dispaly:"flex",marginLeft:10,float:"right"}}>
       <Lottie animationData={contact} loop={true} style={{height:500}}/>
       
      </div>
    </div>
  
    </div>
  )
}
