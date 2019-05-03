import React, { Component } from 'react';
import style from './Main.module.scss'

import City from '../../components/City/City';
import Icon from '../../components/Icon/Icon';
import NextDays from '../../components/NextDays/NextDays';
import Modal from '../../components/Modal/Modal';

//100vh on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//API key
const API_KEY = '90acecf6902650238424fb725dbd3b20';

class Main extends Component {

    state = {
        city: '',
        value: 'Polska',
        date00: {temp: '', wind: '', rain: '', snow: '', clouds: ''},
        date01: {temp: '', wind: '', rain: '', snow: '', clouds: ''},
        date02: {temp: '', wind: '', rain: '', snow: '', clouds: ''},
        isModalOpen: false,
        err: false,
    }

    componentDidMount() {
        window.addEventListener('load', this.handleSubmit);
    }

    newCity = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value,
        });
    }

    newCitySub = (e) => {
        e.preventDefault();
        this.handleSubmit();
    }

    handleSubmit = () => {
        const API = `https://api.openweathermap.org/data/2.5/find?q=${ this.state.value }&units=metric&APPID=${ API_KEY }&mode=json&cnt=3`;

        fetch(API)
            .then(response => {
                if(response.ok) {
                    return response;
                }
                throw Error
            })

            .then(response => response.json())

            .then(data => {

                let t = 86400000; // 24h to milliseconds
                let time = new Date().getTime();
                let time00 = new Date().toLocaleDateString(); //today
                let time01 = new Date(time+t).toLocaleDateString(); //next day
                let time02 = new Date(time+2*t).toLocaleDateString();


                if(data.count > 0) {
                    this.setState({

                        city: data.list[0].name,

                        date00:
                        {
                            date: time00,
                            temp: Math.round(data.list[0].main.temp),
                            wind: data.list[0].wind.speed,
                            rain: data.list[0].rain,
                            snow: data.list[0].snow,
                            clouds: data.list[0].clouds.all
                        },

                        date01:
                        {
                            date: time01,
                            temp: null,
                        },

                        err: false,
                    })
                }

                if(data.count > 1) {
                    this.setState({

                        date01:
                        {
                            date: time01,
                            temp: Math.round(data.list[1].main.temp),
                            wind: data.list[1].wind.speed,
                            rain: data.list[1].rain,
                            snow: data.list[1].snow,
                            clouds: data.list[1].clouds.all
                        },

                        date02:
                        {
                            date: time02,
                            temp: null,
                        }

                    })
                }

                if(data.count > 2) {
                    this.setState({

                        date02:
                        {
                            date: time02,
                            temp: Math.round(data.list[2].main.temp),
                            wind: data.list[2].wind.speed,
                            rain: data.list[2].rain,
                            snow: data.list[2].snow,
                            clouds: data.list[2].clouds.all
                        },

                    })
                }

                this.closeModal();

            })

            .catch(err => {
                this.setState({
                    err: true
                })
            })
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {

        const { isModalOpen } = this.state;

        return(
            <div
            className={ style.wrapper }>

                <City
                info = { this.state }
                openModalFn = { this.openModal }
                />

                <Icon
                info = { this.state.date00 }
                />

                <NextDays
                info = { this.state }
                />

                {isModalOpen && <Modal
                    closeModalFn = { this.closeModal }
                    newCityFn = { this.newCity }
                    newCitySubFn = { this.newCitySub }
                /> }
            </div>
        );
    }

}

export default Main;