import React from 'react';

import style from './css/DescPay.css';

export default class DescPay extends React.Component {
    render() {
        return (
            <div className ={style.wrap}>
                <p className={style.left}>可用余额0.00元</p>
                <p className={style.right}>预计收益:<span className={style.money}>315.00元</span></p>
            </div>
        );
    }
}






