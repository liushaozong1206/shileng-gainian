import React, {Component} from "react";
import ReactDOM from "react-dom";
import One from "./components/one/one";
import Two from "./components/two/two";
import Three from "./components/three/three";
import Four from "./components/four/four";
import TwoLogo from "./public/img/logo.png";
import two_Timg1 from "./public/img/w1.png";
import two_Timg2 from "./public/img/w2.png";
import two_Timg3 from "./public/img/w3.png";
import two_Timg4 from "./public/img/w4.png";
import wx_pop from "./public/img/ewm.jpg";
import "./public/public.scss";
import { proxyUrl} from './public/public';

class App extends Component {
    constructor() {
        super();
        this.state = {
            Aa: 'aaaaaaaaaaa'
        };

    }

    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            mousewheelControl: true,
            slidesOffsetAfter: $(".bottom_m").height() - 1
        });


        /* $('.inp').focus(function () {

         if (!this.defaultValue) {
         $(this).val()
         }else{
         $(this).val("");

         }
         });
         $('.inp').blur(function () {
         var check1 = $(this).val();
         if ($.trim(check1.trim()) == this.defaultValue) {
         $(this).val(this.defaultValue);
         }else{
         $(this).val(check1)
         }
         });*/


        //text输入字数判断
        function inpText(obj) {
            var val = $(obj).val().length;
            if (val > 0) {
                $(obj).val($(obj).val().substring(0, 16));
            }
        }

        $('.inp').keyup(function () {
            inpText($('.inp'))
        })

        var listData = 0;


        var textNum1 = 6,
            textNum2 = 6,
            textNum3 = 6,
            textNum4 = 6,
            timer1,
            timer2,
            timer3,
            timer4;

        //右侧切换
        $('.tab_btn li').on('click', function () {
            var index = $(this).index();
            listData = index;
            $(this).addClass('on').siblings().removeClass('on');
            $('.tab_left .pubDiv').eq(index).addClass('active').siblings().removeClass('active');

        });


        //点击提交按钮
        let temp = [],
            storage = window.localStorage.arrCount;
        if (storage) {
            let arrTemp = storage.split('-');
            for (let i in arrTemp) {
                temp.push(arrTemp[i].split(','))
            }
        } else {
            temp = [[], [], [], []];
        }

        var arrCount = temp;
        $.each(temp, function (i, v) {
            $.each(v, function (ii, vv) {
                var top = parseInt(Math.random() * 380 + 1) + 'px';
                var left = parseInt(Math.random() * 500 + 1) + 'px';
                $('.box_text').eq(i).append('<p style="position:absolute;left: ' + left + '; top: ' + top + '">' + vv + '</p>');
            })

        })

        $('.i_btn').on('click', function () {

            var check1 = $(".inp").val();
            var textVal = $.trim(check1.trim());

            if (textVal.length == 0) {
                alert('发布内容不能为空');
                $('.inp').attr('placeholder', '发布弹幕(16字以内哦！)').val('');
                return;
            } else {
                var oP = $('.box_text').eq(listData).children('p').length;
                var top = parseInt(Math.random() * 380 + 1);
                var left = parseInt(Math.random() * 500 + 1);
                $('.box_text').eq(listData).append('<p>' + textVal + '</p>');
                $('.box_text').eq(listData).children('p').eq(oP).css({left: left, top: top});

                arrCount[listData].push(textVal);
                window.localStorage.arrCount = arrCount.join('-');
                window.localStorage.arrCount.split('-')[listData].split(',');

                $.ajax({
                     type:'get',
                     url:proxyUrl+'/insertbarrage',
                     data:'page='+(listData+1)+'&type=pc&content='+textVal,
                     dataType : "json",
                     success: function(data){

                         return false;
                     },
                     error:function(){}
                 });
            }

            if (listData == 0) {
                timeFn($('.btn01'), textNum1, timer1, 'btn01');
            }
            if (listData == 1) {
                timeFn($('.btn02'), textNum2, timer2, 'btn02');
            }
            if (listData == 2) {
                timeFn($('.btn03'), textNum3, timer3, 'btn03');
            }
            if (listData == 3) {
                timeFn($('.btn04'), textNum4, timer4, 'btn04');
            }
            //倒计时
            function timeFn(aClass, textNum, timer, xClass) {
                if ($(".i_btn").hasClass(xClass)) {
                    aClass.val(textNum + 's后再提交').attr('disabled', true);
                    timer = setInterval(function () {
                        textNum--;
                        aClass.val(textNum + 's后再发布');
                        if (textNum == 0) {
                            clearInterval(timer);
                            aClass.attr('disabled', false).val('发布弹幕');
                            textNum = 60
                        }
                    }, 1000)
                }
            };

            $('.inp').attr('placeholder', '发布弹幕(16字以内哦！)').val('');
        });

        //开关大幕
        $('.i_on').on('click', function () {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $('.inp').css('display', 'none');
                $('.i_btn').css('display', 'none');
                $('.box_text').css('display', 'none');
            } else {
                $(this).addClass('on');
                $('.inp').css('display', 'block');
                $('.i_btn').css('display', 'block');
                $('.box_text').css('display', 'block');
            }
        });

        //弹框
        $('.yuyue p').on('click', function () {

            $('.shade').css('display', 'block');
            $('.bomb').css('display', 'block');

        });
        $('.b_close').on('click', function () {
            $('.shade').css('display', 'none');
            $('.bomb').css('display', 'none');
            $('.success').css('display', 'none');
        });

        //提交预约
        $('.b_btn').on('click', function () {
            vailPhone()
        })

        /*手机号验证*/
        function vailPhone() {
            var phone = $(".b_input input").val();
            var flag = false;
            var message = "";
            var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (phone == '') {
                message = "手机号码不能为空！";
            } else if (phone.length != 11) {
                message = "请输入有效的手机号码！";
            } else if (!myreg.test(phone)) {
                message = "请输入有效的手机号码！";
            } else {
                flag = true;
            }
            if (!flag) {
                //提示错误效果
                var onOff = true;
                $('.b_text').html(message);
                setTimeout(function () {
                    $('.b_text').html('');
                }, 2000)

            } else {
                $.ajax({
                    type: 'get',
                    url:proxyUrl+'/inserttel',
                    data:'tel='+phone,
                    dataType: "json",
                    success: function (data) {
                        console.log(data)
                        if(data.code==100){
                            alert(data.data)
                        }else{
                            //提示正确效果
                            $('.bomb').css('display', 'none').children('input').val('');
                            $('.success').css('display', 'block')
                        }
                        $(".b_input input").attr('placeholder','请输入手机号').val('' +
                            '');
                        return false;
                    },
                    error: function () {
                    }
                });

            }
            return flag;
        }




        //分享
        fnHover($('.wx a'), $('.wx_pop'));
        function fnHover(aClass, bClass) {

            var timerHover = 0;
            aClass.mousemove(function () {
                clearTimeout(timerHover);
                bClass.css('display', 'block');
            });
            aClass.mouseout(function () {
                timerHover = setTimeout(function () {
                    bClass.css('display', 'none');
                }, 500)
            });
            bClass.mousemove(function () {
                clearTimeout(timerHover);
            })
            bClass.mouseout(function () {
                timerHover = setTimeout(function () {
                    bClass.css('display', 'none');
                }, 500)
            });
        }

    }

    render() {
        return (

            <div className="swiper-container">
                <div className="shade"></div>
                <div className="bomb">
                    <div className="b_close"></div>
                    <div className="b_input">
                        <input type="text" placeholder="请输入手机号" name=""/>
                        <p className="b_btn"></p>
                        <p className="b_text"></p>
                    </div>
                </div>
                <div className="success">
                    <div className="b_close"></div>
                </div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide1">Slide 1</div>
                    <div className="swiper-slide slide2">
                        <div className="two_slide_box">
                            <div className="right_t">
                                <div className="wx"><a href="javascript:;"></a></div>
                                <div className="wx_pop"><img src={wx_pop}/><p>扫描关注二维码</p></div>
                                <div className="sina"><a href="##"></a></div>
                                <div className="qq"><a href="javascript:;"></a></div>
                                <div className="bbs"><a href="##"></a></div>
                            </div>
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
                                <input type="text" className="inp" placeholder="发布弹幕(16字以内哦！)" defaultValue={''}/>
                                {/*<input type='button' className="i_btn" defaultValue={'发布弹幕'} disabled=""></input>*/}
                            </div>
                        </div>
                        <div className="bottom_m"></div>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
;

ReactDOM.render(<App/>, document.getElementById('root'));

