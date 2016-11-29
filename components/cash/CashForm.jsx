import React from 'react';

import BlackBoard from './BlackBoard.jsx';

import style from './css/CashForm.css';



import {
    Container,
    Grid,
    Col,
    Group,
    Icon,
    List,
    Field,
    Button,
    Switch,
} from 'amazeui-touch';

export default class CashForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            yuee:'1600.00'
        };
    }

    render() {
        return (
            <Container className={style.form}>
                <List className={style.list}>
                    <List.Item nested="input" className={style.itemtop}>
                        <Field label={null}  defaultValue='可提取金额:'   style={{backgroundColor:'#0F1626',color:'white'}} readOnly="true"/>
                        <div className={style.displaymoney}>{this.state.yuee}</div>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'本次提取金额'} style={{backgroundColor:'#0F1626',color:'white'}}/>
                        <div className={style.display}>请输入提取金额</div>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'姓名'} style={{backgroundColor:'#0F1626',color:'white'}}/>
                        <div className={style.display}>请输入持卡人姓名</div>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'请输入交易密码'} type="password" style={{backgroundColor:'#0F1626',color:'white'}}/>
                    </List.Item>
                </List>

                <Button amStyle="alert" block >提交</Button>
                <BlackBoard/>
            </Container>
        );
    }
}
