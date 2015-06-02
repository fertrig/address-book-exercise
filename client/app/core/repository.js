(function() {
	"use strict";

	angular
		.module("app.core")
		.factory("Repository", Repository);

	/* @ngInject */
	function Repository($http, $q) {

		var Repo = function(apiPath, listKey) {

			this.read = read;

			var loaded = false,
				calling = false,
				callers = [],
				data = [];

			function read() {
				if (loaded) {
					return $q.when(data);
				}
				else if (calling) {
					var deferred = $q.defer();
					callers.push(deferred);
					return deferred.promise;
				}
				else {
					calling = true;
					return $http.get(apiPath)
						.then(function(res) {
							var list = res.data[listKey];
							for (var i = 0; i < list.length; i++) {
								data.push(list[i]);
							}

							loaded = true;
							calling = false;

							for (var i = 0; i < callers.length; i++) {
								callers[i].resolve(data);
							}

							callers = [];

							return data;
						})
				}
			}
		};

		return Repo;
	}
})();