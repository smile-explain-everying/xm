$(function(){
	var timer = null, timer1 = null ,
		len = $('#section1 .item').length,
		item = $('#section1 .item'),
		num = 0;
	function run(cur_i){
		init(cur_i);
		item.each(function(i, ele){item.eq(i).css('z-index',i >= cur_i ? len-i+cur_i : cur_i-i);});
	};
	function init(i){		
		item.eq(i).stop().animate({'opacity':1}, 1000).siblings('.item').stop().animate({'opacity':0}, 1000);	
	};	
	timer1 = setInterval(function(){
		$('.down_arrow a img').animate({'opacity':0},1000,function(){
			$('.down_arrow a img').css('opacity','1');
		});
	},1000);
	$('.down_arrow a').on('click',function(){
			$.fn.fullpage.moveSectionDown();
		});
 	$('.mybest').fullpage({
 		loopHorizontal:true,
 		navigation:true,
 		/*slidesNavigation:false,*/
 		controlArrows:false,
		onLeave:function(index){
			if(index==1){
				clearInterval(timer);
				timer = null;
				$('.section').eq(0).removeClass('active');
				$('#section1 .item').attr('style','');
 				$('.s1_txt1,.s1_txt2,.s1_txt3,.s1_txt4').stop().css('opacity','0');
			}
			if(index == 2){
				$('.section').eq(1).removeClass('active');
				//$('.s2_txt1,.s2_txt2').removeClass('opacit-show').addClass('opacit-stop');
				//$('#section2 .bg').removeClass('now');
				$('.s2_txt1,.s2_txt2').stop().css('opacity','0');
			}
			if(index == 3){
				$('.section').eq(2).removeClass('active');
				$('.s3_txt1,.s3_txt2').stop().css('opacity','0');
				//$('#section3 .bg').removeClass('now');
			}
			if(index == 4){
				$('.section').eq(3).removeClass('active');
				$('.s4_txt1,.s4_txt2').stop().css('opacity','0');
				//$('#section4 .bg').removeClass('now');
			}
			if(index == 5){
				$('.down_arrow a img').show();
				timer1 = setInterval(function(){
					$('.down_arrow a img').animate({'opacity':0},1000,function(){
						$('.down_arrow a img').css('opacity','1');
					});
				},1000);
			}
		},
		afterLoad:function(anchorLink,index){
			if(index==1){
				$('.section .bg').removeClass('now');
				$('#section1').addClass('active');
	 			//$('#section1 .item').eq(0).addClass('now');
	 			//$('.s1_txt1,.s1_txt2,.s1_txt3,.s1_txt4').removeClass('opacit-stop').addClass('opacit-show');
	 			$('.s1_txt1').stop().delay(500).animate({opacity:'1'},1000,function(){
	 				$('.s1_txt2').animate({opacity:'1'},1000,function(){
	 					$('.s1_txt3').animate({opacity:'1'},1000,function(){
	 						$('.s1_txt4').animate({opacity:'1'},1000);
	 					});
	 				});
	 			});
	 			timer = setInterval(function(){
					num++;
					if( num >= len ){ num = 0;};
					run(num);
				},8000);
				
			}
			if(index == 2){
				$('#section2').addClass('active');
				$('.section .bg').removeClass('now');
				$('.s2_txt1').stop().animate({opacity:'1'},500,function(){
	 				$('.s2_txt2').animate({opacity:'1'},500);
	 			});
				$('#section2 .bg').addClass('now');
				
			}
			if(index == 3){
				$('#section3').addClass('active');
				$('.section .bg').removeClass('now');
				$('.s3_txt1').stop().animate({opacity:'1'},500,function(){
	 				$('.s3_txt2').animate({opacity:'1'},500);
	 			});
				$('#section3 .bg').addClass('now');
				
			}
			if(index == 4){
				$('#section4').addClass('active');
				$('.section .bg').removeClass('now');
				$('.s4_txt1').stop().animate({opacity:'1'},500,function(){
	 				$('.s4_txt2').animate({opacity:'1'},500);
	 			});
				$('#section4 .bg').addClass('now');
				
			}
			if(index == 5){
				$('.down_arrow a img').hide();
				clearInterval(timer1);
				//$('.down_arrow a img').css('opacity','0');
			}
		}
	});

});