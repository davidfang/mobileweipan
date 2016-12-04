import React from 'react';
import  style from './css/DropDownButton.css';

import {
    Icon
} from 'amazeui-touch';

export default class DropDownButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuShow: 'none',
            currentText: this.props.listdata[0]
        };
    }

    clickDropDown() {
        //弹出下拉列表
        var show = this.state.menuShow;
        if (show == 'none') {
            this.setState({menuShow: 'block'})
            return;
        }
        if (show == 'block') {
            this.setState({menuShow: 'none'})
        }
    }

    clickItem(value) {
        this.setState({currentText: value,menuShow:'none'});
    }

    render() {
        return (
            <div className={style.dropdown}>
                <div className={style.dropdownButton} onClick={this.clickDropDown.bind(this)}>
                    <span > {this.state.currentText}</span>
                    <Icon name={'caret'} className="fr" />
                </div>
                <div className={style.dropdownMenu} style={{display: this.state.menuShow}}>
                    {
                        this.props.listdata.map((d, i)=> {
                            return (
                                <div key={i} className={style.dropdownItem}
                                     onClick={this.clickItem.bind(this, d)}>{d}</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
