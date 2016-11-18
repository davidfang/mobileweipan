import React from 'react';
import HeaderBar from './one/HeaderBar.jsx'
import GoodsBar from './one/GoodsBar.jsx'
import TitleBar from './one/TitleBar.jsx'
import KGraph from './one/KGraph.jsx'
import TradeTimeInfo from './one/TradeTimeInfo.jsx'
import FloatInfo from './one/FloatInfo.jsx'

import {
    Container
} from 'amazeui-touch';


export default class One extends React.Component {
    render() {
        return (
            <Container fill={true}>
                <HeaderBar/>
                <GoodsBar/>
                <TitleBar/>
                <TradeTimeInfo />
                <FloatInfo/>
            </Container>
        );
    }
}



