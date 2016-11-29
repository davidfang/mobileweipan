import React from 'react';
import TopNav from './common/TopNav.jsx';

import {
    Container,
    Button,
    NavBar
} from 'amazeui-touch';


export default class QrCode extends React.Component {
    render() {
        return (
            <Container  >
                <TopNav title="二维码" link="/four"/>
            </Container>
        );
    }
}
