import React from 'react';
import  style from './css/KGraph.css';

import {
    Grid,
    Col,
    Button
} from 'amazeui-touch';

export default class KGraph extends React.Component {
    render() {
        return (
            <div className={style.wrap}>K线图</div>
        );
    }
}
