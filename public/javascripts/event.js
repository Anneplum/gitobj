$(document).ready(function(){
    $("input#username,input#pass").focus(function(){
        $(this).css("backgroundColor","red");
    });

    $("input#username,input#pass").blur(function(){
        $(this).css("backgroundColor","#ffffff");
    });
    $("#focus-submit").focus(function(){
       if ($("input#username").val()===''){
           alert("请输入账号：");
           $("input#username").focus()
;       }

    });
    //event();
    //event1();
    //toggle_event();

    $("#mouse-img-one").mouseover(function(){
        $("#mouse-img-one").attr("src","../images/10749511.jpg");
    });
    $("#mouse-img-one").mouseout(function(){
        $("#mouse-img-one").attr("src","../images/11910204.jpg");
    });


    $("#img-toggle").toggle(
        function(){
            $("#img-toggle").html("1");
        },
        function(){
            $("#img-toggle").html("2");
        },
        function(){
            $("#img-toggle").html("3");}
    );


    $("#mouse").hover(function(){

        $("#mouse").attr("src","../images/10749511.jpg");
    },
        function(){

            $("#mouse").attr("src","../images/11910204.jpg");
        }
    );



    if($(window).scroll()){
        $(window).scroll(function(){
            alert($(this).scrollTop());
        })
    }

});


function event(){
    $("button#ctr1_img").bind("click",function(){
        $("p#img").slideToggle();
    });
}

function event1(){
    $("#img").click(function(){
        var  imghtml = '<img src="../images/10749511.jpg" >';
        $(this).html(imghtml);
    });
}


