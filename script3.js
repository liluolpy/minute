$(function(){

	$('#hzicon a').hover(function(){
		$(this).children('.amark').show().next().show();
	},function(){
		$(this).children('.amark').hide().next().hide();
	})

	var h=$('.icon-group').height()/2;
	console.log(h);
	$('.downbtn').on('click',function(){
		var top=Math.abs($('#icon-scroll').position().top);
		console.log(top);
		if($('#icon-scroll').is(':animated')) return false;
		if(top>=600)return false;
		$('#icon-scroll').stop().animate({'top':'-='+h});
		
	})
	$('.topbtn').on('click',function(){
		var top=Math.abs($('#icon-scroll').position().top);
		console.log(top);
		if($('#icon-scroll').is(':animated')) return false;
		if(top<=0) return false;
		$('#icon-scroll').stop().animate({'top':'+='+h});
	})

	$('#team a').on('click',function(){
		var index=$(this).index();
		$(this).addClass('curItem').siblings().removeClass('curItem');
		$('.rw_wrap .rw_info').eq(index).show().siblings().hide();
		return false;
	})
})

/*一到晚上，天气很凉，按下电梯，感受风向，有风的夜里，吹得我很想爱上，晚上说的爱上，
白天还是要假装。你是我的，我是你的，这两句话，听起来好苦涩，已经分得一清二楚了,
已经走得无影无踪了，已经不住一起了，还说什么你的我的，我需要现在，可你还不会来，，我需要未来
可你都不敢猜，我需要大大的花园，里面种长长的誓言，有这么难吗？还爱不爱啊？晚上的风 
呜~~今晚做的饭，明明还在桌上，习惯不是曾经，是不能违背的心，这两天的剧情看清了我的心*/