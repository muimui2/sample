
$(function(){
    // 导航左侧栏js效果 start
    $(".menu-content").hide();
    $(".ad-menu li").hover(function(){
        $(".menu-content").show();
        var index = $(this).index(".ad-menu li");

        $(this).addClass("menulihover").siblings().removeClass("menulihover");
        $(this).addClass("menuliselected").siblings().removeClass("menuliselected");
        $($(".item-list")[index]).show().siblings().hide();

    });

    $("#ad-nav").mouseleave(function(){
        $(".menu-content").hide();
        $(".item-list").hide();
    })
    // 导航左侧栏js效果  end

});