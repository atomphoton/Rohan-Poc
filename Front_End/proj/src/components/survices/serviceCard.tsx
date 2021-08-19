import React from "react";
import surviceImg from "../../Static/surviceImg";
import "./serviceCard.css"
import { useHistory } from "react-router";
const ServiceCard=({img,name,discription}:any)=>{

let history=useHistory();
  
  const imgData=new surviceImg();
  
  const imgRender:any=()=>{
        switch (name) {
   
     case "acrepair": return imgData.acSurvice;
         
    case "kitchen": return imgData.kitchenClean;
         
    case "maid": return imgData.maid;
         
    case "painter": return imgData.painter;
         
    case "garden": return imgData.gardener;
     
    case "plumber": return imgData.plumber;
         
    case "carpenter": return imgData.carpenter;
                   
    default:return imgData.def;
    
  }
}
console.log(imgRender());
const handelClick=()=>{
      sessionStorage.setItem('service',name);
        history.push('/contact');
}
  
  return<> 
  <div className="contain"  >
       <div className="box">
  <div className="wrap">
       <div className="card">
            <img src={imgRender()} alt="imgOfSurvice"/>
            <div className="info">
                 <h1>{name}</h1>
                 <p>{discription}</p>
                 <button  className="btn" onClick={handelClick}> Get Details </button>
            </div>
       </div>
  </div>
      
    </div>
    </div>
    </>
}
export default ServiceCard;
 