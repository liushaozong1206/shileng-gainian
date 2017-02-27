/**
 * 作者：周双龙
 * 时间：2016/12/1
 * 描述：header-footer公共头部与尾部
 */

$(function () {
    headerDom('#header');
    footerDom('#footer');
});

//footer
function footerDom(ele) {
    var langGet = cookieGet(),
        lang;

    if (langGet === 'hans') {
        lang = hans.footer;
    } else if (langGet === 'hant') {
        lang = hant.footer;
    }

    var footerStr = '<div class="footer">' +
        '<div class="footer-con clearfix">' +
        '<a class="footer-logo"></a>' +
        '<div class="footer-info">' +
        '<p><a target="_blank" href="http://www.linekong.com/about?type=introduce">' + lang.lkintroduce + '</a><span>|</span>' +
        '<a target="_blank" href="http://www.linekong.com/games">' + lang.lkgames + '</a><span>|</span>' +
        '<a href="http://www.linekong.com/join">' + lang.lkjoin + '</a><span>|</span>' +
        '<a target="_blank" href="http://www.linekong.com/investor/aboutUs.html">' + lang.contactus + '</a><span>|</span>' +
        '<a target="_blank" href="http://www.linekong.com/article-239-1.shtml">' + lang.falv + '</a><span>|</span>' +
        '<a id="setHome">设为首页</a><span>|</span>' +
        '<a id="addFavorite">收藏本站</a></p>' +
        '<p>' + lang.copyright + '</p>' +
        '<p>' + lang.copyrighttwo + '</p>' +
        '</div></div></div>';

    $(ele).html(footerStr);

    footer();
}
function footer() {
    $('#setHome').click(function () {
        setHome($(this)[0], 'http://www.linekong.com');
    });
    $('#addFavorite').click(function () {
        addFavorite('蓝港在线官网', 'http://www.linekong.com');
    });
}


//header
function headerDom(ele) {

    var langGet = cookieGet(),
        lang;

    if (langGet === 'hans') {
        lang = hans.header;
    } else if (langGet === 'hant') {
        lang = hant.header;
    }

    var headerStr = '<div class="header">' +
        '<div class="header-con">' +
        '<a class="linekong-logo"></a>' +
        '<ul class="first-nav">' +
        '<li><a class="first-title active" href="/">' + lang.home + '</a></li>' +
        '<li><a class="first-title" href="/linekongnews">' + lang.news + '</a>' +
        '<div class="second-nav"><div class="second-nav-con">' +
        '<a class="dynamic" href="/linekongnews">' + lang.linekongnews + '</a>' +
        '<a class="new-media" href="/medianews">' + lang.medianews + '</a>' +
        '</div></div></li>' +
        '<li><a class="first-title" href="/">' + lang.business + '</a>' +
        '<div class="second-nav"><div class="second-nav-con">' +
        '<a class="linekong-game" href="http://www.8864.com/">' + lang.linekonggames + '</a>' +
        '<a class="linekong-technology" href="http://www.fuzegame.com/#home">' + lang.linekongtechnology + '</a>' +
        '<a class="linekong-film" title="敬请期待">' + lang.linekongfilm + '</a>' +
        '</div></div></li>' +
        '<li><a class="first-title" href="/games">' + lang.product + '</a>' +
        '<div class="second-nav"><div class="second-nav-con">' +
        '<a class="mobile-game" href="/games?type=mobile">' + lang.mobilegame + '</a>' +
        '<a class="web-game" href="/games?type=pc">' + lang.pcgame + '</a>' +
        '<a class="pc-game" href="/games?type=client">' + lang.clientgame + '</a>' +
        '<a class="bbs-game" href="http://www.8864.com" target="_blank">' + lang.www + '</a>' +
        '<a class="korea" href="http://www.linekongkorea.co.kr" target="_blank">' + lang.kr + '</em></a>' +
        '<a class="fuze-game" href="http://www.fuzegame.com/index.html#game" target="_blank">' + lang.fuze + '</a>' +
        '</div></div></li>' +
        '<li><a class="first-title" href="/about">' + lang.about + '</a>' +
        '<div class="second-nav"><div class="second-nav-con">' +
        '<a class="company-intro" href="/about?type=introduce">' + lang.introduce + '</a>' +
        '<a class="company-culture" href="/about?type=culture">' + lang.culture + '</a>' +
        '<a class="linelong-event" href="/about?type=event">' + lang.event + '</a>' +
        '<a class="all-honor" href="/about?type=credit">' + lang.credit + '</a>' +
        '<a class="orca" href="/about?type=orca">' + lang.orca + '</a>' +
        '</div></div></li>' +
        '<li><a class="first-title" href="/investor">' + lang.touzi + '</a>' +
        '<div class="second-nav"><div class="second-nav-con">' +
        '<a class="govern-company" href="/investor">' + lang.management + '</a>' +
        '<a class="info-show" href="/information">' + lang.information + '</a>' +
        '<a class="investor-relation" href="/network">' + lang.network + '</a>' +
        '<a class="contact-us" href="/aboutUs">' + lang.aboutus + '</a>' +
        '</div></div></li>' +
        '<li><a class="first-title" href="/business">' + lang.hezuo + '</a></li>' +
        '<li><a class="first-title" href="http://join.linekong.com/">' + lang.join + '</a>' +
        '<div class="second-nav"><div class="second-nav-con">' +
        '<a class="join-us" href="http://join.linekong.com/">' + lang.join + '</a>' +
        '<a class="society-recruit" href="http://join.linekong.com/">' + lang.recruit + '</a>' +
        '<a class="school-recruit" href="http://join.linekong.com/">' + lang.campus + '</a>' +
        '<a class="know-lingkong" href="http://join.linekong.com/">' + lang.joinus + '</a>' +
        '<a class="contact-us" href="http://join.linekong.com/">' + lang.aboutus + '</a>' +
        '</div></div></li></ul>' +
        '<div class="other-language">' +
        '<span><em>' + lang.lang + '</em></span>' +
        '<div class="lang-menu">' +
        '<a data-lang="hans">简</a>' +
        '<a data-lang="hant">繁</a>' +
        '<a href="http://linekongkorea.co.kr/">韩</a>' +
        '</div></div></div></div>';

    $(ele).html(headerStr);

    header();
}
function header() {

    //蓝港影业-敬请期待
    $('a.linekong-film').click(function () {
        alert('敬请期待!');
    });

    //二级菜单
    $('ul.first-nav > li').hover(function () {
        $(this).children('div.second-nav').show();
    }, function () {
        $(this).children('div.second-nav').hide();
    });

    //语言切换
    var $lang = $('div.other-language'),
        $langDrop = $lang.children('div.lang-menu');
    $lang.click(function () {
        $langDrop.toggle();
    });
    $langDrop.children('a').click(function () {
        var $this = $(this),
            lang = $this.data('lang');
        if (lang === 'hans') {
            $.cookie('lang', 'zh', {path: '/'});
        } else if (lang === 'hant') {
            $.cookie('lang', 'tw', {path: '/'});
        }

        $lang.find('em').text($(this).text());
        window.location.reload();
    });
}

//获取cookie
function cookieGet() {
    var lang = $.cookie('lang');
    if (lang === 'zh' || lang === undefined) {
        return 'hans';
    } else if (lang === 'tw') {
        return 'hant';
    }
}

//设为首页
function setHome(obj, url) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        } else {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
        }
    }
}

//收藏本站
function addFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

var hans = {
    "header": {
        "home": "首页",
        "news": "新闻中心",
        "linekongnews": "蓝港动态",
        "medianews": "蓝港新媒体",
        "business": "集团业务",
        "linekonggames": "蓝港游戏",
        "linekongtechnology": "蓝港科技",
        "linekongfilm": "蓝港影业",
        "product": "游戏产品",
        "mobilegame": "手机游戏",
        "pcgame": "网页游戏",
        "clientgame": "客户端游戏",
        "www": "游戏社区",
        "kr": "韩国分部",
        "fuze": "FUZE游戏",
        "about": "关于蓝港",
        "introduce": "公司介紹",
        "culture": "企业文化",
        "event": "蓝港大事记",
        "calendar": "产品发布日历",
        "credit": "所获荣誉",
        "orca": "ORCA",
        "touzi": "投资者关系",
        "management": "公司治理",
        "team": "管理团队",
        "directorate": "董事会",
        "board": "董事委员会",
        "system": "公司制度",
        "agreement": "协议安排",
        "information": "信息披露",
        "network": "投资者日志",
        "aboutus": "联系我们",
        "hezuo": "商务合作",
        "krm": "韩国分部",
        "join": "加入我们",
        "recruit": "社会招聘",
        "joinus": "人才招聘",
        "campus": "校园招聘",
        "lang": "简"
    },
    "footer": {
        "lkintroduce": "蓝港简介",
        "lkgames": "旗下游戏",
        "lkjoin": "招贤纳才",
        "contactus": "联系我们",
        "falv": "法律声明",
        "sethome": "设为首页",
        "favorite": "收藏本站",
        "copyright": "Copyright &copy; 2007-2014 linekong.com, All Rights Reserved",
        "copyrighttwo": "<a href='www.linekong.com'>蓝港互动有限公司</a> 京网文【2010】0361-001号 京ICP证070501号 京公安网备110105002132 11010502025330"
    }
};

var hant = {
    "header": {
        "home": "首页",
        "news": "新聞中心",
        "linekongnews": "藍港動態",
        "medianews": "藍港新媒體",
        "business": "集團業務",
        "linekonggames": "藍港遊戲",
        "linekongtechnology": "藍港科技",
        "linekongfilm": "藍港影業",
        "product": "遊戲產品",
        "mobilegame": "手機遊戲",
        "pcgame": "網頁遊戲",
        "clientgame": "客戶端遊戲",
        "www": "遊戲社區",
        "kr": "韓國分部",
        "fuze": "FUZE遊戲",
        "about": "關於藍港",
        "introduce": "公司介紹",
        "culture": "企業文化",
        "event": "藍港大事記",
        "calendar": "產品發布日歷",
        "credit": "所獲榮譽",
        "orca": "ORCA",
        "touzi": "投資者關系",
        "management": "公司治理",
        "team": "管理團隊",
        "directorate": "董事會",
        "board": "董事委員會",
        "system": "公司制度",
        "agreement": "協議安排",
        "information": "信息披露",
        "network": "投資者日志",
        "aboutus": "聯系我們",
        "hezuo": "商務合作",
        "krm": "韓國分部",
        "join": "加入我們",
        "recruit": "社會招聘",
        "joinus": "人才招聘",
        "campus": "校園招聘",
        "lang": "繁"
    },
    "footer": {
        "lkintroduce": "藍港簡介",
        "lkgames": "旗下遊戲",
        "lkjoin": "招賢納才",
        "contactus": "聯系我們",
        "falv": "法律聲明",
        "sethome": "設為首頁",
        "favorite": "收藏本站",
        "copyright": "Copyright &copy; 2007-2014 linekong.com, All Rights Reserved",
        "copyrighttwo": "<a href='www.linekong.com'>藍港互動有限公司</a> 京網文【2010】0361-001號 京ICP證070501號 京公安網備110105002132 11010502025330"
    }
};