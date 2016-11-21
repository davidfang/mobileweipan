import React from 'react';
import  style from './css/HeaderOrder.css';

import {
    Grid,
    Col,
    Container,
    Badge
} from 'amazeui-touch';


export default class HeaderOrder extends React.Component {
    render() {
        return (
            <Container className={style.wrap}{...this.props} >
                <Grid>
                    <Col cols={4} className="padding">
                        <div className="fl">
                            <Badge amStyle={'alert'}>涨</Badge>
                        </div>
                        <div className="fl">
                            <div >燃料油5M</div>
                            <div >
                                <Badge amStyle={'warning'} className={style.timebadge}>00:00:18</Badge>
                                <span style={{color: '#CD853F'}}>后结算</span>
                            </div>
                        </div>
                    </Col>
                    <Col cols={2} className="padding">
                        <div>35</div>
                        <div>潜在收益</div>
                    </Col>
                </Grid>

            </Container>



        );
    }
}
