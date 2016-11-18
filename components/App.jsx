import React from 'react';

import NavLink from './NavLink.jsx';
import {
    Container,
    Group,
    TabBar,
    Icon,
    Badge,
    amStyles,
} from 'amazeui-touch';

import {Link, browserHistory} from 'react-router';

export default class App extends React.Component {

    totwo(event) {
        browserHistory.push('/two');
    }

    tothree(event) {
        browserHistory.push('/three');
    }

    tofour(event) {
        browserHistory.push('/four');
    }

    toone(event) {
        browserHistory.push('/');
    }

    render() {
        var tabbarstyle = {
            position: 'fixed',
            bottom: '0px'
        }
        return (
            <div>
                <Container>
                    {this.props.children}
                    <TabBar amStyle="warning" style={tabbarstyle}>
                        <TabBar.Item icon="home" title="首页" onClick={this.toone.bind(this)}/>
                        <TabBar.Item icon="gear" title="持仓单" onClick={this.totwo.bind(this)}/>
                        <TabBar.Item icon="bars" title="投资学院" onClick={this.tothree.bind(this)}/>
                        <TabBar.Item icon="person" title="个人中心" onClick={this.tofour.bind(this)}/>
                    </TabBar>
                </Container>

            </div>
        )
    }
}
