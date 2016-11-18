import React from 'react';
import  style from './css/TitleBar.css';
import {
    Container,
    Tabs,
    Card,
    Button,
} from 'amazeui-touch';
import KGraph from  './KGraph.jsx';
import LineGraph from  './LineGraph.jsx';

export default class TitleBar extends React.Component {

    constructor() {
        super();
        this.state = {
            activeTab: 0
        }
    }

    handleAction(key) {
        this.setState({
            activeTab: key
        });
    }


    render() {
        const albums = [
            {
                title: '分时线',
                desc: <LineGraph/>
            },

            {
                title: '5分钟',
                desc: <KGraph graphid="oneg"/>
            },
            {
                title: '15分钟',
                desc: <KGraph graphid="twog"/>
            },
            {
                title: '30分钟',
                desc: <KGraph graphid="threeg"/>
            }
        ];

        return (
            <Container {...this.props} className={style.wrap}>
                <Tabs activeKey={this.state.activeTab} onAction={this.handleAction.bind(this)}>
                    {albums.map((ablum, i) => {
                        return (
                            <Tabs.Item title={ablum.title} key={i} navStyle={'warning'}>
                                {ablum.desc}
                            </Tabs.Item>
                        )
                    })}
                </Tabs>

            </Container>
        );
    }
}
