import React from 'react';
import OrderFormList from './two/OrderFormList.jsx';
import MenuBar from './two/MenuBar.jsx';
import TimeHeaderBar from './two/TimeHeaderBar.jsx';


export default class Two extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ss:20,
            timetext:'00:00:20',
        };
    }

    componentDidMount(){
        this.calcTime();
    }

    calcTime(){
        var sepa = ":";
        this.timer=setInterval(function(){
            var hh = '00';
            var mm = '00';
            var ss=this.state.ss;
            ss=ss-1;
            var text=hh+sepa+mm+sepa+ss;
            this.setState({timetext: text,ss:ss});
            if(ss==0) {
                clearInterval(this.timer);
            }
        }.bind(this),1000)
    }

    render() {
        return (
            <div>
                <MenuBar/>
                <TimeHeaderBar time={this.state.timetext}/>
                <OrderFormList/>
            </div>
        );
    }
}

