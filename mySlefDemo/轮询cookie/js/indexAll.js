//获取cookie项的cookie值
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        isConsoleLog('start:' + c_start);
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return document.cookie.substring(c_start, c_end);
        }
    }
    return "";
}
//设置cookie
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expiredays * 1000 * 60 * 48);
    // document.cookie = c_name + "=" + value + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
    document.cookie = c_name + "=" + value + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
}
