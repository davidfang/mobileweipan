import React from 'react';
import styles from './css/ItemHeader.css';
import yue from '../common/images/yue.png';

import {Container, Grid, Col, Button, Icon} from 'amazeui-touch';

export default class ItemHeader extends React.Component {
    render() {
        return (
            <Container {...this.props} className={styles.root }>
                <div className={styles.imgcon}>
                    <img className={styles.img} src={yue}/>
                </div>
                <div className={styles.middle}>
                    <div className={styles.pcon}>
                        <p className={styles.topp}>0.00</p>
                        <p className={styles.bottomp}>账户余额</p>
                    </div>
                </div>
                <div className={styles.btncon}>
                    <div className={styles.button} style={{backgroundColor: '#F65B61'}}>充值</div>
                </div>
                <div className={styles.btncon}>
                    <div className={styles.button} style={{backgroundColor: '#3CA4EB'}}>提现</div>
                </div>
                <div className="cf"></div>
            </Container>
        );
    }
}
