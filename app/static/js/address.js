 $(document).ready(function(){

	// 地址修改与删除
	$(".edit").click(function(){
		// 取值变量
		var consignee = $(this).parents("tr").children().eq(0).text();
		var province = $(this).parents("tr").children().eq(1).find(".province").text();
		var province_city = $(this).parents("tr").children().eq(1).find(".province_city").text();
		var city_address = $(this).parents("tr").children().eq(2).text();
		var Postcodes = $(this).parents("tr").children().eq(3).text();
		var tel_text = $(this).parents("tr").children().eq(4).find(".tel_text").text();
		var phone_text = $(this).parents("tr").children().eq(4).find(".phone_text").text();
        // 赋值
		$(".Postcodes_ipt").val(Postcodes);
		$('.province option:selected').text(province);
		$('.province_city option:selected').text(province_city);
		$(".consignee_ipt").val(consignee);
		$(".phone_ipt").val(phone_text);
		$(".city_address_text").val(city_address);
		$(".tel_ipt").val(tel_text);
	});
    
    // 删除行
	$(".delete").click(function(){

        $(this).parents("tr").remove();
		
	});


	// 地址展开与添加
	$(".show_more").click(function(){

		if($(".address_list").hasClass("address_scroll")){
			
			$(this).find("b").removeClass("show_move");
			$(".address_list").removeClass("address_scroll");
		}else{
			$(this).find("b").addClass("show_move");
		    $(".address_list").addClass("address_scroll");
		}
        
	});


     // 点击模态窗口
	$(".new_address").click(function(){
        $(this).addClass("changebg");
        $("#fixed_modal").show();
        $(".modal_content").show(350);
	});
	$("#fixed_modal").click(function(){
		$(this).hide();
		$(".modal_content").hide();
		$(".new_address").removeClass("changebg");
	})


	// 消耗积分、获得积分、过期积分tab切换
    $(".point_detailed table").hide().eq(0).show();
    $(".point_detailed p a").click(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');

        $(".point_detailed table").hide().eq($(this).index()).show();

    });
});