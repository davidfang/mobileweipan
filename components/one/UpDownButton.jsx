import React from 'react';
import  style from './css/UpDownButton.css';


export default class UpDownButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick() {
        this.props.clickUpDown();
    }

    render() {
        return (
            <div className={style.button} style={{'backgroundColor': this.props.color}} onClick={this.handleClick.bind(this)}>
                <div className={style.imgcon}>
                    <img src={this.props.img} className={style.img}/>
                    <span className={style.one}>{this.props.content} </span>
                </div>
                <div className={style.two + " " + "text-center"}>回报率175%</div>
            </div>
        );
    }
}
