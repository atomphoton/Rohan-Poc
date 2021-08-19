import React from "react";
 const ImageRender:React.FC=(props : any)=>{
     return <>
        <img src={props.adress} alt={props.id}  />
     </>
 }
 export default ImageRender;
   