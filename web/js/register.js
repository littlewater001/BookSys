function check(theform) {
    if (theform.username.value == "") {
        alert("用户名不能为空！");
        theform.username.focus();
        return false;
    }
    if (theform.userpwd.value != theform.userpwd2.value) {
        alert("两次密码不一致，请重新输入！");
        theform.userpwd2.value == "";
        theform.userpwd2.focus();
        return false;
    }
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if (!reg.test(theform.mail.value)) {
        alert("请填写正确的邮箱格式!");
        theform.mail.value == "";
        theform.mail.focus();
        return false;
    }
}

function usernameFocus() {
    var usernameId = document.getElementById("usernameId");
    usernameId.className = "import_prompt";
    usernameId.innerHTML = "1、由字母、数字、下划线、点、减号组成<br/>2、只能以数字、字母开头或结尾，且长度为4-18";
}

function usernameBlur() {
    var username = document.getElementById("username");
    var usernameId = document.getElementById("usernameId");
    var reg = /^[0-9a-zA-Z][0-9a-zA-Z_.-]{2,16}[0-9a-zA-Z]$/;
    if (username.value == "") {
        usernameId.className = "error_prompt";
        usernameId.innerHTML = "用户名不能为空，请输入用户名";
        return false;
    }
    if (!reg.test(username.value)) {
        usernameId.className = "error_prompt";
        usernameId.innerHTML = "1、由字母、数字、下划线、点、减号组成<br/>2、只能以数字、字母开头或结尾，且长度为4-18";
        return false;
    }
    usernameId.className = "ok_prompt";
    usernameId.innerHTML = "用户名输入正确";
    return true;
}

var cityList = new Array();
cityList['北京市'] = ['朝阳区', '东城区', '西城区', '海淀区', '宣武区', '丰台区', '怀柔', '延庆', '房山'];
cityList['江苏省'] = ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市'];
cityList['其他'] = ['其他'];

function changeCity() {
    var province = document.form1.selProvince;
    var city = document.form1.selCity;
    city.options.length = 0;
    city.add(new Option("--请选择城市--","city"), null);
    for (var i in cityList) {
        if (i == province.value) {
            for (var j in cityList[i]) {
                city.add(new Option(cityList[i][j], cityList[i][j]), null);
            }
        }
    }

    function allCity() {
        var province = document.form1.selProvince;
        for (var i in cityList) {
            province.add(new Option(i, i), null);
        }
        changeCity();
    }

    window.onload = allCity;
}