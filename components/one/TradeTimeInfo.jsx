import React from 'react';
import  style from './css/TradeTimeInfo.css';

import {
    Container
} from 'amazeui-touch';
export default class TradeTimeInfo extends React.Component {
    render() {
        return (
            <Container {...this.props} className={style.wrap +" " +"text-center"}>
                交易时间:周一至周五,上午10:00至次日凌晨02:00
            </Container>
        );
    }
}
