$(document).ready(function(){
	$("#Head").load("head.html","传送数据",function(){
	})
	$("#Foot").load("foot.html","传送数据",function(){
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
		//发送详情页面数据请求   发送pid给后台 后台返回商品的所有信息
		console.log(pid)
		$.ajax({
			type:"get",
			url:"01.json",
			async:true,
			dataType:"json"
		}).done(function(res){
			var  nowdata=null;
			console.log(res);
			//循环找到对应商品数据
			$.each(res, function(index,ele) {
				if(ele.data.projectCode==pid){
					nowdata=res[index].data;
				}
			});
		
		console.log(nowdata);
		//选择颜色
		var colorstr=''
		$.each(nowdata.color, function(index,ele) {
			colorstr+='<li>'+ele.colorAlias+'</li>'
		});
		$(".color").html(colorstr)
		$(".color li").first().addClass("lion")
		picmove(0)
		$(".color li").click(function(){
			picmove($(this).index())
		})
		function picmove(snum){
			//轮播图片
			var imgstr=''
			$.each(nowdata.color[snum].picurls, function(index,ele) {
				imgstr+='<img src="img3/'+ele.split("/")[5]+'"/>'
			});
			console.log(imgstr)
			$(".pro_lis").html(imgstr)
			$(".pro_lis img").click(function(){
				$(".small img").attr("src",$(this).attr("src"))
				$(".big img").attr("src",$(this).attr("src"))
			})
			//下面的大图
			$(".ccc").html(imgstr)
			
			//大小图
			var smallstr=''
			smallstr='<img src="img3/'+nowdata.color[snum].picurls[0].split("/")[5]+'"/>'
					+'<div class="mark"></div>'
			$(".small").html(smallstr)
			var bigstr=''
			bigstr='<img src="img3/'+nowdata.color[snum].picurls[0].split("/")[5]+'"/>'
			$(".big").html(bigstr)
			//详情**********************************
			
			//商品名字h1
			var h1str=''
			h1str=nowdata.goodsName
			$(".namestr").html(h1str)
			$(".pro_info_right h1").html(h1str)
			//产品编号h2
			var h2str=''
			h2str=nowdata.color[snum].colorCode
			$(".pro_info_right h2 span:eq(1)").html(h2str)
			//商品价格h3
			var h3str=''
			h3str=nowdata.color[snum].originalPrice
			$(".pro_info_right h3 strong").html(h3str)
			//选择尺码
			var sizestr=''
			$.each(nowdata.color[snum].sizes, function(index,ele) {
				sizestr+='<li><litle>'+ele.sizeAlias+'</litle><p>'+ele.sellStock+'件</p></li>'
			});
			$(".size ul").html(sizestr)
			//产品信息
			var asastr=''
			asastr=nowdata.goodsInfo
			$(".asa div").html(asastr)
			//点击尺寸
			$(".size span").html("请选择尺码")
			$(".size ul li").click(function(){
				$(".size span").html($(this).find("litle").html());
				$(".num span").html($(this).find("p").html())
			})
		}
		
		
	//点击事件***********************	
		
	$(".top").click(function(){
		$(".pro_lis").animate({top:-178},800,function(){
			$(".pro_lis").find("img").eq(0).appendTo($(".pro_lis"))
			$(".pro_lis").css("top",0)
		})
	})
	$(".bot").click(function(){
		$(".pro_lis").children().last().prependTo($(".pro_lis"));
		$(".pro_lis").css("top",-173);
		$(".pro_lis:not(:animated)").stop(true).animate({top:0},800);
	})
	$(".pro_info_left").hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(move,2000)
	})
	var timer=setInterval(move,2000)
	function move(){
		$(".pro_lis").animate({top:-178},800,function(){
			$(".pro_lis").find("img").eq(0).appendTo($(".pro_lis"))
			$(".pro_lis").css("top",0)
		})
	}
			//放大镜
		$(".small").mouseenter(function(){
				$(".mark").show();
				$(".big").show();	
		}).mouseleave(function(){
			$(".mark").hide();
			$(".big").hide();
			
		}).mousemove(function(e){
//			e.pageX--e.pageY--鼠标相对于整个页面的距离

			//遮罩x，y
			var mx=e.pageX-$(this).offset().left-$(".mark").width()/2;
			var my=e.pageY-$(this).offset().top-$(".mark").height()/2;
			
			//限制边界
			mx<0?mx=0:mx;
			my<0?my=0:my;
			var maxX=$(".small").width()-$(".mark").width();
			var maxY=$(".small").height()-$(".mark").height();
			mx>maxX?mx=maxX:mx;
			my>maxY?my=maxY:my;
			
			$(".mark").css("left",mx);
			$(".mark").css("top",my);
			//算出比例
			var bilix=$(".big img").width()/$(this).width();
			var biliy=$(".big img").height()/$(this).height();
		
			$(".big").scrollLeft(bilix*mx);
			$(".big").scrollTop(biliy*my);
		
		})
		//切换颜色
		var num=0
		$(".color li").click(function(){
			$(this).css({"border-bottom":" 2.5px solid red","border-top":" 2.5px solid red"})
			$(this).siblings().css({"border-bottom":"none","border-top":"none"})
		})
		//切换尺寸
		$(".size").click(function(){
			if(num%2==0){
				$(this).find("ul").show()
			}else{
				$(this).find("ul").hide()
			}
			num++
		})
		$(".btn button").eq(0).click(function(){
			if(localStorage.getItem("datas")){
				var newarr=localStorage.getItem("datas").split(",")
				console.log(newarr)
				var flag=true
				$.each(newarr, function(index,ele) {
					console.log(ele)
					if(ele==pid){
						flag=false
					}
					console.log(flag)
				})
				if(flag==true){
						newarr.push(pid)
					}
				localStorage.setItem("datas",newarr)
			}else{
				localStorage.setItem("datas",pid)
			}
			
			window.location.href="shopping_car.html";
		})
	});
})
