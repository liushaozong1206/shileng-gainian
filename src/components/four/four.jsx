/**
 * 作者：刘少宗
 * 时间：2017/2/27
 * 描述：光之国
 */


import React, {Component} from 'react';
import './four.scss';


import FourLeft from './img/four_2.png';
import FourRight from './img/four_3.png';
import FourDialog1 from './img/four_4.png';
import FourDialog2 from './img/four_5.png';
import FourDialog3 from './img/four_6.png';
import FourDialog4 from './img/four_7.png';
import FourDialog5 from './img/four_8.png';
import FourDialog6 from './img/four_9.png';
import FourDialog7 from './img/four_10.png';
import Hand from './img/hand.png';

class Four extends Component {
    constructor() {
        super();
        this.state = {
            Aa: 'aaaaaaaaaaa'
        };

    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="four_box">
                <div className="four_text"></div>
                <div className="four_bg">
                    <div className="four_left"><img src={FourLeft}/></div>
                    <div className="four_right">
                        <img src={FourRight}/>
                        <div className="han1"><img src={Hand} alt=""/></div>
                        <div className="han2"><img src={Hand} alt=""/></div>
                        <div className="han3"><img src={Hand} alt=""/></div>
                        <div className="han4"><img src={Hand} alt=""/></div>
                        <div className="han5"><img src={Hand} alt=""/></div>
                        <div className="tear_l"><p></p></div>
                        <div className="tear_r"><p></p></div>
                    </div>
                    <div className="four_dialog1"><img src={FourDialog1}/></div>
                    <div className="four_dialog2"><img src={FourDialog2}/></div>
                    <div className="four_dialog3"><img src={FourDialog3}/></div>
                    <div className="four_dialog4"><img src={FourDialog4}/></div>
                    <div className="four_dialog5"><img src={FourDialog5}/></div>
                    <div className="four_dialog6"><img src={FourDialog6}/></div>
                    <div className="four_dialog7"><img src={FourDialog7}/></div>

                    <div className="box_text"></div>
                </div>
                <input type='button' className="i_btn btn04" defaultValue={'发布弹幕'} disabled=""></input>
            </div>
        )
    }
}


export default Four;