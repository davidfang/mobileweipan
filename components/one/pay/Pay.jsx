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
            errorshow: 'none',
            selectMoney:180,
            moneyrem:0.037835,
            zeroleft:'3.28rem',
            leftrem:'-3.5303rem',
        };
    }

    //计算金额
    calcrem(m){
        var rate=this.state.moneyrem;
        var result=3.28-rate*m;
        var resultstr=result+'rem';
        return resultstr;
    }

    //减少金额
    reduceMoney(){
        var m=this.state.selectMoney;
        //小于0点不动了
        if(m<=0){
            return;
        }
        m=m-20;
        this.setState({selectMoney:m,leftrem:this.calcrem(m)});

    }
    //增加金额
    addMoney(){
        var m=this.state.selectMoney;
        //大于2000点不动了
        if(m>=2000){
            return;
        }
        m=m+20;
        this.setState({selectMoney:m,leftrem:this.calcrem(m)});
    }
    render() {
        return (
            <Container className={style.modalContainer}  style={{display: this.props.show}}>
                <div className={style.modal}></div>
                <div className={style.infowindow}>
                    <HeaderPay closePay={this.props.closePay.bind(this)}/>
                    <MiddlePay selectMoney={this.state.selectMoney} addMoney={this.addMoney.bind(this)} reduceMoney={this.reduceMoney.bind(this)}   />
                    <RulePay leftrem={this.state.leftrem}  selectMoney={this.state.selectMoney}  addMoney={this.addMoney.bind(this)} reduceMoney={this.reduceMoney.bind(this)}  />
                    <DescPay/>
                    <ButtomPay selectMoney={this.state.selectMoney} />
                </div>
            </Container>
        );
    }
}
