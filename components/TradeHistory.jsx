import React from 'react';
import TopNav from './common/TopNav.jsx';

import {
    Container,
    Button,
    NavBar
} from 'amazeui-touch';


export default class TradeHistory extends React.Component {
    render() {
        return (
            <Container  >
                <TopNav title="交易记录" link="/four"/>
            </Container>
        );
    }
}
