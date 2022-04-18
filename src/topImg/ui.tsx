import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import React from "react";
import "../App.css";

/**
 * 走马灯
 */
export class TopImgView extends React.Component<any, any>{
    private img: any;
    constructor(props: any) {
        super(props);
        this.img = undefined;
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    public prev() {
        this.img.prev();
    }

    public next() {
        this.img.next();
    }

    public render() {
        return (
            <div className='fatherbody'>
                <div onClick={this.prev}><LeftCircleOutlined className='prev' /></div>
                <div onClick={this.next}><RightCircleOutlined className='next' /></div>
                <Carousel
                    dots={false}
                    autoplay={true}
                    ref={dom => { this.img = dom; }}
                >
                    <div className='contentStyle'><img src={require("../img/1.jpg")} alt='第一张图片' /></div>
                    <div className='contentStyle'><img src={require("../img/2.jpg")} alt='' /></div>
                    <div className='contentStyle'><img src={require("../img/3.jpg")} alt='' /></div>
                    <div className='contentStyle'><img src={require("../img/4.jpg")} alt='' /></div>
                </Carousel>
            </div>
        );
    }
}