import React from "react";
import ServiceCard from "./serviceCard";
import Axios from "axios";


const Service:React.FC=()=>{
  let sessionData=sessionStorage.getItem('key');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const[surviceType,setSurviceType]=React.useState(sessionData);
    const [survices,setSurvices]=React.useState([]);
    
 React.useEffect(()=>{
  getSurvices()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

 // api request for survices   
    const getSurvices=async()=>{
  await Axios.get('http://localhost:4000/survices',{
    params:{
      city: surviceType,
    }
  }).then((responce)=>{
    setSurvices(responce.data);
  });
}
console.log(survices);

    return<>
         
    
     {survices.map((item : any,index)=>{
        return <ServiceCard name={item.work} discription={item.discription} img={item.img} />
     })}
         
  
     
      </>
}
export default Service;