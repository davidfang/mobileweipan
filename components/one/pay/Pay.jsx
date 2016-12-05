import React from 'react';
import  style from './css/Pay.css';

import {Container, Button, Field} from 'amazeui-touch';
import HeaderPay from './HeaderPay.jsx';
import DescPay from './DescPay.jsx';
import MiddlePay from './MiddlePay.jsx';
import RulePay from './RulePay.jsx';
import ButtomPay from './ButtomPay.jsx';

export default class Pay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorshow: 'none'
        };
    }

    render() {
        return (
            <Container className={style.modalContainer}  style={{display: this.props.show}}>
                <div className={style.modal}></div>
                <div className={style.infowindow}>
                    <HeaderPay closePay={this.props.closePay.bind(this)}/>
                    <MiddlePay/>
                    <RulePay/>
                    <DescPay/>
                    <ButtomPay/>
                </div>
            </Container>
        );
    }
}
