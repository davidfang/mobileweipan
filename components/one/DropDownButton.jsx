import React from 'react';
import  style from './css/DropDownButton.css';

import {
    Icon
} from 'amazeui-touch';

export default class DropDownButton extends React.Component {
    render() {
        return (
            <div className={style.dropdown}>
                <span > {this.props.content}</span>
                <Icon name={'caret'} className="fr"/>
            </div>
        );
    }
}
