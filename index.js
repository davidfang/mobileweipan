import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/App.jsx';
import One from './components/One.jsx';
import Two from './components/Two.jsx';
import Three from './components/Three.jsx';
import Four from './components/Four.jsx';

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
            </Route>
        </Router>
    ), document.getElementById('app')
)


