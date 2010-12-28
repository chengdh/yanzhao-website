/* Author: chengdh*/
//导航菜单
//参考http://www.noupe.com/tutorial/drop-down-menu-jquery-css.html
$(document).ready(function() {
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
	//if ($('#service_net_map').length > 0) $('#service_net_map').jMapping();
});

