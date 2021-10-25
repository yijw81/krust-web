function toggleMobileMenu() {
    var x = document.getElementById("menu-mobile");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function closeMobileMenu() {
    var x = document.getElementById("menu-mobile");
    x.style.display = "none";
}

function changeVisibility(_list, _str) {
    for (var i = 0; i < _list.length; i++) {
        var x = _list.item(i);
        x.style.display = _str;
    }
}

function changeLang(_langfrom, _langto) {
    var from = document.getElementsByClassName(_langfrom);
    var to = document.getElementsByClassName(_langto);
    changeVisibility(to, "block");
    changeVisibility(from, "none");
}

function changeStyle(_element, _selected) {
    if (_selected) {
        _element.style.fontFamily = "Kakaosmallbold";
        _element.style.color = "white";
    } else {
        _element.style.fontFamily = "Kakaosmalllight";
        _element.style.color = "#898989";
    }
}

function changeLangToEn() {
    changeLang("kr", "en");
    changeStyle(document.getElementById("lang-kr"), false);
    changeStyle(document.getElementById("lang-kr-mobile"), false);
    changeStyle(document.getElementById("lang-en"), true);
    changeStyle(document.getElementById("lang-en-mobile"), true);
}

function changeLangToKr() {
    changeLang("en", "kr");
    changeStyle(document.getElementById("lang-kr"), true);
    changeStyle(document.getElementById("lang-kr-mobile"), true);
    changeStyle(document.getElementById("lang-en"), false);
    changeStyle(document.getElementById("lang-en-mobile"), false);
}