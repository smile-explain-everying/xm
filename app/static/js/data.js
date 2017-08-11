$(function(){

// 获取li宽
var w = $('.banner li').width();

  // 初始化显示

  var dataY = $('#banner ul').find('li:last-child').find('.year').text()
  var dataM = $('.banner li:last-child').find('.month').text().substr(0,2)
  var month = $('.banner li:last-child').find('.month').text()
  $('#banner ul').find('li:last-child').addClass('show');
  change(dataY,dataM,month)

// 添加左键头点击事件

$('.prev').on('click',function(){
  if($('#banner ul').find('li:first-child').is('.show')){
     return false;
  }
  if($('.banner li').is('.show')){
    var n = $('.banner li.show').index()-1;
    $('.banner li.show').animate('right','w');
    $('.banner li.show').removeClass('show');
    $('.banner li').eq(n).addClass('show');
    var dataY1 = $('.banner li').eq(n).find('.year').text();
    var dataM1 =$('.banner li').eq(n).find('.month').text().substr(0,2);
    var month = $('.banner li').eq(n).find('.month').text();
    change(dataY1,dataM1,month)
  }

})

// 添加右键头点击事件

$('.next').on('click',function(){
  if($('#banner ul').find('li:last-child').is('.show')){
     return false;
  }
  if($('.banner li').is('.show')){
    var n = $('.banner li.show').index()+1;
    $('.banner li.show').animate('left','w');
    $('.banner li.show').removeClass('show');
    $('.banner li').eq(n).addClass('show');
    var dataY1 = $('.banner li').eq(n).find('.year').text();
    var dataM1 =$('.banner li').eq(n).find('.month').text().substr(0,2);
    var month = $('.banner li').eq(n).find('.month').text();
    change(dataY1,dataM1,month)
  }

})

// 2016添加点击事件

$('.year[data-year="2016"]:first-child').on('click',function(){
   $('.banner li:first-child').addClass('show').siblings().removeClass('show')
    var dataY1 = $('.banner li:first-child').find('.year').text();
    var dataM1 = $('.banner li:first-child').find('.month').text().substr(0,2);
    var month = $('.banner li:first-child').find('.month').text();
    change(dataY1,dataM1,month);
});

// 2017添加点击事件

$('.year[data-year="2017"]:eq(0)').on('click',function(){
  var n = $('.year[data-year="2017"]:eq(0)').index() - 1;
  $('.banner li').eq(n).addClass('show').siblings().removeClass('show')
   var dataY =$('.banner li').eq(n).find('.year').text();
   var dataM = $('.banner li').eq(n).find('.month').text().substr(0,2);
   var month = $('.banner li').eq(n).find('.month').text();
   change(dataY1,dataM1,month);
});
// 封装函数

  function change(dataY,dataM,month){
    $('.data li').each(function(i){
    if($('.data li').eq(i).data('year')==dataY && $(this).children('span').data('month')==dataM){
      $(this).children('span').children('span').addClass('active')
      $(this).children('span').children().parents('li').siblings().find('.i').removeClass('active')
      $(this).prevAll().addClass('active');
      $(this).removeClass('active');
      $(this).nextAll().removeClass('active');
      $(this).children('span').children('strong').text(month);
      $(this).children('span').children('strong').parents('li').siblings().find('strong').text("")
    }
    if(dataM == 01){
      $('.data').find('strong').text('')
    }
  });
  }
})
