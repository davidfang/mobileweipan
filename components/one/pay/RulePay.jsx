import React from 'react';
import style from './css/RulePay.css';

import biaochi from '../../common/images/biaochi.png';
import zhizhen from '../../common/images/zhizhen.png';

export default class RulePay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={style.wrap}>
                <img src={biaochi} style={{left: this.props.leftrem+"rem"}} className={style.biaochi}
                 onTouchStart={this.props.touchStart} onTouchMove={this.props.touchMove}  onTouchEnd={this.props.touchEnd} />
                <img src={zhizhen} className={style.zhizhen}/>
            </div>
        );
    }
}

