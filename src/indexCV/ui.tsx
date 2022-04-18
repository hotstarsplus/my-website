import { BackTop, Layout, message } from "antd";
import React from "react";
import IndexNav from "../indexNav/ui";
import { TopImgView } from "../topImg/ui";
import "../App.css";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { CardMoveUPDown } from "../card/Card/ui";
import { ImgCard } from "../imgCard/ui";

export class IndexCVView extends React.Component<any, any>{

    public render() {
        return (
            <div style={{ height: "2000px", backgroundColor: "white" }}>
                <IndexNav />
                <TopImgView />
                <BackTop duration={1000}>
                    <div className="upStyle"><VerticalAlignTopOutlined style={{ fontSize: "20px" }} /></div>
                </BackTop>
                <CardMoveUPDown />
                <ImgCard/>
            </div>
        );
    }
}