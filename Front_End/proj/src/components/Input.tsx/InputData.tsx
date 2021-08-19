import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
      textAlign:'center',
      
    },
    in:{
        width: '30vw'
    }
    
  }),
);

export default function InputData  (props : any) {
  const classes = useStyles();
 const handelChange=(e:any)=>{
    props.change(e.target);
     
 }
  return (
    <div className={classes.root} >
     
      <TextField  className={classes.in}  id="outlined-basic" label= {props.label} 
      variant="outlined"   name={props.name}  type={props.type} autoComplete="off" value={props.value}  onChange={handelChange} required />
    </div>
  );
}
