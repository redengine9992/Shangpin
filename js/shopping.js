
//如果cookie中没有数据  显示tip提示，否则隐藏提示
//var pid=JSON.parse(localStorage.getItem("pid"));
//var datass = localStorage.getItem("datas");

//console.log(datass)
if(localStorage.getItem("datas")){

$.ajax({
	type:"get",
	url:"json/homeepage.json",
	async:true
}).done(function(res){
	console.log(res)
	var mqtr = "";
	var pids = "";
	var datas=localStorage.getItem("datas").split(",");
	console.log(datas)
	
		
	$.each(datas, function(index,ele) {
			var pid = ele;
			console.log(pid);
			
		$.each(res, function(index,ele) {
			if(ele.pid == pid){
				pids = res[index];
				console.log(pids);
			}
		});
		
			mqtr+='<div class="goods_box" pid="'+pids.pid+'">'
					+'<ul class="goods_box_left">'
						+'<li>'
							+'<input class="qqtf" type="checkbox" name="" id="" value="" />'
						+'</li>'
						+'<li>'
							+'<img src="img/details/'+pids.brandimg[0]+'"/>'
						+'</li>'
						+'<li>'
							+'<p>'+pids.Details_place.brand+'</p>'
							+'<p>'+pids.Details_place.Ladys_Coat+'</p>'
							+'<p>颜色:<span>'+pids.details.colous+'</span></p>'
							+'<p>支持七天退货</p>'
					+'</li>'
					+'</ul>'	
					+'<ul class="goods_box_right">'
						+'<li>'
							+'<p class="pres">'+pids.details.present+'<span class="mmbw"><s>'+pids.details.past+'</s></span></p>'
						+'</li>'
						+'<li>'
							+'<div class="lkud">'
								+'<button class="ud">-</button>'
								+'<input class="lqty" type="text" value="1"/>'
								+'<button class="lk">+</button>'
							+'</div>'
						+'</li>'
						+'<li>'
							+'<p class="subtotal">'+pids.details.present+'</p>'
						+'</li>'
						+'<li>'
							+'<p>收藏</p>'
							+'<p class="cancels" >删除</p>'
						+'</li>'
					+'</ul>'
				+'</div>'
				$(".ggg").html(mqtr);
					
					
			});
	//加操作			
		$(".lk").each(function(index,ele){
			$(this).click(function(){
				console.log(Number($(".lqty").eq(index).val()))
				$(".lqty").eq(index).val(Number($(".lqty").eq(index).val())+1);
				mmbw();
			})
		})
			
			
//减操作
$(".ud").each(function(index,ele){
$(this).click(function(){
	if(Number($(".lqty").eq(index).val())<2){
		Number($(".lqty").eq(index).val())==1;
	}else{
		$(".lqty").eq(index).val(Number($(".lqty").eq(index).val())-1)
		}
		
	})
})


function mmbw(){
	$(".subtotal").each(function(index,ele){
		console.log(index)
		$(this).html(Number($(".lqty").eq(index).val())*Number($(".pres").eq(index).html()));
		
	})
}
			
//删除操作
		$(".cancels").click(function(){
			console.log(11)
			var pid=this.parentNode.parentNode.parentNode.getAttribute('pid')
			console.log(pid)
			var index = $(this).index(".cancels");
			console.log(index)
			
			$.each(datas, function(index,ele) {
				console.log(ele)
				if(ele==pid){
					datas.splice(index,1)
				}
			})
			console.log(datas)
			
			localStorage.setItem("datas",datas)
			
			$(".goods_box").eq(index).remove()
			
			
			
			
		})
			
})			
}else{
	$(".goods_box1").show();
    $(".goods_box").hide();
}

			

			
			
			
			
			
			
//计算总价函数	
//function getTotalPrice(){
//	var sum=0;
//	var cks= document.getElementsByClassName('ck');
//	for(var i=0;i<cks.length;i++){
//		if(cks[i].checked==true){
//			sum+=Number(cks[i].parentNode.parentNode.children[6].innerHTML);
//		}
//	}
//	 return sum;
//}
//document.getElementById("total").innerHTML="总价为"+getTotalPrice();			
			
			
    
////var pid = localStorage.pid;//接收cooKie中的pid
//$.ajax({
//	type:"get",
//	url:"json/homeepage.json",
//	async:true
//}).done(function(res){
//	
//	var mqtr = "";
//	var runh = "";
//	$.each(res,function(index,ele){
////		console.log(ele)
//		if(ele.pid==localStorage.pid){
//			runh=res[index];
//		
//			$.each(runh, function(index,ele) {
//				
//				console.log(index)
//				mqtr='<div class="goods_box">'
//						+'<ul class="goods_box_left">'
//							+'<li>'
//								+'<input class="qqtf" type="checkbox" name="" id="" value="" />'
//							+'</li>'
//							+'<li>'
//								+'<img src="img/details/'+runh.brandimg[0]+'"/>'
//							+'</li>'
//							+'<li>'
//								+'<p>'+runh.Details_place.brand+'</p>'
//								+'<p>'+runh.Details_place.Ladys_Coat+'</p>'
//								+'<p>颜色:<span>'+runh.details.colous+'</span></p>'
//								+'<p>支持七天退货</p>'
//						+'</li>'
//						+'</ul>'	
//						+'<ul class="goods_box_right">'
//							+'<li>'
//								+'<p>'+runh.details.present+'<span class="mmbw"><s>'+runh.details.past+'</s></span></p>'
//							+'</li>'
//							+'<li>'
//								+'<div class="lkud">'
//									+'<button class="ud">-</button>'
//									+'<input type="text"/>'
//									+'<button class="lk">+</button>'
//								+'</div>'
//							+'</li>'
//							+'<li>'
//								+'<p class="subtotal">￥9887</p>'
//							+'</li>'
//							+'<li>'
//								+'<p>收藏</p>'
//								+'<p>删除</p>'
//							+'</li>'
//						+'</ul>'
//					+'</div>'
//					
//					
//			});
//			$(".ggg").html(mqtr)
//		}
//		
//	})
//	
//	
//	
//	
//	
//	
//	
//})