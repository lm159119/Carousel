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

<<<<<<< HEAD
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
=======
    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if (newLeft > -600) {
            list.style.left = -3000 + 'px';
        }
        if (newLeft < -3000) {
            list.style.left = -600 + 'px';
        }
    }

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 1000)
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        buttons[index - 1].className = "on";
    }

    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 5
        }
        buttonsShow();
        animate(600);
    };

    next.onclick = function() {
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-600);
        buttonsShow();
    };

    for (var i = 0; i < buttons.length; i++) {
        (function(i) {
            buttons[i].onclick = function() {

      
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 600 * (index - clickIndex); 
                animate(offset);
                index = clickIndex; 
                buttonsShow();
            }
        })(i)
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();

}
>>>>>>> 00bdcd965ab2de5c3b121efa4839b0c8979c2ef9
