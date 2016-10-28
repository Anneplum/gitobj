
function do_attr() {
    $("#div-1>p").attr(
        {style:"border:1px solid #f00",alt:"设置style属性"}
    );
    var oneTg = $("#div-1>#one").attr("title");
   $("#div-1>#one").html(oneTg+"的title属性被取得，并显示");

    $("#div-1>#two").attr("title","修改tow的style属性");

    $("#div-1>#three").attr("title",function(){
        var  title = this.id;
        return title;
    }).each(function(){
        $(this).html("title属性与下一个id属性值"+this.title);
    });
}

function do_removeAttr(){
    $("#div-1>#one").removeAttr("style");
}

function do_addClass() {
    $("#pa").addClass("box color");
}

function do_removeClass() {
    $("#pa").removeClass("box color");
}


function do_toggleClass(){
    $("#div-5 p#one,#div-5 p#two").click(function(){
        $(this).toggleClass("redbox");
    });
    var cnt = 1;
    $("#div-5 p#three").click(function(){
        $(this).toggleClass("redbox",cnt++ % 3 ===0);
    });
}


function  do_html(){
    var val=$("#div-6 p#one").html();
    $("#div-6 p#two").html(val);
}

function  do_text(){
    var val=$("#div-7 p#one").text();
    $("#div-7 p#two").text(val);
}

function  do_val(){
    var val=$("#div-8 :text#iput").val();
    $("#div-8 :text#iput2").val(val);
}