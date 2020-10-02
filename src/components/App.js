import React, { useEffect, useState } from 'react';
import Form from './Form';
import { Output } from './Output';
import axios from 'axios';


const App =()=>{

    const [weather, setWeather] =useState('')
    const [country, setCountry] =useState('Mexico City');

    useEffect(()=>{

        const getWeather =async()=>{
            const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
                params:{
                    q: country,
                    units:'metric',
                    appid: '29e826cf5f66761f410f57a5fa6bfca2'
                }
            });
            // console.log(data);
            setWeather(data.main.temp);
        }
        getWeather();
       
    },[country])

    

    
    return(
        <div className={`container center-align m2 ${weather>17?"bg-warm":"bg-cold"}`}>
        <Form onCountryChange={setCountry}/>
        <Output weather ={weather} country={country}/>
        </div>

    )
}

export default App