import React from 'react';
import GoodsBar from './one/GoodsBar.jsx';
import OrderFormList from './two/OrderFormList.jsx';


export default class Two extends React.Component {
    render() {
        return (
            <div>
                <GoodsBar/>
                <OrderFormList/>
            </div>
        );
    }
}

