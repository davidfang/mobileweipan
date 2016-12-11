import React from 'react';
import styles from './css/HeaderBar.css';
import headimg from '../common/images/headimg.jpg';
import erweima from '../common/images/erweima.png';
import mima from '../common/images/mima.png';

import {
    Grid,
    Col,
    Button,
    Container
} from 'amazeui-touch';

export default class HeaderBar extends React.Component {
    render() {
        return (

            <div className={styles.root}>
                <div className={styles.left}>
                    <img src={headimg} className={styles.img}/>
                </div>
                <div className={styles.middle}>
                    <p className={styles.topp}>涂泽</p>
                    <p className={styles.bottomp}>15026856935</p>
                </div>
                <div className={styles.textandimg1}>
                    <div className={styles.imgcon}>
                        <img src={erweima} className={styles.img2}/><br/>
                    </div>
                    <span className={styles.textp}>经纪人</span>
                </div>
                <div className={styles.textandimg2}>
                    <div className={styles.imgcon}>
                        <img src={mima} className={styles.img2}/>
                    </div>
                    <span className={styles.textp}>改密码</span>
                </div>


            </div>

        );
    }
}
