


//鼠标上下滚动
$(document).ready(function(){
	var p=0;t=0;
	$(window).scroll(function(e){
		p = $(this).scrollTop();
		if(t<=p){
//			console.log("向下滚动")
			$("#head").slideUp()
		}else{
//			console.log("向上滚动")
			$("#head").slideDown().css({"position":"fixed","top":"0"});
		}
		t=p;
	})
})
		


//鼠标经过女士，男士
	$("#head_left>ul").mouseenter(function(){
		var index = $(this).index();
		$(this).css("color","black").siblings().css("color","#AAAAAA");	
		$("#head_left>ul>li").hide();
		$(this).children("li").show();
		$(".head_next").hide();
		$(".head_next").eq(index).show();
	})


//二级tob切换

	$(".head_next .head_nextkh li").hover(function(){
		var index = $(this).index(".head_next>.head_nextkh li");
		console.log(index);
		$(this).css("font-weight","bold").siblings().css("font-weight","");
		$("#tobdbox>.rob_box").eq(index).show().siblings().hide();
		
	},function(){
		$("#tobdbox .rob_box").hide();
		
	})

	$(".rob_box").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
		$(".head_next .head_nextkh li").css("font-weight","")
	})













