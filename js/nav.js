/**
 * Created by Administrator on 2017/8/21.
 */
$(function () {
   
    //音乐暂停、播放
    var oMusic=document.getElementById('music');
    $('.music_btn').click(function(){
        if($(this).hasClass('play')){
            $(this).removeClass("play");
            $(this).find("img").attr("src","images/yuan_btn_close_1.png");
            oMusic.pause();
        }else{
            $(this).addClass('play');
            $(this).find("img").attr("src","images/yuan_btn_1.png");
            oMusic.play();
        }
    });
    //系统通知
    //轮播
    var bodyWidth=$("body").width();
    var noticeWidth=bodyWidth*0.94-155;
    $("#marquee5").width(noticeWidth);
    /*$('#marquee5').liMarquee({
     scrollamount:15,
     direction: 'up'
     });*/
    var $marquee=$('#marquee5').kxbdSuperMarquee({
        isEqual:false,
        distance:20,
        time:2,
        direction:'up'
    });
    //暂停、滚动
    $(".notice_btn").click(function () {
        if($(this).hasClass("play")){
            $(".notice").fadeOut("fast");
            $(this).find("img").attr("src","images/yuan_btn_close_2.png");
            $(this).removeClass("play")
        }else {
            $(".notice").fadeIn("fast");
            $(this).addClass('play');
            $(this).find("img").attr("src","images/yuan_btn_2.png");
        }
    });
    
})