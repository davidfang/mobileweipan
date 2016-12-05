import React from 'react';

import style from './css/MiddlePay.css';

import {Badge, Icon} from 'amazeui-touch';
export default class MiddlePay extends React.Component {
    render() {
        return (
            <div className={style.wrap}>
                <div className={style.top}>
                    <Badge amStyle={'alert'}>涨</Badge>
                    <span className={style.leftspan}>1M再生铜</span>
                    <div className={style.rightspan}>
                        <p className={style.rightnum}>41559</p>
                        <p className={style.righttext}>当前价格</p>
                    </div>

                </div>
                <div className={style.bottom}>
                    <div className={style.icon}><Icon name={'plus'}/></div>
                    <div className={style.middle}>
                        <span className={style.unit}>购买金额(元)</span><br/>
                        <span className={style.moneynum}>180</span>
                    </div>
                    <div className={style.icon}><Icon name={'plus'}/></div>
                </div>
            </div>
        );
    }
}


