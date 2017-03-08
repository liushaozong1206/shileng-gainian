/**
 * 作者：刘少宗
 * 时间：2017/2/27
 * 描述：李府篇
 */


import React, {Component} from 'react';
import './three.scss';

import ThreeCenter from './img/three_3.png';
import ThreeLeft from './img/three_2.png';
import ThreeRight from './img/three_4.png';
import ThreeDialog1 from './img/three_5.png';
import ThreeDialog2 from './img/three_6.png';
import ThreeDialog3 from './img/three_7.png';

class Three extends Component {
    constructor() {
        super();
        this.state = {
            Aa: 'aaaaaaaaaaa'
        };

    }
    componentDidMount() {}
    render() {
        return (
            <div className="three_box">
                <div className="three_text"></div>
                <div className="three_bg">
                    <div className="three_center"><img src={ThreeCenter}/></div>
                    <div className="three_left"><img src={ThreeLeft}/></div>
                    <div className="three_right"><img src={ThreeRight}/></div>
                    <div className="three_dialog1"><img src={ThreeDialog1}/></div>
                    <div className="three_dialog2"><img src={ThreeDialog2}/></div>
                    <div className="three_dialog3"><img src={ThreeDialog3}/></div>
                    <div className="box_text"></div>
                </div>
                <input type='button' className="i_btn btn03" defaultValue={'发布弹幕'} disabled=""></input>
            </div>
        )
    }
}


export default Three;