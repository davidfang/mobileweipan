import React from 'react';

import style from './css/BlackBoard.css';

import {
    Container,
    Button,
    NavBar
} from 'amazeui-touch';


export default class BlackBoard extends React.Component {
    render() {
        return (
            <Container  >
                <p className={style.phase}><span className={style.star}>*</span> <span className={style.text}>微信认证用户每天限额两万微信认证用户每天限额两万,未认证用户限额2000,单笔最小金额100元 </span></p>
                <p className={style.phase}><span className={style.star}>*</span> <span className={style.text}>[提现到账时间]:上午10:00--晚上22:00之间提现,当天4小时内到账</span></p>
                <p className={style.phase}><span className={style.star}>*</span> <span className={style.text}> [提现手续费]:平台提现每一笔收取1元提现手续费</span></p>
                <p className={style.phase}><span className={style.star}>*</span> <span className={style.text}> [提现时间段]:上午10:00--晚上22:00之间提现当天到账,22:00以后提现隔天到账</span></p>
            </Container>
        );
    }
}
