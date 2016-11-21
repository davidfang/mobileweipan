import React from 'react';
import  style from './css/OrderFormList.css';
import OrderForm from './OrderForm.jsx';

import {
    Container
} from 'amazeui-touch';

export default class OrderFormList extends React.Component {
    render() {
        var data=[];
        return (
            <Container {...this.props} className={style.wrap + " " + "text-center"}>
                <OrderForm/>
                <OrderForm/>
            </Container>
        );
    }
}
