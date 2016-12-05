import React from 'react';

import style from './css/HeaderPay.css';
import {Icon} from 'amazeui-touch';
export default class HeaderPay extends React.Component {

    constructor(props){
        super(props);
        this.state={
            leftClass:style.left,
            rightClass:style.rightnull
        }
    }

    clickLeft(){
        this.setState({leftClass:style.left,rightClass:style.rightnull});
    }

    clickRight(){
        this.setState({leftClass:style.leftnull,rightClass:style.right});
    }


    render() {
        return (
            <div className={style.wrap}>
                <div className={this.state.leftClass} onClick={this.clickLeft.bind(this)}>使用现金</div>
                <div className={this.state.rightClass} onClick={this.clickRight.bind(this)}>使用代金券</div>
                <div className={style.icon} onClick={this.props.closePay}><Icon name={'close'}/> </div>
            </div>
        );
    }
}



