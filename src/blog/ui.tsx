import QueueAnim from "rc-queue-anim";
import React from "react";
import { CardBlog } from "../card/Card/blogUi";
import { CardMoveUPDown } from "../card/Card/ui";
import IndexNav from "../indexNav/ui";
import { Game } from "../jingziqi/Game";
import '../App.css'

export class BlogView extends React.Component<any, any>{
    public render() {
        return (
            <div style={{ height: "2000px", backgroundColor: "brown" }}>
                <IndexNav />
                <div style={{height:"80px",opacity:"0"}}>
                    占位
                </div>
                <div>
                    <QueueAnim delay={300} className="queue-simple">
                        <div key="a">Queue Demo</div>
                        <div key="b">Queue Demo</div>
                        <div key="c">Queue Demo</div>
                        <div key="d">Queue Demo</div>
                    </QueueAnim>
                </div>
            </div>
        );
    }
}