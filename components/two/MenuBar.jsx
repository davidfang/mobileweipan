
import React from 'react';
import  style from './css/MenuBar.css';

import DropDownButton from '../common/DropDownButton.jsx';

import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';


export default class MenuBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            leftDate:[],
            rightData:[]
        };
    }
    componentWillMount(){

        var l=['所有产品', '黄金', '白银'];
        var r=['持仓中', '10M', '15M'];
        this.setState({
            leftData:l,
            rightData:r,
        })
    }
    render() {
        return (
            <Container className={style.wrap}{...this.props} >
                <div className={style.halfContainer} >
                    <DropDownButton listdata={this.state.leftData}/>
                </div>
                <div className={style.halfContainer} >
                    <DropDownButton listdata={this.state.rightData}/>
                </div>
            </Container>
        );
    }
}
