import React from 'react';
import  style from './css/ContentOrder.css';

import {
    Grid,
    Col,
    Container
} from 'amazeui-touch';


export default class ContentOrder extends React.Component {
    render() {
        return (
            <Container className={style.wrap}{...this.props} >
                <Grid>
                    <Col cols={2} className={'padding' + ' ' + style.contentcol} >
                        <div style={{color:'orange'}}>4500</div>
                        <div>购买价格</div>
                    </Col>
                    <Col cols={2} className={'padding' + ' ' + style.contentcol}>
                        <div style={{color:'pink'}}>39991</div>
                        <div>当前价格</div>
                    </Col>
                    <Col cols={2} className={'padding' + ' ' + style.contentcol}>
                        <div style={{color:'orange'}}>20.00</div>
                        <div>购买金额</div>
                    </Col>
                </Grid>

            </Container>



        );
    }
}
