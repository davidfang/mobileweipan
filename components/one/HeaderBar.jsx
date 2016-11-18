import React from 'react';
import  style from './css/HeaderBar.css';

import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <Container className={style.wrap}{...this.props} >
                <Grid >

                    <Col cols={4}>图像</Col>
                    <Col cols={2} className="padding">
                        <Button amStyle="alert">充值</Button>
                    </Col>
                </Grid>
            </Container>

        );
    }
}
