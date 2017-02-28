import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import One from './components/one/one';
import Two from './components/two/two'


import TwoLogo from './public/img/logo.png'
import two_Timg1 from './public/img/w1.png'
import two_Timg2 from './public/img/w2.png'
import two_Timg3 from './public/img/w3.png'
import two_Timg4 from './public/img/w4.png'

import './public/public.scss';


class App extends Component {
    constructor(){
        super();
        this.state={
            Aa:'aaaaaaaaaaa'
        };

    }
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            mousewheelControl: true,
            //slidesOffsetAfter: $("#btn").height()-1
        });
    }
    render(){
        return(

             <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide slide2">
                            <div className="two_slide_box">
                                <div className="tow_logo"><img src={TwoLogo}/></div>
                                <div className="two_Timg">
                                    <p className="p1"><img src={two_Timg1}/></p>
                                    <p className="p2"><img src={two_Timg2}/></p>
                                    <p className="p3"><img src={two_Timg3}/></p>
                                    <p className="p4"><img src={two_Timg4}/></p>
                                </div>
                                <div className="yuyue"></div>
                                <div className="tab_con">
                                    <div className="tab_left">
                                        <div className="left_one "><One/></div>
                                        <div className="left_two active"><Two/></div>
                                        <div className="left_three"></div>
                                        <div className="left_four"></div>
                                    </div>
                                    <div className="tab_btn">
                                        <ul>
                                            <li className="list_btn1 on"></li>
                                            <li className="list_btn2"></li>
                                            <li className="list_btn3"></li>
                                            <li className="list_btn4"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="i_bot">
                                    <div className="i_on on"></div>
                                    <input type="text" className="inp" defaultValue={'发布弹幕……（16字以内哦！）'}/>
                                    <p className="i_btn">发布弹幕</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
            </div>
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));

