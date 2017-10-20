$(function(){
	var timer=null,i=0,len=$('#img-list li').length;
	var w=$('#img-list li').width();
	$('#img-list').width(w*(len+1));
	var span=$(".num-info span");
		span.eq(0).text("0"+(i+1)+"/");
		span.eq(1).text("0"+len);
	function auto(){
		i++;
		if(i>len-1){
			$('#img-list li').first().clone().appendTo('#img-list');
			$('#img-list').stop().animate({'left':-i*w},600,function(){
				$('#img-list li').last().remove();
				$('#img-list').css({'left':0});
			})
			span.eq(0).text("0"+1+"/");
			i=0;
		}else{
			init(i);
		}
	}
	$('#page-slider').hover(function(){
				clearInterval(timer);
			},function(){
				timer=setInterval(auto,1500);	
			}).trigger('mouseleave');
	$('#next').on('click',function(){
		auto();
		if($('#img-list').is(':animated')) return false;
	})
	$('#prev').on('click',function(){
		i--;
		if(i<0){
			i=len-1;
		}
		init(i);
		if($('#img-list').is(':animated')) return false;
	})
	function init(i){
		$('#img-list').stop().animate({'left':-i*w},600);
		span.eq(0).text("0"+(i+1)+"/");
	}
})