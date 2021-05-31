import {Box,  Button,  makeStyles,  TextField } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
    component:{
        padding: 20,
        background: '#CAE1FF',
    },
    input:{
        color: '#000000',
        marginRight: 15
    },
    button:{
        width: 200,
        height: 40,
        background: '#436EEE'
    }
})



const Form = () =>{
    const classes = useStyle();
    return( 
        <Box className={classes.component}>
        <TextField
        className={classes.input}
         inputProps={{className: classes.input}}
         id="outlined-basic" 
         label="Thành Phố" 
         variant="outlined" 
        />
        <TextField
        className={classes.input}
         inputProps={{className: classes.input}}
        id="outlined-basic" 
        label="Quốc Gia"
         variant="outlined"
        />

        <Button
         variant="contained"
         className={classes.button}>Xem Thông Tin</Button>
        </Box>
        
    )
}

export default Form;