import React from 'react';
import style from './Icon.module.scss';

const Icon = (props) => {


    let content=  '';

    //icons source: https://www.iconfinder.com/iconsets/weather-line-19
    if (props.info.snow != null) { //SNOW
        content = (
            <img src='https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Light_Snow-128.png' alt='Snow'/>
        )
    } else if (props.info.rain != null) { //RAIN
        content = (
            <img src='https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Moderate_Rain-128.png' alt='Rain'/>
        )
    } else if (props.info.wind > 5) { //WIND
        content = (
            <img src='https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Windy-512.png' alt='Wind'/>
        )
    } else if (props.info.clouds != null) { //CLOUDS
        content = (
            <img src='https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Overcast-256.png' alt='Clouds'/>
        )
    } else { //SUN
        content = (
            <img src='https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Sunny-512.png' alt='Sun'/>
        )
    }

    return(
        <div className={ style.wrapper }>
            { content }
            <h1>{ props.info.temp }°C</h1>
            <h3>{ props.info.wind } m/s</h3>
        </div>
    )
}

export default Icon;
