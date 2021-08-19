import React from "react";
import InputData from "../../components/Input.tsx/InputData";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector , useDispatch } from "react-redux";
import {inputData } from "../../redux/action";
import Axios from "axios";
 const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
      },
   },
    btn:{
        textAlign:'center',
        marginTop:'2%',
    }
    
  }),
);


const DataInput=()=>{
   const classes = useStyles();
   //input state storage
   const [inputDataa,setInputData]=React.useState({ name:"",city:"",work:"",gender:"",contact:"",discription:"",img:"" });
   
    const handelChange=(e)=>{
    
       const {name,value}=e;
       setInputData({
           ...inputDataa,
           [name]:value,
       });
        
   };
// const myState=useSelector((state)=>state.handelInput);

const dispatch=useDispatch();



const handelClick=()=>{
 
  dispatch(inputData(inputDataa));
    Axios.post('http://localhost:4000/api',{inputDataa}).then(()=>{
     alert("data stored sucessfully");
   })
 setInputData({name:"", city:"", work:"", gender:"", contact:"",discription:"",img:""});
}
// console.log(myState);


    return <>
          <h1 style={{textAlign :"center"}}>Enter the data of workers</h1>
            <br/>
            <form>
            <InputData label="Enter Name" name="name"  type="text"  value={inputDataa.name} change={handelChange}  />
            <InputData label="City" name="city"  type="text" value={inputDataa.city} change={handelChange}/>
            <InputData label="Work" name="work"  type="text" value={inputDataa.work} change={handelChange}/>
            <InputData label="Gender" name="gender" type="text"  value={inputDataa.gender} change={handelChange}/>
            <InputData label="Contact Info" name="contact"  type="number" value={inputDataa.contact} change={handelChange}/>
            <InputData label="discription" name="discription"  type="text" value={inputDataa.discription} change={handelChange}/>
            <InputData label="img" name="img"  type="text" value={inputDataa.img} change={handelChange}/>
           
            <div className={classes.btn} ><Button type="" onClick={handelClick} 
                className={classes.root} variant="contained" style={{textAlign:'center'}}> Submit  </Button> </div>
                    </form>

    </>
}
export default DataInput;