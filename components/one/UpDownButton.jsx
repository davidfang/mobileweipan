import React from 'react';
import  style from './css/UpDownButton.css';


export default class UpDownButton extends React.Component {
    render() {
        return (
            <div   className={style.button} style={{'backgroundColor' :this.props.color}} >
                <div className={style.one + " "+"text-center"}>{this.props.content}</div>
                <div className={style.two + " "+"text-center"}>回报率175%</div>
            </div>
        );
    }
}
