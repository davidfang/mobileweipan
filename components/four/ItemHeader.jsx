import React from 'react';
import style from './css/ItemHeader.css';
import {Container, Grid, Col, Button, Icon} from 'amazeui-touch';

export default class ItemHeader extends React.Component {
    render() {
        return (
            <Container {...this.props} className={style.wrap }>
                <Grid>
                    <Col cols={3} className={'text-left ' }>
                        <Icon name='star' className={style.icon}/>
                        <div className={style.moneydiv  }>
                            <div style={{color: 'red'}}>0.00</div>
                            <div>账户余额</div>
                        </div>
                    </Col>
                    <Col cols={3} className={'text-right padding' }>
                        <Button amStyle="primary" amSize={'sm'} className={style.buttonone}>提现</Button>
                        <Button amStyle="alert" amSize={'sm'} className={style.buttontwo}>充值</Button>
                    </Col>
                </Grid>
            </Container>
        );
    }
}
