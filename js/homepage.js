//头部
$(".heads").load("head.html","传送数据",function(){
		//头部加载完成做什么
		$("#head").css("z-index",9999);
})


//侧边栏
$(".wxx").hover(function(){
	var index = $(this).index(".wxx");
	
	$(".sidebar .app").eq(index).show().siblings(".sidebar .app").hide();
},function(){
	$(".sidebar .app").hide();
})

$(".app").hover(function(){
	var index = $(this).index(".app");
	console.log(index)
	$(".app").eq(index).show();
},function(){
	$(this).hide();
})
//置顶
//var flag = true;
$(document).scroll(function(){
	var top = $(this).scrollTop();
	if(top==0){
		clearInterval(pgjf);
	}
})
$(".stick").click(function(){
	pgjf = setInterval(pg,20);
})
function pg(){
	window.scrollBy(0,-200);
}
//var arr = ["客服咨询","微信资讯","APP下载","回到顶部"]
//$(".sidebar ul li").hover(function(){
//	var index =($(this).index())
//	console.log(arr[index])
//	$(".sidebar ul li span").html(arr[$(this).index()])
//	
//})

//ajax()  加载
$.ajax({
	type:"get",
	url:"json/homeepage.json",
	dataType:"json"
}).done(function(res){
	var figure = "";
//	console.log(res)
//	主页大图轮播
	$.each(res[0].Figure_by, function(index,ele) {
//	console.log(res[0].Figure_by)
		figure+='<img src="img/'+ele+'"/>'
	});
	$(".slideshow").html(figure);	
//	二分之一
	$.each(res[0].collective, function(index,ele) {
//		console.log($(".list>div"))
		$(".list>div").eq(index).find("img").attr("src",ele.collimg);
		$(".list>div").eq(index).find("div").eq(1).html(ele.claaname1);
		$(".list>div").eq(index).find("div").eq(2).html(ele.claaname2);
	});
	
//	一比二
var dd = "";
   $.each(res[0].twotoonedd, function(index,ele) {
//  	console.log($(".listss .picture_dd"))
		
    	dd ='<div class="dd" pid="'+ele.pid+'">'
			+'<img src="'+ele.collimg+'"/>'
			+'</div>'
			+'<div class="namest">'+ele.claaname1+'</div>'
			+'<div class="namest">'+ele.claaname2+'</div>'
    	$(".listss .picture_dd").eq(index).html(dd)
    	$(".picture_dd").click(function(){
    		var indexs = $(this).index(".picture_dd");
    		
    		window.location.href = "content.html?pid="+$(".dd").eq(indexs).attr("pid");
    	})
   })
var ih = "";
	$.each(res[0].twotooneih, function(index,ele) {
    	ih ='<div class="ih">'
			+'<img src="'+ele.collimg+'"/>'
			+'</div>'
			+'<div class="namest">'+ele.claaname1+'</div>'
			+'<div class="namest">'+ele.claaname2+'</div>'
    	$(".listss .picture_ih").eq(index).html(ih)
    })
//	$.each(res[0].twotoone, function(index,ele) {
//		console.log($(".listss>div"))
//		$(".listss>div").eq(index).find("img").attr("src",ele.collimg);
//		$(".listss>div").eq(index).find("div").eq(1).html(ele.claaname1);
//		$(".listss>div").eq(index).find("div").eq(2).html(ele.claaname2);
//	});
	
//	商品1比1比1
var thr = "";
$.each(res[0].twotwotwo, function(index,ele) {
//	console.log(index);
	thr='<div class="three">'
		+'<img src="'+ele.collimg+'"/>'
		+'</div>'
		+'<div class="namest">'+ele.claaname1+'</div>'
		+'<div class="namest">'+ele.claaname2+'</div>'
		$(".triple_thr").eq(index).html(thr)
})
	
	
	
//	猜你喜欢图片
var sin = "";
$.each(res[1].single,function(index,ele){
//	console.log(ele);
	sin+='<div class="map">'
			+'<img src="img/content3/'+ele.brandimg1+'"/>'
			+'<div class="namest">'+ele.brand+'</div>'
			+'<div class="namest red">'+ele.present+'</div>'
		+'</div>'
	$("#long_frame").html(sin);
})



	
	//主页大图轮播
var imgs = document.querySelectorAll('.slideshow>img');
var lis = document.querySelectorAll('.ul li');

	var sign = 0;
	for(var i=0;i<lis.length;i++){
		lis[i].signs = i;
		lis[i].onclick = function(){
			sign = this.signs;
			igbw();

		}
	}
//	函数
	function igbw(){
		for(var i=0;i<imgs.length;i++){
			lis[i].style.background = "blue";
			imgs[i].style.display = "none"
			
		}if(sign>imgs.length-1){
			sign=0;
		}if(sign<0){
			sign=imgs.length-2;
		}
			lis[sign].style.background = "red";
			imgs[sign].style.display = "block";
	}

//	定时器
	var pg = setInterval(function(){
		sign++;
		igbw();
	},2000)

	var left = document.getElementsByClassName('left')[0];
	var right = document.getElementsByClassName('right')[0];
//	向前翻
	left.onclick = function(){
		sign--;
		igbw();
	}
//	向后翻
	right.onclick = function(){
		sign++;
		igbw();
	}

	var divs = document.getElementsByClassName('homepage')[0];
//	鼠标经过
	divs.onmouseenter = function(){
		clearInterval(pg);
	}
	
//	鼠标移除	
	divs.onmouseleave = function(){
		pg = setInterval(function(){
		sign++;
		igbw();
	},2000)
	}
	
})
	//猜你喜欢
	//右
	var a = 0;
$(".direc").click(function(){
		console.log("点击右")
		a=a-1230;
		if(a>-4921){
			$("#long_frame:not(:animated)").animate({left:a},1000,function(){			
				$("#long_frame").css("left",a);
			})	
		}else{
			alert("图片已到尽头")
			a=-4920;
		}
})
		//左
	$(".lection").click(function(){
		console.log("点击左")
		a=a+1230;
		if(a<1230){
			$("#long_frame:not(:animated)").animate({left:a},1000,function(){			
				$("#long_frame").css("left",a);
			})	
		}else{
			alert("图片已到尽头")
			a=0;
		}
	})
	




//尾部
$("#stern").load("offal.html","传送数据",function(){
	//尾部加载完成做什么
	
})
