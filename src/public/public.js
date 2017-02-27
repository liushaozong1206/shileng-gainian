var ajaxGet = function (url, fn) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data) {
            fn.call(window, data);
        }
    })
};


var proxyUrl = 'http://192.168.84.43:3000',
    lineUrl = 'http://img.linekong.com';


export {ajaxGet, proxyUrl, lineUrl}