const  initialState={ name:"",city:"",work:"",gender:"",contact:"",discription:"",img:"" };
const handelInput=((state=initialState,action)=>{
   const updated={...action.payload}   
    switch (action.type){
        case "send_data": return updated ;
        
        default : return state;
    }
}) 
 export default handelInput;
