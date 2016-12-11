import React from 'react';
import  styles from './css/HeaderBar.css';
import headimg from '../common/images/headimg.jpg';


export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className={styles.root} >
                <div className={styles.left}>
                    <img src={headimg} className={styles.img}/>
                </div>
                <div className={styles.middle}>
                    <p className={styles.topp}>个人账户(元)</p>
                    <p className={styles.bottomp}>0.00</p>
                </div>
                <div className={ styles.button}>充值</div>
            </div>

        );
    }
}
