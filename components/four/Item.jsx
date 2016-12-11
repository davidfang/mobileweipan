import React from 'react';
import style from './css/Item.css';

export default class Item extends React.Component {
    render() {
        return (
            <div className={style.wrap}>
                <div>
                    <img src={this.props.img} className={style.img}/>

                    <span className={style.spandiv}>{this.props.content }</span>
                </div>
            </div>
        );
    }
}
