import React from 'react';

import style from './css/TopNav.css';

import {Link, browserHistory} from 'react-router';

import {Icon} from 'amazeui-touch';

export default class TopNav extends React.Component {
    handleClick(){
        browserHistory.push(this.props.link);
    }
    render() {
        return (
            <div className={style.nav}>
                <div className={style.icon} onClick={this.handleClick.bind(this)}><Icon name="left"/></div>
                <span className={style.span}>{this.props.title}</span>

            </div>
        );
    }
}
