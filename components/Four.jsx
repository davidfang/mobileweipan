import React from 'react';
import HeaderBar from './four/HeaderBar.jsx';
import ItemList from './four/ItemList.jsx';

export default class Four extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar/>
                <ItemList/>
            </div>
        );
    }
}
