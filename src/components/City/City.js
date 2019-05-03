import React from 'react';
import style from './City.module.scss';

const City = (props) => (
    <div className={ style.wrapper }>
        <div className={ style.city }>
            <h1>{ props.info.city }</h1>
            <p onClick={ props.openModalFn }>search city</p>
        </div>
        <div className={ style.date }>
            <h3>today</h3>
            <h3>{ props.info.date00.date }</h3>
        </div>
    </div>
);

export default City;