import React from 'react';


import style from './css/RegisterForm.css';


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

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timenum: 60,
            timetext: '获取验证码'
        };
    }

    postMessage(){
        //发短信的方法
    }

    getVerifyCode() {
        //判断timetext是不是获取验证码,在计数期间不能重复点击
        var currtext=this.state.timetext;
        if(currtext!='获取验证码'){
            return;
        }

       //发短信的方法在此调用
        this.postMessage();

        //计数器
       this.timer= setInterval(function () {
           var num=this.state.timenum;
           num=num-1;
           var text=num;
           var swi=false;
           if(num==0) {
               text='获取验证码';
               num=60;
               swi=true;//计数为0,则清除计数器
           }
           this.setState({
               timenum:num,
               timetext:text
           })
           if(swi){
               this.clearTimer();//清除计数器
           }
        }.bind(this), 1000);
    }
    clearTimer(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <Container className={style.form}>
                <List className={style.list}>
                    <List.Item nested="input" className={style.itemtop}>
                        <Field label={null} placeholder={'输入你的姓名'}/>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'输入你的手机号码'}/>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'输入验证码'}/>
                        <div className={style.codebutton}
                             onClick={this.getVerifyCode.bind(this)}>{this.state.timetext}</div>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'请输入6位数字密码'}/>
                    </List.Item>
                    <List.Item nested="input" className={style.item}>
                        <Field label={null} placeholder={'确认一次密码'}/>
                    </List.Item>
                </List>
                <div className={style.check}>
                    <input type="checkbox" name="kk"/><span style={{marginLeft: '1rem'}}>我已阅读并同意<span
                    style={{color: 'red'}}>风险提示和服务协议</span></span>
                </div>

                <Button amStyle="alert" block>开通账号</Button>

            </Container>
        );
    }
}

