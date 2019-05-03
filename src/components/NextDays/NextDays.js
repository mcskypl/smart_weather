import React from 'react';
import style from './NextDays.module.scss';

import Days from './Days/Days';

const NextDays = (props) => (
    <div className={ style.wrapper }>
        <hr />

        <Days
        info = { props.info.date01 }
        />

        <Days
        info = { props.info.date02 }
        />

    </div>
);

export default NextDays;