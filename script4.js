$(function(){
	var h=$('#myprobox').height()/2;
	$('#downbtn').on('click',function(){
		var top=Math.abs($('#my-pro-list').position().top);
		if($('#my-pro-list').is(':animated')) return false;
		if(top>=400) return false;
		$('#my-pro-list').stop().animate({'top':'-='+h});
	})
	$('#upbtn').on('click',function(){
		var bop=Math.abs($('#my-pro-list').position().top);
		if($('#my-pro-list').is(':animated')) return false;
		if(bop<=0) return false;
		$('#my-pro-list').stop().animate({'top':'+='+h});
	})

	$('#my-pro-list').on('click','.tip',function(){
		var mask=$('<div class="markbg"></div>').height($('body').height());
		$('body').append(mask);
		$('#pro-mask').show();
	})
	$('#close-mask').on('click',function(){
		$('.markbg').remove();
		$('#pro-mask').hide();
	})

	$('#select').on('click','li',function(){
		$(this).addClass('checked').siblings().removeClass('checked');
		$('#nobuy li').removeClass();
		if($(this).index()==1){
			$('#confirm').fadeIn(600);
		}else{
			$('#confirm').fadeOut(600);
		}
	})

	$('#nobuy').on('click','li',function(){
		$(this).addClass('checked').siblings().removeClass('checked');
		$('#select li').removeClass();
	})

	var len=$('#fat-list ul').length,ind=0,w=$('#fat-list ul').width();
	$('#fat-list').width(len*w);
	console.log($('#fat-list').width());
	$('#next_btn').on('click',function(){
		ind++; 
		$('#prev_btn').removeClass('prev_disabled').addClass('prev_btn');
		if(ind>=len-1){
			$('#next_btn').removeClass('next_btn').addClass('next_disabled');
			ind=len-1;
		}
		$('#fat-list').stop().animate({'left':-ind*w});
		$('.cur-grounp').text('0'+(ind+1))
	
	})
	$('#prev_btn').on('click',function(){
		ind--;
		$('#next_btn').removeClass('next_disabled').addClass('next_btn');
		if(ind<=0){
			$('#prev_btn').removeClass('prev_btn').addClass('prev_disabled')
			ind=0;
		}
		$('#fat-list').stop().animate({'left':-ind*w});
		$('.cur-grounp').text('0'+(ind+1))
	})
})