import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/App.jsx';
import One from './components/One.jsx';
import Two from './components/Two.jsx';
import Three from './components/Three.jsx';
import Four from './components/Four.jsx';
import Register from './components/Register.jsx';
import TradeHisotry from './components/TradeHistory.jsx';
import QrCode from './components/QrCode.jsx';
import Cash from './components/Cash.jsx';
import Recharge from './components/Recharge.jsx';

/*import 'amazeui-touch/scss/base';
 import afont from 'amazeui-touch/dist/fonts/ratchicons.ttf';
 import bfont from 'amazeui-touch/dist/fonts/ratchicons.woff';
 import cfont from 'amazeui-touch/dist/fonts/ratchicons.woff2';

 import ama from 'amazeui-touch/dist/amazeui.touch.min.css';*/

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={One}/>
                <Route path="/two" component={Two}/>
                <Route path="/three" component={Three}/>
                <Route path="/four" component={Four}/>
                <Route path="/register" component={Register}/>
                <Route path="/tradehistory" component={TradeHisotry}/>
                <Route path="/qrcode" component={QrCode}/>
                <Route path="/cash" component={Cash}/>
                <Route path="/recharge" component={Recharge}/>
            </Route>
        </Router>
    ), document.getElementById('app')
)


