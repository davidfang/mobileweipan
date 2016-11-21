import React from 'react';

import {
    Container,
    Group,
    Button,
    Slider,
} from 'amazeui-touch';

export default class SliderBar extends React.Component {

    render() {


        var data = [
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg'
            },
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg'
            },
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg'
            },
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
            }];

        var sliderCaption = (
            <Slider>
                {data.map(function (item, i) {
                    return (
                        <Slider.Item
                            key={i}
                        >
                            <img src={item.img}/>
                            <div className="slider-caption">
                                {item.desc}
                            </div>
                        </Slider.Item>
                    );
                })}
            </Slider>
        );

        var sliderIntance = (
            <Slider  >
                <Slider.Item>
                    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                </Slider.Item>
                <Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></Slider.Item>
                <Slider.Item> <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></Slider.Item>
                <Slider.Item> <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/></Slider.Item>
            </Slider>
        );

        return (
            <Container {...this.props}>
                <Group header="默认" noPadded>
                    {sliderIntance}
                </Group>
            </Container>

        );
    }
}


