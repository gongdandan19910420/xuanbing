/**
 * Created by Administrator on 2017/8/17.
 */
$(function () {
    var timer = document.getElementById("timer"); //时间显示对象
    var hour, minute, second; //时，分 ,钞
    var t; //setTimeout方法
   //初始化显示和按钮
    timer.innerHTML = "00:00:00";
    hour = minute = second = 0;
    //clearTimeout(t);
    startit();
    //开始计时
    function startit(){
        t = setTimeout(startit, 1000); //每隔1秒（1000毫秒）递归调用一次
        second++;
        if(second>=60){ //判断秒是否到60, 是则进位
            second = 0;
            minute++;
        }
        if(minute>=60){ //判断分是否到60, 是则进位
            minute = 0;
            hour++;
        }
        timer.innerHTML = j(hour) + ":" + j(minute) + ":" + j(second) ; //更新显示
    }
    //显示数字填补，即当显示的值为0-9时，在前面填补0;如：1:0:4, 则填补成为 01:00:04
    function j(arg){
        return arg>=10 ? arg : "0" + arg;
    }
    
    //选择事件
    $(".choose").on("click","li",function () {
        $(".choose li").find(".duihao").hide();
        $(this).find(".duihao").show();
    });
    //关口说明按钮
    $(".shuoming").click(function () {
        $(".dati_shuoming").fadeIn("fast");
        document.title="关口说明";
    });
    $(".know_btn").click(function () {
        $(".dati_shuoming").fadeOut("fast");
        document.title="闯关答题";
    });
    //下一题
    var num=0;
    $(".next_ti").click(function () {
        $.ajax({
            url:"ti.json",
            data:"",
            timeout: 3000, //超时时间设置，单位毫秒
            type:"get",
            dataType:"json",
            context:this,
            success: function(data){
                //console.log(data);
                var arr=["一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五"];
                num++;
                if(num==5){
                    $(".next_ti").attr("href","success.html")
                }
                $(".ti_txt").html(data.txt);
                $(".tihao").html(arr[num]);
            },
            error:function(data,status){
                if(status=='timeout'){

                }
            }
        });
    })

    //砸金蛋
    $(".wei_open").click(function () {
        $(this).fadeOut("fast");
        $(".yi_open").fadeIn("fast");
        $(".overlayer").show();
    });
    $(".yi_open").click(function () {
        $(this).fadeOut("fast");
        $(".overlayer").hide();
    });
    $(".overlayer").click(function () {
        if($(".yi_open").is(":visible")){
            $(".overlayer").hide();
            $(".yi_open").fadeOut("fast");
        }
    })
});