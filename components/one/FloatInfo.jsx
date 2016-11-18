import React from 'react';
import  style from './css/FloatInfo.css';
import UpDownButton from './UpDownButton.jsx';
import MiddleButton from './MiddleButton.jsx';

import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';

export default class FloatInfo extends React.Component {
    render() {
        return (
            <Container {...this.props} >
                <Grid>
                    <Col cols={2}>
                        <UpDownButton color="green" content="看跌"/>
                    </Col>
                    <Col cols={2}>
                        <MiddleButton/>
                    </Col>
                    <Col cols={2}>
                        <UpDownButton color="red" content="看涨"/>
                    </Col>
                </Grid>
            </Container>
        );
    }
}
