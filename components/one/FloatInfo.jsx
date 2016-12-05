import React from 'react';
import  style from './css/FloatInfo.css';
import UpDownButton from './UpDownButton.jsx';
import MiddleButton from './MiddleButton.jsx';

import Pay from './pay/Pay.jsx';
import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';

import TopInfo from './TopInfo.jsx';
export default class FloatInfo extends React.Component {

    //初始化
    constructor(props) {
        super(props);
        this.state = {
            topinfoshow: 'block',
            payshow:'block'
        }
    }

    /*  控制顶栏消息显示隐藏  */
    topInfoDisapper() {
        this.setState({topinfoshow: 'none'})
    }

    /*  点击按钮  */
    clickUpDown() {
        //判断现在是否是休市时间
        var isxiushi=false;
        if(isxiushi){
            //顶栏消息
            this.setState({topinfoshow: 'block'})
            return;
        }
        this.setState({payshow:'block'});
    }

    /*  控制购买按钮显示隐藏  */
    closePay(){
        this.setState({payshow:'none'})
    }
    onPay(){
        this.setState({payshow:'block'})
    }

    render() {
        return (
            <Container {...this.props} >
                <Grid >
                    <Col cols={2}>
                        <UpDownButton color="green" content="看跌" clickUpDown={this.clickUpDown.bind(this)}/>
                    </Col>
                    <Col cols={2}>
                        <MiddleButton/>
                    </Col>
                    <Col cols={2}>
                        <UpDownButton color="red" content="看涨" clickUpDown={this.clickUpDown.bind(this)}/>
                    </Col>
                </Grid>
                <TopInfo show={this.state.topinfoshow} doDisapper={this.topInfoDisapper.bind(this)}/>
                <Pay show={this.state.payshow} onPay={this.onPay.bind(this)} closePay={this.closePay.bind(this)}/>
            </Container>
        );
    }
}
