$(function(){
	$("#Head").load("head.html","传送数据",function(){
	})
	$("#Foot").load("foot.html","传送数据",function(){
	})
	if(localStorage.getItem("datas")){
		
		$.ajax({
			type:"get",
			url:"01.json",
			async:true,
			dataType:"json"
		}).done(function(res){
			console.log(res)
			var str=''
			var newarr=localStorage.getItem("datas").split(",")
			var tbody=document.getElementsByClassName('tbody')[0]
			$.each(newarr, function(index,ele) {
				var pid=ele
				$.each(res, function(index,ele) {
					if(ele.data.projectCode==pid){
						nowdata=res[index].data;
				}
			});
//				选择颜色******************
				var sel1=''
				$.each(nowdata.color, function(index,ele) {
					sel1+='<option>'+ele.colorAlias+'</option>'
				});
				opt2(0)
				
				function opt2(num){
//				选择尺寸************************
				str=''
				var sel2=''
				$.each(nowdata.color[num].sizes, function(index,ele) {
					sel2+='<option>'+ele.sizeAlias+'</option>'
					
				});
//				tbody*****			
				str+='<tr pid="'+pid+'">'
					+'<th class="imgstr"><input type="checkbox"/><img src="img3/'+nowdata.color[0].picurls[0].split("/")[5]+'"/></th>'
					+'<th>'+nowdata.goodsName+'</th>'
					+'<th>'
					+'<select class="sel" style="width: 100px;">'
					+sel1
					+'</select>'
					+'</th>'
					+'<th>'
					+'<select>'
					+sel2
					+'</select>'
					+'</th>'
					+'<th>'
					+'<div>'
					+'<input class="inp" type="text" value="1"/>'
					+'</div>'
					+'<div>'
					+'<button class="add">+</button>'
					+'<button class="sub">-</button>'
					+'</div>'
					+'</th>'
					+'<th>￥<span class="pri">'+nowdata.color[num].originalPrice+'</span></th>'
					+'<th>￥<span class="cost">'+nowdata.color[num].originalPrice+'</span></th>'
					+'<th><button class="del">删除</button></th>'
					+'</tr>'
					
				}
				tbody.innerHTML+=str
					
				
		});
		price()
		//删除商品
		console.log($(".del"))
		$(".del").click(function(){
			var pid=$(this).parent().parent().attr("pid")
			$.each(newarr, function(index,ele) {
				if(ele==pid){
					newarr.splice(index,1)
				}
			});
			console.log(newarr)
			localStorage.setItem("datas",newarr)
			$(this).parent().parent().remove()
			price()
			
		})
		//加减
		console.log($(".inp"))
		$(".add").each(function(index,ele){
			$(this).click(function(){
				$(".inp").eq(index).val(Number($(".inp").eq(index).val())+1)
				price()
			})
		})
		
		$(".sub").each(function(index,ele){
			$(this).click(function(){
				if(Number($(".inp").eq(index).val())>1){
					$(".inp").eq(index).val(Number($(".inp").eq(index).val())-1)
					price()
				}else{
					$(".inp").eq(index).val(1)
				}
				
			})
		})
		
		//输入框
		$(".inp").blur(function(){
			price()
		})
		//计算价格
		console.log($(".cost"))
		function price(){
			var total=null
			$(".cost").each(function(index,ele){
				$(this).html(Number($(".inp").eq(index).val())*Number($(".pri").eq(index).html()))
				total+=Number($(this).html())
				
			})
			var ddd=null
			$(".inp").each(function(index,ele){
				ddd+=Number($(this).val())
			})
			console.log(total)
			$(".total").html(total)
			$(".d0d0").html(ddd)
		}
			
	});
		
	
	
	}else{
		$(".tbody").html("木有商品").css("font-size","30px")
	}
});
	
