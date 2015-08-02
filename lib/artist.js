var defaults = require('./defaults'),
		Q = require('q'),
		promise = require('./promise');

var Artist = module.exports = function (lastfm) {
	this.lastfm = lastfm;
};

Artist.prototype.addTags = function (artist, tags) {
	if (!Array.isArray(tags)) { tags = [ tags ]; }
	var deferred = Q.defer();
	var options = defaults.defaultOptions({
		'artist' : artist,
		'tags' : tags.join(','),
		'sk' : this.lastfm.sessionCredentials.key
	}, promise(deferred));
	
	this.lastfm.api.request('artist.addTags', options);
	return deferred.promise;
};

Artist.prototype.getCorrection = function (artist) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions({ 'artist' : artist }, promise(deferred), 'corrections');
	
	this.lastfm.api.request('artist.getCorrection', options);
	return deferred.promise;
};

Artist.prototype.getEvents = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'events');
	
	this.lastfm.api.request('artist.getEvents', options);
	return deferred.promise;
};

Artist.prototype.getInfo = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'artist');
	
	this.lastfm.api.request('artist.getInfo', options);
	return deferred.promise;
};

Artist.prototype.getPastEvents = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'events');
	
	this.lastfm.api.request('artist.getPastEvents', options);
	return deferred.promise;
};

Artist.prototype.getPodcast = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'rss');
	
	this.lastfm.api.request('artist.getPodcast', options);
	return deferred.promise;
};

Artist.prototype.getShouts = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'shouts');
	
	this.lastfm.api.request('artist.getShouts', options);
	return deferred.promise;
};

Artist.prototype.getSimilar = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'similarartists');
	
	this.lastfm.api.request('artist.getSimilar', options);
	return deferred.promise;
};

Artist.prototype.getTags = function (params) {
	if (!params.user) { params.user = this.lastfm.sessionCredentials.username; } 
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'tags');
	
	this.lastfm.api.request('artist.getTags', options);
	return deferred.promise;
};

Artist.prototype.getTopAlbums = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'topalbums');
	
	this.lastfm.api.request('artist.getTopAlbums', options);
	return deferred.promise;
};

Artist.prototype.getTopFans = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'topfans');
	
	this.lastfm.api.request('artist.getTopFans', options);
	return deferred.promise;
};

Artist.prototype.getTopTags = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'toptags');
	
	this.lastfm.api.request('artist.getTopTags', options);
	return deferred.promise;
};

Artist.prototype.getTopTracks = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'toptracks');
	
	this.lastfm.api.request('artist.getTopTracks', options);
	return deferred.promise;
};

Artist.prototype.removeTag = function (artist, tag) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions({
		'artist' : artist,
		'tag' : tag,
		'sk' : this.lastfm.sessionCredentials.key
	});
	
	this.lastfm.api.request('artist.removeTag', options);
	return deferred.promise;
};

Artist.prototype.search = function (params) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params, promise(deferred), 'results');
	
	this.lastfm.api.request('artist.search', options);
	return deferred.promise;
};

Artist.prototype.share = function (params) {
	if (!Array.isArray(params.recipient)) { params.recipient = [ params.recipient ]; }
	params.recipient = params.recipient.join(',');
	var deferred = Q.defer();
	var options = defaults.defaultOptions(params);
	options.sk = this.lastfm.sessionCredentials.key;
	
	this.lastfm.api.request('artist.share', options);
	return deferred.promise;
};

Artist.prototype.shout = function (artist, message) {
	var deferred = Q.defer();
	var options = defaults.defaultOptions({
		'artist' : artist,
		'message' : message,
		'sk' : this.lastfm.sessionCredentials.key
	});
	
	this.lastfm.api.request('artist.shout', options);
	return deferred.promise;
};
