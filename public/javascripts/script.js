/* Author: chengdh*/
//导航菜单
//参考http://www.noupe.com/tutorial/drop-down-menu-jquery-css.html
$(document).ready(function() {
	/*
	$("#slideshow").slideView({
		loop: true,
		thumb: false

	});
        */
	//滚动新闻
	$('marquee').marquee('pointer').mouseover(function() {
		$(this).trigger('stop');
	}).mouseout(function() {
		$(this).trigger('start');
	}).mousemove(function(event) {
		if ($(this).data('drag') == true) {
			this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
		}
	}).mousedown(function(event) {
		$(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
	}).mouseup(function() {
		$(this).data('drag', false);
	});
	$('#slideshow').Horinaja({
		capture: 'slideshow',
		delai: 0.3,
		duree: 4,
		pagination: true
	});
	$('#breadcrumb_bar').jBreadCrumb();
	//查找运单
	//绑定提示信息
	$('#search_trigger').bind('search_bill:warn_blank', function() {
		$.notifyBar({
			html: "请录入运单号查询运单信息!",
			delay: 2000,
			animationSpeed: "normal",
			cls: 'error'
		});

	});
	//精品线路侧边栏
	$('#line-side-bar').accordion({
		active: false
	});
	//点击不同区域时,切换地图显示
	$('#line-side-bar').bind('accordionchange', function() {
		$('#service_net_map').data('jMapping').update();
	});

	if ($('#line-side-bar').length > 0) $('#service_net_map').jMapping({
		side_bar_selector: '.ui-accordion-content-active:first',
		map_config: {
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.DEFAULT
			},
			center: new google.maps.LatLng(35.82, 104.85),
			//中国地图为中心
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 4 //缩放
		}

	});

	//初始化google地图
	if ($('#map-side-bar').length > 0) $('#service_net_map').jMapping({
		map_config: {
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.DEFAULT
			},
			center: new google.maps.LatLng(34.7512, 113.6577),
			//以郑州市为中心
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 11 //缩放
		}

	});

});

