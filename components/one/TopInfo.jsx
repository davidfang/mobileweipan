import React from 'react';
import  style from './css/TopInfo.css';


export default class TopInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        //3秒后消失
        setTimeout(function () {
            this.props.doDisapper();
        }.bind(this), 3000);
    }
    componentDidUpdate(){
        //3秒后消失
        setTimeout(function () {
            this.props.doDisapper();
        }.bind(this), 3000);
    }

    render() {
        return (
           <div className={style.bar} style={{display:this.props.show}}>很抱歉现在是休市时间!!!</div>
        );
    }
}
