/**
 * 作者：刘少宗
 * 时间：2017/2/27
 * 描述：福禄篇
 */


import React, {Component} from 'react';
import './two.scss';

import Twom from './img/two_2.png';
import Twow1 from './img/two_3.png';
import Twow2 from './img/two_4.png';
import two_dialog1 from './img/two_5.png';
import two_dialog2 from './img/two_6.png';
import two_dialog3 from './img/two_7.png';
import two_dialog4 from './img/two_8.png';


class Two extends Component {
    constructor() {
        super();
        this.state = {
            Aa: 'aaaaaaaaaaa'
        };

    }
    componentDidMount() {}
    render() {
        return (
            <div className="two_box">
                <div className="two_text"></div>
                <div className="two_bg">
                    <div className="two_man"><img src={Twom}/></div>
                    <div className="two_w1"><img src={Twow1}/></div>
                    <div className="two_w2"><img src={Twow2}/></div>
                    <div className="two_dialog1"><img src={two_dialog1}/></div>
                    <div className="two_dialog2"><img src={two_dialog2}/></div>
                    <div className="two_dialog3"><img src={two_dialog3}/></div>
                    <div className="two_dialog4"><img src={two_dialog4}/></div>
                    <div className="box_text"></div>
                </div>
            </div>
        )
    }
}


export default Two;