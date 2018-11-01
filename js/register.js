







var reg = /^[1]\d{10}$/g;
//账号输入框
$(".number").blur(function(){
	if($('.number').val()==""){
		$(".inpud_box span").eq(0).html("手机号不能为空").show().css("color","red");
	}else if(reg.test($('.number').val())){
//		$(".inpud_box span").hide();
		$(".inpud_box span").eq(0).html("正确").show().css("color","blue");
	}else{
		$(".inpud_box span").eq(0).html("手机号码有误").show().css("color","red");
		
	}
})
//验证码框
$(".codem").blur(function(){
	console.log($('.codem').val())
	if($('.codem').val()==""){
		$(".inpud_box .ghgh").eq(0).html("验证码不能为空").show().css("color","red");
	}else if($('.codem').val()=="kwf2"){
		$(".inpud_box .ghgh").hide();
		$(".inpud_box .ghgh").eq(0).html("正确").show().css("color","blue");
	}else{
		$(".inpud_box .ghgh").eq(0).html("验证码有误").show().css("color","red");
		
	}
})

//短信验证码
$(".ification").blur(function(){
	console.log($('.ification').val())
	if($('.ification').val()==""){
		$(".inpud_box .sasa").html("验证码不能为空").show().css("color","red");
	}else if($('.ification').val()=="123"){
		$(".inpud_box .sasa").hide();
		$(".inpud_box .sasa").html("正确").show().css("color","blue");
	}else{
		$(".inpud_box .sasa").html("验证码有误").show().css("color","red");
		
	}
})
//密码输入框
var reg2 =/^\w{8,10}$/g;

$(".werw").blur(function(){
	console.log($('.werw').val())
	
	 if(reg2.test($('.werw').val())){
		
		$(".inpud_box span").eq(1).html("正确").show().css("color","blue");
	}else{
		$(".inpud_box span").eq(1).html("密码不正确").show().css("color","red");
	}
	
})


//我已阅读并同意

 $("#conts").click(function(){	
	var ss = $("input[type='checkbox']").is(':checked');//***********************************************
	 console.log(ss)
	 	if(ss&&$(".inpud_box span").eq(0).html()=="正确"&&$(".inpud_box span").eq(1).html()=="正确"&&$(".inpud_box .ghgh").html()=="正确"&&$(".inpud_box .sasa").html()=="正确"){
			$(".button").css("background","blue")
		}else{
			$(".button").css("background","#e5e5e5")
		}
 })


//注册
$(".button").click(function(){
	var ss = $("input[type='checkbox']").is(':checked');
	console.log(ss)
	if(ss&&$(".inpud_box span").eq(0).html()=="正确"&&$(".inpud_box span").eq(1).html()=="正确"&&$(".inpud_box .ghgh").html()=="正确"&&$(".inpud_box .sasa").html()=="正确"){
	var accounts = $(".number").val();
	var passwoss = $(".werw").val();
	localStorage.setItem("number",accounts)
	localStorage.setItem("sswod",passwoss)
	alert("注册成功")
	window.location.href = "Thelogin.html";
	}
	
	
	
	
})


