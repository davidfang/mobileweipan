import React from 'react';
import  style from './css/TitleBar.css';
import {
    Container,
    Tabs,
    Card,
    Button,
} from 'amazeui-touch';


export default class TitleBar extends React.Component {

    constructor() {
        super();
        this.state = {
            activeTab: 2
        }
    }

    handleAction(key) {
        this.setState({
            activeTab: key
        });
    }

    changeTab(e) {
        e.preventDefault();

        if (this.state.activeTab !== 1) {
            this.setState({
                activeTab: 1,
            });
        } else {
            console.warn('已经激活第二个 Tab 了!');
        }
    }


    render() {
        const albums = [
            {
                title: '分时线',
                desc: `
                      她坦白了我们所虚伪的 她单纯了我们所复杂的 五年以来…
                      是我们唯一相信且期待杨乃文的理由。`
            },
            {
                title: '5分钟',
                desc: `
        出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。
        杨乃文96年在魔岩校园live演唱种鲜形象，搭配M新感觉。`
            },
            {
                title: '15分钟',
                desc: `所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量`
            },
            {
                title: '30分钟',
                desc: `所有人都能从作品中听到能量和震撼的呈现，矛盾步潮流，所有年轻人都能感受的热情和力量`
            }
        ];

        return (
            <Container {...this.props} className={style.wrap}>
                <Tabs activeKey={this.state.activeTab} onAction={this.handleAction.bind(this)} >
                    {albums.map((ablum, i) => {
                        return (
                            <Tabs.Item title={ablum.title} key={i} navStyle={'warning'} >
                                {ablum.desc}
                            </Tabs.Item>
                        )
                    })}
                </Tabs>

            </Container>
        );
    }
}
