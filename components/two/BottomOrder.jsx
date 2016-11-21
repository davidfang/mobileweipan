import React from 'react';
import  style from './css/BottomOrder.css';

import {
    Grid,
    Col,
    Container
} from 'amazeui-touch';
export default class TradeTimeInfo extends React.Component {
    render() {
        return (
            <Container {...this.props} className={style.wrap }>
                <Grid>
                    <Col cols={3} className={'text-left' }>
                        <div >购买时间:2016-11-19 16:55:47</div>
                    </Col>
                    <Col cols={3} className={'text-right' }>
                        <div >结算时间:2016-11-19 16:55:47</div>
                    </Col>
                </Grid>
            </Container>
        );
    }
}
