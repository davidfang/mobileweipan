import React from 'react';
import  style from './css/TimeHeaderBar.css';


export default class TimeHeaderBar extends React.Component {
    render() {
        return (
            <div className={style.bar}>
                <span>{this.props.time} 后结算</span>
            </div>
        );
    }
}
