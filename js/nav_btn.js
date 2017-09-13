/**
 * Created by Administrator on 2017/9/12.
 */
$(function () {
    //导航按钮
    $(".nav_btn").click(function () {
        $(".nav").fadeIn("fast");
        $(".layer").show();
    });
    $(".layer").click(function () {
        $(".nav").fadeOut("fast");
        $(".tishi").fadeOut("fast");
        $(".layer").hide();
    });
    //退出登录
    $(".tuichu").click(function () {
        $(".login_out").fadeIn("fast");
        $(".nav").fadeOut("fast");
        $(".over_layer").show();
    });
    //取消
    $(".quxiao").click(function () {
        $(".login_out").fadeOut("fast");
        $(".over_layer").hide();
    });
    //确定
    $(".queding").click(function () {
        $(".login_out").fadeOut("fast");
        $(".over_layer").hide();
    })
})