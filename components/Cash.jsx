import React from 'react';
import TopNav from './common/TopNav.jsx';
import CashForm from './cash/CashForm.jsx';


import {
    Container,
    Button,
    NavBar
} from 'amazeui-touch';


export default class Cash extends React.Component {
    render() {
        return (
            <Container  >
                <TopNav title="微信零钱包" link="/four"/>
                <CashForm/>
            </Container>
        );
    }
}
