import React from 'react';
import RegisterForm from './register/RegisterForm.jsx';
import TopNav from './common/TopNav.jsx';


import {
    Container,
} from 'amazeui-touch';


export default class Register extends React.Component {
    render() {

        return (
            <Container fill={true}>
                <TopNav title="注册" link="/two"/>
                <RegisterForm/>
            </Container>
        );
    }
}


