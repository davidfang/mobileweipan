import React from 'react';

import style from './css/MiddlePay.css';
import jia from '../../common/images/jia.png';
import jian from '../../common/images/jian.png'


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
                    <div className={style.icon} onClick={this.props.reduceMoney}>
                        <img src={jian} className={style.img}/>
                    </div>
                    <div className={style.middle}>
                        <p className={style.topp}>购买金额(元)</p>
                        <p className={style.bottomp}>{this.props.currentMoney}</p>
                    </div>
                    <div className={style.icon} onClick={this.props.addMoney}>
                        <img src={jia} className={style.img}/>
                    </div>

                </div>
            </div>
        );
    }
}


