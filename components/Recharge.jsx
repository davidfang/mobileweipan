import React from 'react';
import TopNav from './common/TopNav.jsx';
import RadioButtonContainer from './recharge/RadioButtonContainer.jsx';

import {
    Container,
    Button
} from 'amazeui-touch';

export default class Recharge extends React.Component {
    render() {

        return (
            <Container fill={true}>
                <TopNav title="充值" link="/two"/>
                <RadioButtonContainer/>
            </Container>
        );
    }
}

