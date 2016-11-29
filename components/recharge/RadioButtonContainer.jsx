import React from 'react';
import RadioButton from './RadioButton.jsx';
import style from './css/RadioButtonContainer.css'

import {
    Button
} from 'amazeui-touch';
export default class RadioButtonContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moneylist: [50, 100, 300, 500, 1000, 2000, 3000, 5000],
            check: -1
        };
    }

    clearAllButtonAndSetClick(i) {

        //循环消除样式
        this.state.moneylist.map((m,i)=>{
            this.refs[i].cancelClick();
        })
        //设置被选中
        this.setState({check: i});

    }

    handleSubmit() {

        alert(this.state.check);

    }

    render() {
        return (
            <div className={style.container}>
                <div>
                    {
                        this.state.moneylist.map((money, i)=> {
                            return (
                                <RadioButton key={i} ref={i} content={money} clear={this.clearAllButtonAndSetClick.bind(this, i)}/>
                            );
                        })
                    }
                </div>


                <div className={style.button}>
                    <Button amStyle="warning" style={{borderRadius: '0.5rem'}} block
                            onClick={this.handleSubmit.bind(this)}>微信支付</Button>
                </div>
            </div>
        );
    }
}
