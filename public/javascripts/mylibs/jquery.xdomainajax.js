/**
 * jQuery.ajax mid - CROSS DOMAIN AJAX 
 * ---
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.11
 * @updated 12-JAN-10
 * ---
 * Note: Read the README!
 * ---
 * @info http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/
 */

jQuery.ajax = (function(_ajax) {

	var protocol = location.protocol,
	hostname = location.hostname,
        port = location.port,
	exRegex = RegExp(protocol + '//' + hostname + ':' + port),
	YQL = 'http' + (/^https/.test(protocol) ? 's': '') + '://query.yahooapis.com/v1/public/yql',
	query = 'select * from html where url="{URL}" and xpath="*"';

	function isExternal(url) {
		return ! exRegex.test(url) && /:\/\//.test(url);
	}

	return function(o) {
		o = $.extend({
			type: 'get',
			dataType: 'html'
		},
		o);

		var url = o.url;

		if (/get/i.test(o.type) && isExternal(url)) {
			//测试dataType
			if (/json/i.test(o.dataType)) query = 'select * from json where url="{URL}"';
			if (/xml/i.test(o.dataType)) query = 'select * from xml where url="{URL}"';

			// Manipulate options so that JSONP-x request is made to YQL
			o.url = YQL;

			o.data = {
				q: query.replace('{URL}', url + (o.data ? (/\?/.test(url) ? '&': '?') + jQuery.param(o.data) : '')),
				format: 'xml'
			};

		}
		return _ajax.apply(this, arguments);

	};
})(jQuery.ajax);

