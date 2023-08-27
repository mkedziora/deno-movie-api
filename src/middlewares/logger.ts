export const incomingRequestLogger = (req, _res, next) => {
	console.log('incoming_request', {
		method: req.method,
		url: req.originalUrl,
		details: {
			body: req.body,
			params: req.params,
			query: req.query,
		},
	});
	next();
};
