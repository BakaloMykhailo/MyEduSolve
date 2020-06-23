import React from 'react';
import { Carousel } from 'antd';

import Arrow from './Arrow';
import Card from './Card';

const datas = [
    {
        imageBg: '../../static/container.png',
        labelTop: 'Kartu Prakerja',
        labelBottom: 'Webinar',
        title: 'Eko Ariawan',
        brandIcon: '../../static/pin.png',
        content: 'It is a long established fact that a reader will be distracted by th',
        price: 'Rp 500.000',
        discon: 'Rp 1.100.000',
        id: '49'
    },
    {
        imageBg: '../../static/container2.png',
        labelTop: 'Kartu Prakerja',
        labelBottom: 'Video',
        title: 'Sharon Joetama',
        brandIcon: '../../static/pj.png',
        content: 'It is a long established',
        price: 'Rp 499.000',
        discon: 'Rp 1.000.000',
        id: '48'
    },
    {
        imageBg: '../../static/container3.png',
        labelTop: 'Kartu Prakerja',
        labelBottom: 'Video',
        title: 'Eko Ariawan',
        brandIcon: false,
        content: 'It is a long established fact that a reader will be distracted by th',
        price: 'Rp 1.000.000',
        discon: 'Rp 2.000.000',
        id: '47'
    },
    {
        imageBg: '../../static/container3.png',
        labelTop: 'Kartu Prakerja',
        labelBottom: 'Video',
        title: 'Eko Ariawan',
        brandIcon: false,
        content: 'It is a long established fact that a reader will be distracted by th',
        price: 'Rp 1.000.000',
        discon: 'Rp 2.100.000',
        id: '46'
    },
    {
        imageBg: '../../static/container.png',
        labelTop: 'Kartu Prakerja',
        labelBottom: 'Webinar',
        title: 'Eko Ariawan',
        brandIcon: '../../static/pin.png',
        content: 'It is a long established fact that a reader will be distracted by th',
        price: 'Rp 500.000',
        discon: 'Rp 1.100.000',
        id: '45'
    }
];

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 845,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 595,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slider">
                <h2 className="slider__title text-align">Rekomendasi Kelas</h2>
                <p className="slider__small-text font-weight-300 text-align">Bebas pilih kelas mana yang sesuai dengan kamu</p>
                <div className="pos-relative"> 
                    <div onClick={this.previous} className="slider__arrow slider__arrow--left">
                        <Arrow type='left' />
                    </div>
                    <Carousel ref={node => (this.carousel = node)} {...props}>
                        {datas.map((data) => (
                            <Card data={data} key={data.id}/>
                        ))}
                    </Carousel>
                    <div onClick={this.next} className="slider__arrow slider__arrow--right">
                        <Arrow type='right' /> 
                    </div>
                </div>
            </div>
        );
    }
}