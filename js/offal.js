//移入微信微博
$(".wx img").hover(function(){
	var index = $(this).index();
	$(".wb img").eq(index).show();
},function(){
	$(".wb img").hide();
})
//移入微信微博二维码
$(".wb img").hover(function(){
	var index = $(this).index();
	$(".wb img").eq(index).show();
},function(){
	$(".wb img").hide();
})