import React from 'react';
import style from './css/RulePay.css';

import biaochi from '../../common/images/biaochi.png';
import zhizhen from '../../common/images/zhizhen.png';

export default class RulePay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startX: 0,
            endX: 0
        };
    }

    touchEnd(e) {
        //触摸结束
        // alert(JSON.stringify(e.touches));
        this.setState({
            endX: e.changedTouches[0].pageX
        })
        var endX= e.changedTouches[0].pageX;
        console.log("end======" + this.state.endX);
        alert(endX - this.state.startX);
    }

    touchMove(e) {
        //触摸移动
        console.log(e.changedTouches[0].pageX);

        //pageX的单位值是CSS的像素,还需要转换为rem
    }

    touchStart(e) {
        //触摸开始
        this.setState({
            startX: e.changedTouches[0].pageX
        });
        console.log("start======" + this.state.startX);
    }

    render() {
        return (
            <div className={style.wrap}>
                <img src={biaochi} style={{left: this.props.leftrem}} className={style.biaochi}
                     onTouchStart={this.touchStart.bind(this)} onTouchMove={this.touchMove.bind(this)} onTouchEnd={this.touchEnd.bind(this)}/>
                <img src={zhizhen} className={style.zhizhen}/>
            </div>
        );
    }
}

