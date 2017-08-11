$(document).ready(function(){
	
    //个人注册、企业注册切换
    $("#tabUserSel ").click(function() {
       $(this).addClass("active").siblings().removeClass("active");
        $("#userType").val("0");
        $(".register_p button").html("个人注册");
        $("#orgOK").hide();
    });
    $("#tabUserOrgSel ").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("#userType").val("1");
        $(".register_p button").html("企业注册");
        $("#orgOK").show();
    });

    //input获得焦点底框变色
     $(".content_wrap p input").focus(function(){
         $(this).parent("p").css("border-bottom","1px solid #ff9c00");
     });
      $(".content_wrap p input").blur(function(){
         $(this).parent("p").css("border-bottom","1px solid #999");
     });
     
    //公司展示墙
    var $a=$(".buttons a");
    var $s=$(".buttons span");
    var cArr=["p7","p6","p5","p4","p3","p2","p1"];
    var index=0;
    //上一张
    function previmg(){
      cArr.unshift(cArr[6]);
      // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
      cArr.pop();
      // pop() 方法用于删除数组的最后一个元素并返回删除的元素。

      //i是元素的索引，从0开始
      //e为当前处理的元素
      //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
      $(".list li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
      })
      index--;
      if (index<0) {
        index=6;
      }
    }
    //下一张
    function nextimg(){
      cArr.push(cArr[0]);
        // push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
      cArr.shift();
      // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
      $(".list li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
      })
      index++;
      if (index>6) {
        index=0;
      }
    }
    //点击class为p2的元素触发上一张照片的函数
    $(document).on("click",".p2",function(){
      // $(".p5").hide(200);
      previmg();
      return false;//返回一个false值，让a标签不跳转
    });
    //点击class为p4的元素触发下一张照片的函数
    $(document).on("click",".p4",function(){
      nextimg();
      return false;
    }); 

});

// jQuery.fn.shake = function (intShakes, intDistance, intDuration) {
//       this.each(function () {
//           var jqNode = $(this);
//           jqNode.css({ position: 'relative' });
//           for (var x = 1; x <= intShakes; x++) {
//               jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
//              .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
//               .animate({ left: 0 }, (((intDuration / intShakes) / 4)));
//           }
//      });
//      return this;
// }