
$(function(){
	

//头部
$(".heads").load("head.html","传送数据",function(){
	$("#head").css("z-index",9999);
})




//		获取pid

	function GetQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    var r = decodeURI(window.location.search.substr(1)).match(reg);
	    if (r != null)return unescape(r[2]);
	    return null;
	}
	//获取商品id
	var pid=GetQueryString("pid"); 
	console.log(pid)
	$.ajax({
		type:"get",
		url:"json/homeepage.json",
		async:true,
		
	}).done(function(res){
//		console.log(res)
		var bran = "";
		var tail = "";
		var tails = "";
		$.each(res, function(index,ele) {
//		console.log(ele.pid)
			if(ele.pid==pid){
				bran=res[index];
				console.log(bran)
				//位置
				$(".brand").html(bran.Details_place.brand)
				$(".Ladys_Coat").html(bran.Details_place.Ladys_Coat)
				//缩略图
				$.each(bran.brandimg,function(index,ele){
					tail+='<img src="img/details/'+ele+'"/>'
					$(".imgbox").html(tail)
					$(".ddimg").html(tail)
				})
				//详图
				$(".detail img").attr("src",'img/details/'+bran.brandimg[0])
				//放大镜图片
				$(".enlarge img").attr("src",'img/details/'+bran.brandimg[0])
				//码数
				$.each(bran.yardage,function(index,ele){
//					console.log(ele)
					tails+='<div class="circle">'+ele+'</div>'
					$(".yardage").html(tails)
				});
//				新季
				$(".SianZan").html(bran.details.SianZan);
				$(".weave").html(bran.details.introduce);
				$(".pricel").html(bran.details.present);
				$(".pricer").html(bran.details.past);
				$(".subtract").html(bran.details.subtract);
				$(".colous").html(bran.details.colous);
				$(".coloui").css("background",bran.details.colour);
				$(".remain").html(bran.details.remain);
				$(".conceal").eq(1).html(bran.details.describe1+'<br />'+bran.details.describe2+'<br />'+bran.details.describe3);
				$(".conceal").eq(3).html(bran.details.brand);
				
			}
			
		});
	//判断 localStorage 中是否有datas[];
	
				

		$(".join").click(function(){
			
			if(localStorage.getItem("datas")){
				var pidbox = localStorage.getItem("datas").split(",");
				console.log(pidbox);
				var flag = true;
				$.each(pidbox, function(index,ele) {
					console.log(ele)
					console.log(pid)
					if(ele==pid){
						flag = false;
					}
					console.log(flag)
					
				})
				if(flag==true){
					pidbox.push(pid)
				}
				localStorage.setItem("datas",pidbox)
			}else{
				localStorage.setItem("datas",pid)
				console.log(pid);
			}
		
		window.location.href = "shopping.html?pid="+bran.pid;
	
		})
	
	
	
	
	
	
	//判断cookie中是否有datas[];
//		var cookie=cookieObj.get("datas");
//		console.log(cookie);
//		if(cookie==undefined){
//			cookieObj.set({name:"datas",value:"[]"});
//		}
//		
//		var cookiearr=JSON.parse(cookieObj.get("datas"));
//	$(".join").click(function(){
//		
//		//添加到购物车  把商品信息抽离出来
//		localStorage.pid =pid;
//		console.log(bran.pid)
//		var obj={};
//		
//		obj.pid=bran.pid;
//		obj.imgsrc=bran.brandimg[0];
//		obj.pname=bran.Details_place.brand;
//		obj.pdes=bran.Details_place.Ladys_Coat;
//		obj.colous=bran.details.colous;
//		obj.present =bran.details.present
//		obj.past =bran.details.past
//		obj.pcount=1;
//		
//		console.log(obj);
//		if(checkCookie(obj.pid)){
//			//更新pcount
//			updateCookie(obj.pid,1)
//		}else{
//			
//			//把商品信息的json添加到cookie
//			var carr=getAll();
//			carr.push(obj);
//			var cookiestr=JSON.stringify(carr);
//			cookieObj.set({name:"datas",value:cookiestr})
//		}
//		window.location.href = "shopping.html"
//	})
		
		
		
		//缩略图
//商品图片轮播部分
//点击上
$(".topimg").click(function(){
	$(".imgbox:not(:animated)").animate({top:-100},50,function(){
	$(".imgbox").find("img").eq(0).appendTo($(".imgbox"));
	$(".imgbox").css("top",0);
	})
})

//点击下
$(".buttonimg").click(function(){
	$(".imgbox").children().last().prependTo($(".imgbox"));
	$(".imgbox").css("top",100);
	$(".imgbox:not(:animated)").stop(true).animate({top:0},800)
})

//点击切换大图
$(".imgbox img").click(function(){
	$(".detail img:eq(0)").attr("src",$(this).attr("src"));
	$(".enlarge img").attr("src",$(this).attr("src"));
})

//放大镜
//鼠标移入,鼠标移出,鼠标移动
$(".detail").mouseenter(function(){
	$(".minbox").show();
	$(".enlarge").show();
}).mouseleave(function(){
	$(".minbox").hide();
	$(".enlarge").hide();
}).mousemove(function(e){
	var e = e||window.event;
	var x=e.pageX-$(this).offset().left-$(".minbox").width()/2;
	var y=e.pageY-$(this).offset().top-$(".minbox").height()/2;
	x<0?x=0:x;
	y<0?y=0:y;
	var max = $(this).width() - $(".minbox").width();
	var may = $(this).height() - $(".minbox").height();
	x>max?x=max:x;
	y>may?y=may:y;
	$(".minbox").css("left",x);
	$(".minbox").css("top",y);
	
	var bilix = $(".enlarge img").width()/$(".detail").width();
	var biliy = $(".enlarge img").height()/$(".detail").height();
	
	$(".enlarge").scrollLeft(x*bilix);
	$(".enlarge").scrollTop(y*bilix);
	
})

//点击码数
	$(".yardage .circle").click(function(){
		console.log($(this).index())
		$(this).css("color","black").siblings().css("color","#b8b0b0")
		$(this).css("border", "1px solid rgba(0,0,0,1)").siblings().css("border", "1px solid rgba(0,0,0,0)");
//		$(this).fadeTo(1000,0)
	})
	
	
//点击尺码对照
$(".contrast").click(function(){
	$(".maxeh").show();
})
$(".maxeh_box").click(function(){
	$(".maxeh").hide();
})

//点击加入愿望清单右按扭
var x = 0;
$(".wish:eq(0)").click(function(){
	if(x%2==0){
		$(".wish:eq(1)").show()
	}else{
		$(".wish:eq(1)").hide()
	}
	x++;
})

//点击购买须知
$(".notice").click(function(){
		var c=$(this).index(".notice");
		console.log(c)
		$(".conceal").eq(c).slideToggle(500).siblings(".conceal").slideUp(500);
		$(".notice .direction img").eq(c).toggleClass('imgs')
})
//点击图文详情

$(".image").click(function(){
	var index = $(this).index(".image");
	console.log(index)
	$(".hide_details").eq(index).slideToggle(500);
	
	$(".image .direction img").eq(index).toggleClass('imgs');
	
})






$(".Guess_rigth").click(function(){
	$(".imgboxs:not(:animated)").animate({left:274},50,function(){
		//第一张图片添加到最后
		$(".imgboxs").find(".Guess_img").eq(0).appendTo($(".imgboxs"));
		
		$(".imgboxs").css("left",0);
		
	})	
})

//点击右按扭
//$(".Guess_rigth").click(function(){
//
//	$(".imgbox:not(:animated)").animate({left:-274},800,function(){
//		$(".imgbox").children(".Guess_img").eq(0).appendTo($(".imgbox"));
//		$(".imgbox").css("left",0);
//		
//	});
//
//
//
//})
//点击左按扭
$(".Guess_left").click(function(){
	$(".imgboxs").children().last().prependTo($(".imgboxs"));
	$(".imgboxs").css("left",-274);
	$(".imgbox:not(:animated)").animate({left:0},800);
	
	
	
})
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
















//尾部
$("#stern").load("offal.html","传送数据",function(){
	//尾部加载完成做什么
	
})







})