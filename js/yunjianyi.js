/**
 * Created by Administrator on 2017/8/17.
 */
$(function () {
    $(".top_btn").on("click","a",function () {
        $(this).addClass("active").siblings("a").removeClass("active");
        var index=$(this).index();
        $(".con").hide();
        $(".con").eq(index).show();
    })
})