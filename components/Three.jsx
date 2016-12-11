import React from 'react';
import SliderBar from './three/SliderBar.jsx';
import TopNav from './common/TopNav.jsx';

export default class Three extends React.Component {
    render() {
        return (
            <div>
                <TopNav title="投资学院" link="/"/>
                <SliderBar/>
            </div>
        );
    }
}
