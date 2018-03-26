function scroll(){
    $(".content ul").animate({"margin-left":"-110px"},function(){
     $(".content ul li:eq(0)").appendTo($(".content ul"))
     $(".content ul").css({"margin-left":0})
    })
    }
    setInterval(scroll,3000)