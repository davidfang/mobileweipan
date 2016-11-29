import React from 'react';
import HeaderBar from './four/HeaderBar.jsx';
import ItemList from './four/ItemList.jsx';
import style from './four/css/Four.css';

export default class Four extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <HeaderBar/>
                <ItemList/>
            </div>
        );
    }
}
