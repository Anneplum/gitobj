var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var screenHeight = window.innerHeight || document.documentElement || document.body.clientHeight;
wrap.style.height = screenHeight + "px";
var obj = main.getElementsByTagName("div");

for (var i = 0; i < obj.length; i ++) {
    obj[i].style.height = screenHeight + "px";
}

if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
    document.addEventListener("DOMMouseScroll",scrollFun,false);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel",scrollFun,false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel",scrollFun);
} else {
    document.onmousewheel = scrollFun;
}

var startTime = 0,
    endTime = 0,
    now = 0;

function scrollFun(event) {
    startTime = new Date().getTime();
    var delta = event.detail || (-event.wheelDelta);

    if ((endTime - startTime) < -1000) {
        if (delta > 0 && parseInt(main.offsetTop) > -(screenHeight*3)) {
            now = now - screenHeight;
            toPage(now);
        }
        if (delta<0 && parseInt(main.offsetTop) < 0) {
            now = now + screenHeight;
            toPage(now);
        }
        endTime = new Date().getTime();
    } else {
        event.preventDefault();
    }
}

//function toPage(now) {
//    setTimeout("main.style.top = now + 'px' ",500);
//}
