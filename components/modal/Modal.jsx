import React from 'react';
import  style from './css/Modal.css';

import {Container, Button, Field} from 'amazeui-touch';

export default class Modal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show:'block',
            pwd:'',
            errorshow:'none'
        };
    }
    login(){
        alert(this.state.pwd);
        var passpwd=this.state.pwd;
        if(passpwd==123456) {
            //如果密码正确
            this.setState({show:'none'});
            return;
        }
        //如果密码不正确
        this.setState({errorshow:'inline'})
    }

    handleInput(e){
        this.setState({pwd:e.target.value});
    }

    render() {
        return (
            <Container className={style.modalContainer} style={{display:this.state.show}}>
                <div className={style.modal}></div>
                <div className={style.infowindow}>
                    <div className={style.title}>输入登陆密码</div>
                    <hr/>
                    <div className={style.content}>
                        <Field type="password" className={style.field} defaultValue={this.state.pwd} onChange={this.handleInput.bind(this)}/>
                        <Button amStyle="warning" block className={style.button} onClick={this.login.bind(this)}>确认</Button>
                        <p><span className={style.mimacuowu} style={{display:this.state.errorshow}}>密码错误</span><a href="/two">忘记了密码?</a></p>
                    </div>
                </div>
            </Container>
        );
    }
}
