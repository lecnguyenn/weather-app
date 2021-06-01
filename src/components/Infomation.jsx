import {Box, Typography, makeStyles} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';


const useStyles = makeStyles({
    component:{
        margin: 50
    },
    row:{
        padding: 10,
        fontSize: 20,
        letterSpacing: 1.5,
        color:'#fff',
        fontFamily: '"Apple Color Emoji"',
    },
    value:{
        color:'#fff'
    },
    span:{
        color: '#000055'
    },
    icon:{
        marginRight: 12,
        color: '#fff'
    }
})

const Infomation = ({ data }) =>{
    const classes = useStyles();
    return (
        data ?
        <Box className={classes.component}>
            <Typography className={classes.row}><LocationOnIcon className={classes.icon} />Vị trí: <Box component="span">{data.name}, {data.sys.country}</Box></Typography>
            <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon}/><Box component="span">Nhiệt độ:</Box>  {data.main.temp}°C </Typography>
            <Typography className={classes.row}><OpacityIcon className={classes.icon} />Độ ẩm: <Box component="span">{data.main.humidity}%</Box></Typography>
            <Typography className={classes.row}><Brightness4Icon className={classes.icon} />MT Mọc: <Box component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row}><WbSunnyIcon className={classes.icon}/>MT Lặn: <Box component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box> </Typography>
            <Typography className={classes.row}><ViewWeekIcon className={classes.icon}/>Tình trạng: <Box component="span">{data.weather[0].main}</Box> </Typography> 
            <Typography className={classes.row}><CloudIcon className={classes.icon}/>Mây: <Box component="span">{data.clouds.all}%</Box></Typography>

        </Box> : ''
    )
}

export default Infomation;