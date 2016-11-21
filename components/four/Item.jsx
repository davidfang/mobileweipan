import React from 'react';
import style from './css/Item.css';
import image from './images/9.PNG';

import {Icon} from 'amazeui-touch';
export default class Item extends React.Component {
    render() {
        return (
            <div className={style.wrap}>
                <div>
                    <div>
                        <img src={image} className={style.icon}/>
                    </div>
                    <span className={style.spandiv}>{this.props.content }</span>
                </div>
            </div>
        );
    }
}
