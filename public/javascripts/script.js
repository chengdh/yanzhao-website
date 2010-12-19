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

});

