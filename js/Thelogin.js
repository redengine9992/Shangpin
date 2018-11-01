//点击扫码登录,账户登录
$("#regi_left ul li").click(function(){
	var index = $(this).index();
	$(this).css("color","#000000").siblings("#regi_left ul li").css("color","#6C757D")
	$(".number").eq(index).show().siblings(".number").hide();
})

//鼠标经过二维码
$(".dlm").hover(function(){
	$(".QR_code").css("margin-left","-10px")
	$(".QR_coder").show(100);
},function(){
	$(".QR_coder").hide();
	$(".QR_code").css("margin-left","")

})

//登录
$(".button").click(function(){	
	var pndc = localStorage.getItem("number");
	var sswodss = localStorage.getItem("sswod");
 	if($(".ssword").val()==sswodss&&$(".numberd").val()==pndc){
		alert("登录成功")
		window.location.href = "homepage.html"
	}else{
		alert("登录失败")
	}
 })


















