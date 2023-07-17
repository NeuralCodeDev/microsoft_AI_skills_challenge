// Create web server
// 1. create web server
// 2. load http module
// 3. create http server
// 4. start http server
// 5. listen for events
// 6. create request handler
// 7. return response
// 8. create request router
// 9. route requests to request handlers

// 1. create web server
var http = require('http');
var url = require('url');

// 3. create http server
function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.');

		// 9. route requests to request handlers
		route(handle, pathname, response, request);
	}

	// 4. start http server
	http.createServer(onRequest).listen(8888);
	console.log('Server has started.');
}

// 2. load http module
exports.start = start;