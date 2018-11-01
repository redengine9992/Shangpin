

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
		dataType:"json"
	}).done(function(res){
//		console.log(res)
		var twot = "";
		var stwt = "";
		//循环找到对应商品数据
		$.each(res, function(index,ele) {
//		console.log(res);
//		console.log(ele.pid)
			
			if(ele.pid==pid){
				twot=res[index];
				console.log(twot.pid)
//				console.log(twot)
				$(".category").eq(0).html(twot.classa[0]);
				$(".category").eq(1).html(twot.classa[1]);
				$.each(twot.single, function(index,ele) {
					stwt+='<div class="thumbnail" pid="'+ele.pid+'">'
							+'<div class="imgbox">'
								+'<div class="img1">'
									+'<img src="img/content3/'+ele.brandimg1+'"/>'
								+'</div>'
								+'<div class="img2">'
									+'<img src="img/content3/'+ele.brandimg2+'"/>'
								+'</div>'
								
							+'</div>'
							+'<div class="tetbox">'
								+'<p class="sold">'+ele.SianZan+'</p>'
								+'<h4>'+ele.brand+'</h4>'
								+'<p>'+ele.shoesname+'</p>'
								+'<hr />'
								+'<div class="price">'
									+'<span class="price_gm">'+ele.present+'</span>'
									+'<span><s>'+ele.past+'</s></span>'
							+'	</div>'
							+'</div>'
						+'</div>'
						$(".pictorial").html(stwt);
						$(".thumbnail").click(function(){
							var indexs = $(this).index(".thumbnail");
							console.log(indexs)
							window.location.href = "details.html?pid="+$(this).attr("pid");
						})
				});
				
					
				
				
				

			}
		});
		
		//鼠标经过
		$(".imgbox").hover(function(){
			var index = $(this).index(".imgbox");
		//	console.log(index);
		$(".imgbox .img2").eq(index).hide(80);
		
		},function(){
		$(".imgbox .img2").show(80);
			
		})
		
		
		
		
		
		
	});


//尾部

$("#rump").load("offal.html","传送数据",function(){
	
})