import { Box, makeStyles } from '@material-ui/core';
import background from '../images/background2.jpg';
import Form from './Form';



const useStyles = makeStyles({
    component:{
        height: '100vh',
        display:'flex',
        alignItems:'center',
        width:'65%',
        margin: '0 auto'

    },
    leftContainer: {
        backgroundImage: `url(${background})`,
        height:'80%',
        width:'20%',
        backgroundSize:'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContaier:{
        background: 'linear-gradient(to bottom, #000055, #3399FF)',
        height:'80%',
        width:'65%'
    }
});

const Weather = () =>{
    const classes = useStyles();
    
    return(
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContaier}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather;