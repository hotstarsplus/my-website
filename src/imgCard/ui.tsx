import { Card } from "antd";
import React from "react";
import './ui.css'

const { Meta } = Card;

export class ImgCard extends React.Component<any, any>{
    public render() {
        return (
            <div className="imgDiv">
                < img alt="example" src="../img/2.jpg" />
            </div>
        );
    }
}