import React from 'react';
import Item  from './Item.jsx';
import ItemHeader  from './ItemHeader.jsx';

import daijinquan from '../common/images/daijinquan.png';
import jiaoyijilu from '../common/images/jiaoyijilu.png';
import zhangdan from '../common/images/zhangdan.png';
import yaoqinghaoyou from '../common/images/yaoqinghaoyou.png';
import jingjiren from '../common/images/jingjiren.png';

export default class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: ['我的代金券', '交易记录', '我的账单', '邀请好友', '经纪人'],
            imgs: [daijinquan,jiaoyijilu,zhangdan,yaoqinghaoyou,jingjiren]

        }
    }

    componentWillMount() {

    }


    render() {
        return (
            <div>
                <ItemHeader/>
                {
                    this.state.imgs.map((m,i)=>{
                        return(
                            <Item content={this.state.contents[i]} key={i} img={m} />
                        )
                    })
                }
            </div>
        );
    }
}



