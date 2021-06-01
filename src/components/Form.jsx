
import React, { useEffect, useState } from "react";
import {Box,  Button,  makeStyles,  TextField } from "@material-ui/core";
import {getData} from '../service/api';
import  Infomation  from './Infomation';

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
        background: '#436EEE',
        marginTop: 6,
        color: '#fff'
    }
})



const Form = () =>{
    const classes = useStyle();
    const [data, setData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false);


    useEffect(() => {
        const getDataWeather = async () =>{
          city && await getData(city, country).then(response =>{
            setData(response.data)
            console.log(response.data);
         })
        }
        getDataWeather();
        handleClick(false);
    }, [click]);
    
    const handleCityChange = (value) => {
        setCity(value);
    }
    const handleCountryChange = (value) =>{
        setCountry(value);
    }
    return( 
        <React.Fragment>
        <Box className={classes.component}>
        <TextField
        className={classes.input}
         inputProps={{className: classes.input}}
         onChange={(e) => handleCityChange(e.target.value)}
         id="outlined-basic" 
         label="Thành Phố" 
         variant="outlined" 
        />
        <TextField
        className={classes.input}
        inputProps={{className: classes.input}}
        onChange={(e) => handleCountryChange(e.target.value)}
        id="outlined-basic" 
        label="Quốc Gia"
         variant="outlined"
        />

        <Button variant="contained" color="primary" onClick={() => handleClick(true)}
         className={classes.button}>Xem Thông Tin</Button>

        </Box>
        
        <Infomation data={data}/>
        </React.Fragment>
        
    )
}

export default Form;