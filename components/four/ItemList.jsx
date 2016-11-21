import React from 'react';
import Item  from './Item.jsx';
import ItemHeader  from './ItemHeader.jsx';

export default class ItemList extends React.Component {
    render() {
        return (
            <div>
               <ItemHeader/>
                <Item content="我的代金券" icon="star"/>
                <Item content="交易记录" icon="star"/>
                <Item content="我的账单" icon="star"/>
                <Item content="邀请好友" icon="star"/>
                <Item content="经纪人" icon="star"/>
            </div>
        );
    }
}



