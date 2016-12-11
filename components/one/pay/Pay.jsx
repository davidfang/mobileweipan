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
        var width = document.documentElement.getBoundingClientRect().width;
        var rem = width * 27.3 / 640;
        this.state = {
            errorshow: 'none',
            selectMoney: 180,//金钱数量
            moneyrem: 0.037835,//1元的移动距离
            zeroleftrem:3.28,//标尺为0时的Left值
            leftrem: -3.5303,//金钱为180标尺的Left值
            left: '-3.5303',
            startX: 0,//起始x坐标
            endX: 0,
            cssrate: rem,//1rem拥有的css像素
        };
    }

    //通过金钱换算出应该滑动的rem值,返回结果为rem字符串
    calcrem(m) {
        var rate = this.state.moneyrem;
        var result = this.state.zeroleftrem - rate * m;
        return result;
    }

    //通过rem值换算出金钱
    calcmoney(r){
        var rate = this.state.moneyrem;
        var m=this.state.selectMoney-r/rate;
        return m;
    }

    //通过滑动的CSS像素值计算应该滑动的rem值,向左滑动是负值
    calcrange(range) {
        var cssrate = this.state.cssrate;
        var rem = range / cssrate;
        return rem;
    }

    //计算最大金额
    calcMaxLeftRem(){
        return this.state.zeroleftrem-2000*this.state.moneyrem;
    }

    //减少金额
    reduceMoney() {
        var m = this.state.selectMoney;
        //小于0点不动了
        if (m <= 0) {
            return;
        }
        m = m - 20;
        this.setState({
            selectMoney: m,
            leftrem: this.calcrem(m),
        });

    }

    //增加金额
    addMoney() {
        var m = this.state.selectMoney;
        //大于2000点不动了
        if (m >= 2000) {
            return;
        }
        m = m + 20;
        this.setState({selectMoney: m, leftrem: this.calcrem(m)});
    }

    //触摸结束
    touchEnd(e) {
        // alert(JSON.stringify(e.touches));
        this.setState({
            endX: e.changedTouches[0].pageX
        })

        //判断金钱是否是整数,如果不是,将金钱调整为整数
        var range=this.state.endX - this.state.startX;
        var r=this.calcrange(range);
        var money=this.calcmoney(r);
        this.setState({selectMoney:money});

    }

    //触摸滑动
    touchMove(e) {
        console.log(e.changedTouches[0].pageX);
        var startX = this.state.startX;
        var x = e.changedTouches[0].pageX;
        var range = this.calcrange(x - startX);//移动距离
        console.log("range======" + range);
        var cssrate = this.state.cssrate;
        var leftrem = this.calcrange(range) + this.state.leftrem;
        //如果尺子靠近0了,会回归到0
        if(leftrem>=this.state.zeroleftrem){
            leftrem=this.state.zeroleftrem;
        }
        //如果尺子最大,以最大为准
        if(leftrem<=this.calcMaxLeftRem()){
            leftrem=this.calcMaxLeftRem();
        }
        console.log("leftrem======" + leftrem);
        this.setState({leftrem: leftrem});
    }

    //触摸开始
    touchStart(e) {
        this.setState({
            startX: e.changedTouches[0].pageX
        });
        console.log("start======" + this.state.startX);
    }


    render() {
        return (
            <Container className={style.modalContainer} style={{display: this.props.show}}>
                <div className={style.modal}></div>
                <div className={style.infowindow}>
                    <HeaderPay closePay={this.props.closePay.bind(this)}/>
                    <MiddlePay selectMoney={this.state.selectMoney} addMoney={this.addMoney.bind(this)}
                               reduceMoney={this.reduceMoney.bind(this)}/>
                    <RulePay leftrem={this.state.leftrem} selectMoney={this.state.selectMoney}
                             addMoney={this.addMoney.bind(this)} reduceMoney={this.reduceMoney.bind(this)}
                             touchStart={this.touchStart.bind(this)} touchMove={this.touchMove.bind(this)}
                             touchEnd={this.touchEnd.bind(this)}/>
                    <DescPay/>
                    <ButtomPay selectMoney={this.state.selectMoney}/>
                </div>
            </Container>
        );
    }
}
