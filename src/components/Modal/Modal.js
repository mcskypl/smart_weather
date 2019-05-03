import React from 'react';
import style from './Modal.module.scss';

import SearchCity from '../SearchCity/SearchCity';

const Modal = (props) => (
    <div className={ style.wrapper  }>

        <div className={ style.closeIcon } onClick={ props.closeModalFn }>
            x
        </div>

        <h1>search city</h1>
        <hr />

        <SearchCity
            newCityFn={ props.newCityFn }
            newCitySubFn = { props.newCitySubFn }
        />
    </div>
);

export default Modal;