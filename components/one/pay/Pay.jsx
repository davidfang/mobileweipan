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
        let width = document.documentElement.getBoundingClientRect().width;
        let rem = width * 27.3 / 640;
        console.log(rem);
        this.state = {
            errorshow: 'none',
            currentMoney: 180,//初始金钱数量为180
            money_rem: 0.037835,//1元的rem值
            zeroleftrem: 3.28,//金钱为0时的Left值
            leftrem: -3.5303,//金钱为180标尺的Left值
            startX: 0,//起始x坐标
            endX: 0,
            cssrate: rem,//1rem拥有的css像素
        };
    }

    //通过绝对金钱值换算出应该滑动的rem值,返回结果为rem字符串
    //经检验是正确的
    calcrem(m) {
        let rate = this.state.money_rem;
        let result = this.state.zeroleftrem - rate * m;
        return result;
    }

    //计算最大金额
    //是个常量值, rem值:-72.39rem
    //经检验是正确的
    calcMaxLeftRem() {
        return this.state.zeroleftrem - 2000 * this.state.money_rem;
    }

    //减少金额
    //经检验是正确的
    reduceMoney() {
        let m = this.state.currentMoney;
        //小于0点不动了
        if (m <= 0) {
            return;
        }
        m = m - 20;
        this.setState({
            currentMoney: m,
            leftrem: this.calcrem(m),
        });

    }

    //增加金额
    //经检验是正确的
    addMoney() {
        let m = this.state.currentMoney;
        //大于2000点不动了
        if (m >= 2000) {
            return;
        }
        m = m + 20;
        this.setState({currentMoney: m, leftrem: this.calcrem(m)});
    }


    //通过增量rem值换算出金钱
    //注意:是移动的rem换算金钱,不是显示的rem
    //左移<==rem为负,右移==>rem为正
    //经检验是正确的
    calcmoney(moveRem) {
        let rate = this.state.money_rem;
        let m = this.state.currentMoney - moveRem / rate;
        return m;
    }

    //通过滑动的CSS像素值计算应该滑动的rem值,向左滑动是负值
    //经检验是正确的
    //range为负值,表示左滑
    calcrange(range) {
        let cssrate = this.state.cssrate;
        let rem = range / cssrate;
        console.log('css值:' + range);
        console.log('rem值:' + rem);
        return rem;
    }


    //触摸结束
    //经检验是正确的
    touchEnd(e) {
        // alert(JSON.stringify(e.touches));
        let x = e.changedTouches[0].pageX;
        this.setState({
            endX: x
        });
        console.log("触摸结束CSS值:" + x);
        let range = x - this.state.startX;
        let r = this.calcrange(range);//计算出增量rem值
        let money = this.calcmoney(r);
        //使用回弹算法后,重新根据钱来计算leftrem
        let roundMOney=this.getRoundMoney(money);
        let nrem = this.calcrem(roundMOney);
        console.log('移动的:' + r);
        console.log('金钱:' + money);
        this.setState({currentMoney: roundMOney, leftrem: nrem});
    }

    //回弹算法
    //经检验是正确的
    //金钱只取20的整数倍
    getRoundMoney(m){
        if(m<=0){
            return 0;
        }
        if(m>=2000){
            return 2000;
        }
        if(m%20==0){
            return m;
        }else{
            return Math.round(m/20)*20;
        }
    }


    //触摸滑动
    //经检验是正确的
    touchMove(e) {
        let startX = this.state.startX;
        let x = e.changedTouches[0].pageX;
        let range = this.calcrange(x - startX);//计算出增量rem
        let money = this.calcmoney(range);//计算出绝对金钱
        let leftrem = this.calcrem(money);//计算出绝对rem
        console.log(leftrem);

        //如果尺子靠近0了,会回归到0
        if (leftrem >= this.state.zeroleftrem) {
            leftrem = this.state.zeroleftrem;
        }
        //如果尺子最大,以最大为准
        if (leftrem <= this.calcMaxLeftRem()) {
            leftrem = this.calcMaxLeftRem();
        }
        this.setState({leftrem: leftrem});
    }

    //触摸开始
    //经检验是正确的
    touchStart(e) {
        let x = e.changedTouches[0].pageX;
        this.setState({
            startX: x
        });
        console.log("触摸开始CSS值:" + x);
    }


    render() {
        return (
            <Container className={style.modalContainer} style={{display: this.props.show}}>
                <div className={style.modal}></div>
                <div className={style.infowindow}>
                    <HeaderPay closePay={this.props.closePay.bind(this)}/>
                    <MiddlePay currentMoney={this.state.currentMoney} addMoney={this.addMoney.bind(this)}
                               reduceMoney={this.reduceMoney.bind(this)}/>
                    <RulePay leftrem={this.state.leftrem} selectMoney={this.state.currentMoney}
                             addMoney={this.addMoney.bind(this)} reduceMoney={this.reduceMoney.bind(this)}
                             touchStart={this.touchStart.bind(this)} touchMove={this.touchMove.bind(this)}
                             touchEnd={this.touchEnd.bind(this)}/>
                    <DescPay/>
                    <ButtomPay selectMoney={this.state.currentMoney}/>
                </div>
            </Container>
        );
    }
};
