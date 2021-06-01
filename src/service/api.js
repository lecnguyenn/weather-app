import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '329df5b6d17d0fa83cf768ee95c3d83a';


export const  getData = async (city, country) =>{
    return await axios.get(`${URL}?q=${city},${country}&lang=vi&appid=${API_KEY}&units=metric`)
}