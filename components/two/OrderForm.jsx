import React from 'react';
import  style from './css/OrderForm.css';
import BottomOrder from './BottomOrder.jsx';
import ContentOrder from './ContentOrder.jsx';
import HeaderOrder from './HeaderOrder.jsx';


import {
    Container
} from 'amazeui-touch';


export default class OrderFormList extends React.Component {
    render() {
        return (
            <Container {...this.props} className={style.wrap + " " + "text-center"}>
                <HeaderOrder/>
                <ContentOrder/>
                <BottomOrder/>
            </Container>
        );
    }
}
