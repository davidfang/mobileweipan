import React from 'react';
import style from './css/RadioButton.css';

export default class RadioButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            className:style.button
        };
    }

    handleClick(){
        //清除所有其他相邻组件的样式,并且告诉父组件本组件被选中
        this.props.clear();
        var nclassName=this.state.className+" "+style.afterclick;
        this.setState({className:nclassName})
    }

    cancelClick(){
        var cc=this.state.className;
        var nclassname=cc.replace(style.afterclick, '');
        this.setState({className:nclassname});
    }

    render() {
        return (
            <div className={this.state.className}  onClick={this.handleClick.bind(this)}>{this.props.content} <span style={{color:'black'}}>元</span></div>
        );
    }
}
