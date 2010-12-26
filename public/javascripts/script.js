/* Author: chengdh
*/
//导航菜单
//参考http://www.noupe.com/tutorial/drop-down-menu-jquery-css.html
$(document).ready(function() {
	$("ul.subnav").parent().append("<span></span>"); //Only shows   drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)
	$("ul.topnav li").hover(function() { //When trigger is clicked...
		//Following events are applied to the subnav itself (moving subnav up and down)
		$(this).find("ul.subnav").slideDown('fast').show(); //Drop down thishe subnav on click
		$(this).find('span').addClass("subhover"); //On hover over, add classass "subhover"
	},
	function() {
		$(this).find("ul.subnav").slideUp('slow'); //When the minouse hovers out of the subnav, move it back up
		$(this).find('span').removeClass("subhover"); //On hover over, add classass "subhover"
	});
	$("#slideshow").slideView({
		loop: true,
		thumb: false

	});
	$('#breadcrumb_bar').jBreadCrumb();
	//fancybox
	$('.fancybox').fancybox();
	//查找运单
	$('#webysd').watermark('请录入运单编号查询');
	$('#btn_search').live('click', function() {
		$.fancybox.close();
		if ($('#webysd').val() == "") {
			$.notifyBar({
				html: "请录入运单号查询运单信息!",
				delay: 2000,
				animationSpeed: "normal",
				cls: 'error'
			});

			return;
		}
		$.ajax({
			url: "http://www.yanzhaowuliu.com:8888/lmis/servlet/SelectWebServlet?ztra=hwcx&webysd=" + $('#webysd').val(),
			type: 'get',
			dataType: 'xml',
			success: function(xml) {
				var ret_result = $(xml).find('town').first();
				var alert_html = "";
				alert_html += "<p class='text-center'>" + ret_result.attr('StrYsd') + "</p>";
				alert_html += "<p>" + ret_result.attr('hw') + "</p>";
				alert_html += "<p class='text-center'>" + ret_result.attr('fhr') + "</p>";
				alert_html += "<p class='text-center'>" + ret_result.attr('hk') + "</p>";
				alert_html += "<p class='text-center'>" + ret_result.attr('tkzt') + "</p>";
				$.notifyBar({
					html: alert_html,
					delay: 5000,
					animationSpeed: "normal",
					cls: 'success'
				});
			}

		});
	});
	//初始化google地图
	$('#service_net_map').jMapping();


});

