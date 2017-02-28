import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import One from './components/one/one';
import Two from './components/two/two';
import Three from './components/three/three';
import Four from './components/four/four';


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

        $('.inp').focus(function () {
            var check1 = $(this).val();
            if (check1 == this.defaultValue) {
                $(this).val("");
            }else{
                $(this).val(check1)
            }
        });
        $('.inp').blur(function () {
            var check1 = $(this).val();
            if (check1 == '') {
                $(this).val(this.defaultValue);
            }else{
                $(this).val(check1)
            }
        });

        function inpText(obj){
            var val=$(obj).val().length;
            if(val>0){
                $(obj).val($(obj).val().substring(0,16));
            }
        }
        $('.inp').keyup(function(){
            inpText($('.inp'))
        })

        var listData = 0;

        $('.tab_btn li').on('click',function(){
            var index = $(this).index();
            listData = index;
            $(this).addClass('on').siblings().removeClass('on');
            $('.tab_left .pubDiv').eq(index).addClass('active').siblings().removeClass('active');

        });

        $('.i_btn').on('click',function(){

            var textVal  = $.trim($(".inp").val().trim());

            if(textVal.length == 0){
                $(".inp").val('发布弹幕(16字以内哦！)')
                alert('发布内容不能为空')
            }else {alert(1)
                var oP = $('.box_text').eq(listData).children('p').length;
                var top = parseInt(Math.random() * 380 + 1);
                var left = parseInt(Math.random() * 600 + 1);
                $('.box_text').eq(listData).append('<p>' + textVal + '</p>');
                $('.box_text').eq(listData).children('p').eq(oP).css({left: left, top: top});
            }
            /*$('.inp').val('发布弹幕(16字以内哦！)');*/
        });

        $('.i_on').on('click',function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $('.inp').css('display','none');
                $('.i_btn').css('display','none');
            }else{
                $(this).addClass('on');
                $('.inp').css('display','block');
                $('.i_btn').css('display','block');
            }
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
                                <div className="yuyue"><p></p></div>
                                <div className="tab_con">
                                    <div className="tab_left">
                                        <div className="left_one pubDiv active"><One/></div>
                                        <div className="left_two pubDiv"><Two/></div>
                                        <div className="left_three pubDiv"><Three/></div>
                                        <div className="left_four pubDiv "><Four/></div>
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
                                    <input type="text" className="inp" defaultValue={'发布弹幕(16字以内哦！)'}/>
                                    <p className="i_btn"  data="0">发布弹幕</p>
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

