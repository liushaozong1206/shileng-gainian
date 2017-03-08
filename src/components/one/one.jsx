/**
 * 作者：刘少宗
 * 时间：2017/2/27
 * 描述：白雪公主
 */


import React, {Component} from 'react';
import './one.scss';

import Girl from './img/one_2.png';
import Man from './img/one_3.png';
import Dialog1 from './img/one_4.png'
import Dialog2 from './img/one_5.png'
import Dialog3 from './img/one_6.png'
import Dialog4 from './img/one_7.png'


class One extends Component {
    constructor() {
        super();
        this.state = {
            Aa: 'aaaaaaaaaaa'
        };

    }
    componentDidMount() {}
    render() {
        return (
            <div className="one_box">
                <div className="one_text"></div>
                <div className="one_bg">
                    <div className="one_girl"><img src={Girl}/></div>
                    <div className="one_girl_f"></div>
                    <div className="one_man"><img src={Man}/></div>
                    <div className="one_dialog1"><img src={Dialog1}/></div>
                    <div className="one_dialog2"><img src={Dialog2}/></div>
                    <div className="one_dialog3"><img src={Dialog3}/></div>
                    <div className="one_dialog4"><img src={Dialog4}/></div>
                    <div className="box_text"></div>
                </div>
                <input type='button' className="i_btn btn01" defaultValue={'发布弹幕'} disabled=""></input>
            </div>
        )
    }
}


export default One;