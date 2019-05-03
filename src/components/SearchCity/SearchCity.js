import React from 'react';
import style from './SearchCity.module.scss';

const SearchCity = (props) => (
    <div className={ style.wrapper }>
        <form onSubmit={ props.newCitySubFn }>
            <input placeholder='eg. Warszawa' onChange={ props.newCityFn } type='text'/>
            <button><i className="fas fa-search"></i> search</button>
        </form>
    </div>
);

export default SearchCity;