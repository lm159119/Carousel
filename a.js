$(function () {   
    var $oLi = $("ol>li");    
    var imgW = $("#imgs > li").width();  
  
    $("#box").on("mouseenter", function () {  
        $("#arr").css("display", "block");  
    });   
    $("#box").on("mouseleave", function () {  
        $("#arr").css("display", "none");  
    });  
    $($oLi[0]).addClass("current");   
    $("#left").click(function () {  
        var num;  
        $oLi.each(function () {   
            if($(this).hasClass("current")) {  
                num = $(this).index() - 1;   
                if(num < 0) {  
                    num = 4;  
                }  
                $("#imgs").animate({  
                    left: -num * imgW + "px"  
                }, 300);  
            }  
        });    
        $($oLi[num]).addClass("current").siblings().removeClass("current");  
    });   
    $("#right").click(function () {   
        var num;  
        $oLi.each(function () {  
            if($(this).hasClass("current")) {  
                num = $(this).index() + 1;  
                if(num > 5) {  
                    num = 1;  
                }  
                $("#imgs").animate({  
                    left: -num * imgW + "px"  
                }, 300);  
            }  
        });  
        $($oLi[num]).addClass("current").siblings().removeClass("current");  
    });  
 
    $oLi.on("click", function () {   
        $(this).addClass("current").siblings().removeClass("current");   
        var num = $(this).index();  
        $("#imgs").animate({  
            left: -num * imgW + "px"  
        }, 300);  
    });  

    //循环播放  
    var timeId = setInterval(function () {  
        var num;  
        $oLi.each(function () {  
            if($(this).hasClass("current")) {   
                num = $(this).index() + 1;    
                $("#imgs").animate({  
                    left: -num * imgW + "px"  
                }, 300);  
                if(num== $oLi.length) {  
                    $("#imgs").animate({  
                        left: "0px"  
                    }, 0);  
                    num = 0;  
                }  
            }  
        });  
        $($oLi[num]).addClass("current").siblings().removeClass("current");  
    }, 3000);  
})  