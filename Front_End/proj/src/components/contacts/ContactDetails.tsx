import React from "react";
import ContactRender from "./ContactRender";
import Axios from "axios";
 const ContactDetails:React.FC=()=>{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const[serviceName,setServiceName]=React.useState(sessionStorage.getItem("service"));
const[contactDetail,setContactDetails]=React.useState([]);
  React.useEffect(()=>{
  getWorkers()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

 // api request for survices   
    const getWorkers=async()=>{
  await Axios.get('http://localhost:4000/contacts',{
    params:{
      service:serviceName
    }
  }).then((responce)=>{
    setContactDetails(responce.data);
  });
}
console.log(contactDetail);

return <>
   {contactDetail.map((item:any,index:any)=>{
       return <ContactRender  name={item.name} key={index} gender={item.gender} contact={item.contact} />
   })}
 
 </>
}
export default ContactDetails;