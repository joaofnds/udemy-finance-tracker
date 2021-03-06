var init_stock_lookup;

init_stock_lookup = function() {
	var form = $('#stock-lookup-form');

	$(form).on('ajax:before', function(event, data, status) {
		show_spinner();
	})

	$(form).on('ajax:after', function(event, data, status) {
		hide_spinner();
	})

	$(form).on('ajax:success', function(event, data, status) {
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	})

	$(form).on('ajax:error', function(event, xhr, status, error) {
		hide_spinner();
		$('#stock-lookup-results').replaceWith(' ');
		$('#stock-lookup-errors').replaceWith('Stock was not found');
	})
}

$(function() {
    init_stock_lookup();
})
