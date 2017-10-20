$(function(){


	$('.login_close').on('click',function(){
		$('.user-login').hide(600);
		timer=setInterval(auto,1350);
	})
	$('.login').on('click','a:eq(0)',function(){
		$('.user-login').show(600);
		clearInterval(timer);
	})
	$('.login').on('click','a:eq(1)',function(){
		$('.login-layer').show(600);
		clearInterval(timer);
	})
	$('.closeLogin').on('click',function(){
		$('.login-layer').hide(600);
		timer=setInterval(auto,1350);
	})
	
	var index=0,add=2,timer=null;
	var len=$('.slider li').length;
	function auto(){
		index++;
		if(index>len-1){
			index=0;
		}
			$('.slider li').eq(index).css('z-index',add++);
			$('.slider li').eq(index).hide();
			$('.slider li').eq(index).fadeIn(600);
	}

	
	$('#btn').on('click',function(){
		if($(this).hasClass('jiantou')){
			$(this).stop().animate({'left':166},600).removeClass().addClass('jiantou-two');
			$('#content').stop().animate({'width':0,'opacity':0},600,function(){
				$('#product-page').stop().animate({'opacity':1},600);
			})
			
		}else{
			$(this).stop().animate({'left':966},600).removeClass().addClass('jiantou');
			$('#content').stop().animate({'width':1000,'opacity':1},600,function(){
				$('#product-page').stop().animate({'opacity':0},600);
			})	
		}	
	})

	$('.product-pic').on('mouseenter','.full',function(){
		var span=$('<p><a href="##">登录</a><a href="##">适用</a></p>');
		var mask=$('<div class="mask"></div>');
		var w=$(this).width(),h=$(this).height();
		mask.css({'width':w,'height':h});
		mask.html(span);
		$(this).append(mask);
	}).on('mouseleave',function(){
		$(this).find('.mask').remove();
	})
	$('#pageNo').on('click','span',function(){
		$(this).addClass('curp').siblings().removeClass('curp');
		var H=$('.product-pic').height();
		var index=$(this).index();
		$('.scroll').stop().animate({'top':-index*H});

	})
})