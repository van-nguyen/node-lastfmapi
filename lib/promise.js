module.exports = (function(deferred) {
	return function(err, results) {
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(results);
		}
	};
});