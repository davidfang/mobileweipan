import React from 'react';
import style from './css/HeaderBar.css';

import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <Container {...this.props} className={style.wrap}>
                <div className="fl">图像</div>
                <div className="fl">经纪人</div>
                <div className="fr">改密码</div>
                <div className="cf"></div>

            </Container>
        );
    }
}
