
function do_css(){
    $("#div-8 p").each(function(){
        $(this).append("style属性中设置的颜色是["+$(this).css("color")+"]。");
    });
}


function do_css2(){
    $("#div-8 p#one2").css("color","red");
    $("#div-8 p#two2").css({color:"white",backgroundColor:"black"});
}

function do_offset(){
    $("#div-3 p#one3").offset();
    $("#div-3 p#two3").html("top = "+offset.top+"px<br>left = "+offset.left+"px");
}

function do_height(){
    $("#div-4 p#one4").append("高度="+$("div#div-4").height()+"px");
    $("#div-4 p#two4").append("高度="+$(document).height()+"px");
    $("#div-4 p#three4").append("高度="+$(window).height()+"px");
}

function do_width(){
    $("#div-5 p#one5").append("高度="+$("div#div-4").width()+"px");
    $("#div-5 p#two5").append("高度="+$(document).width()+"px");
    $("#div-5 p#three5").append("高度="+$(window).width()+"px");
}
