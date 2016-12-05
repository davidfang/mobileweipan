import style from './css/ButtomPay.css';
import React from 'react';

export default class ButtomPay extends React.Component {
    render() {
        return (
            <div className={style.wrap}>
                <div className={style.left}>应付:¥180</div>
                <div className={style.right}>
                    <span>余额不足去充值</span>
                </div>
            </div>
        );
    }
}







