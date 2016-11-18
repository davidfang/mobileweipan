import React from 'react';
import  style from './css/GoodsBar.css';
import DropDownButton from './DropDownButton.jsx';

import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';


export default class GoodsBar extends React.Component {
    render() {
        return (

            <Container className={style.wrap}{...this.props} >

                <Grid>
                    <Col cols={3} style={{padding:0}}>
                        <DropDownButton content="黄铜"/>
                    </Col>
                    <Col cols={3} style={{padding:0}}>
                        <DropDownButton content="5M"/>
                    </Col>
                </Grid>

            </Container>



        );
    }
}
