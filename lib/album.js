var defaults = require('./defaults'),
		Q = require('q'),
		promise = require('./promise');

var Album = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Album.prototype.addTags = function (artist, album, tags) {
	if (!Array.isArray(tags)) { tags = [ tags ]; }

	var deferred = Q.defer();
	var options = defaults.defaultOptions({
		'artist' : artist,
		'album' : album,
		'tags' : tags.join(','),
		'sk' : this.lastfm.sessionCredentials.key
	}, promise(deferred));

	this.lastfm.api.request('album.addTags', options);
	return deferred.promise;
};

Album.prototype.getBuylinks = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'affiliations');

	this.lastfm.api.request('album.getBuylinks', options);
	return deferred.promise;
};

Album.prototype.getInfo = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'album');

	this.lastfm.api.request('album.getInfo', options);
	return deferred.promise;
};

Album.prototype.getShouts = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'shouts');

	this.lastfm.api.request('album.getShouts', options);
	return deferred.promise;
};

Album.prototype.getTags = function (params) {
	if (!params.user) { params.user = this.lastfm.sessionCredentials.username; }
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'tags');

	this.lastfm.api.request('album.getTags', options);
	return deferred.promise;
};

Album.prototype.getTopTags = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'toptags');

	this.lastfm.api.request('album.getTopTags', options);
	return deferred.promise;
};

Album.prototype.removeTag = function (artist, album, tag) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions({
		'artist' : artist,
		'album' : album,
		'tag' : tag,
		'sk' : this.lastfm.sessionCredentials.key
	}, promise(deferred));

	this.lastfm.api.request('album.removeTag', options);
	return deferred.promise;
};

Album.prototype.search = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'results');

	this.lastfm.api.request('album.search', options);
	return deferred.promise;
};

Album.prototype.share = function (params) {
	if (!Array.isArray(params.recipient)) { params.recipient = [ params.recipient ]; }
	params.recipient = params.recipient.join(',');
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred));
	options.sk = this.lastfm.sessionCredentials.key;

	this.lastfm.api.request('album.share', options);
	return deferred.promise;
};
