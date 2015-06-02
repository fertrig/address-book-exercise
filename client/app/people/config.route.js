(function() {
	"use strict";

	angular
		.module("app.people")
		.config(configure);

	/* @ngInject */
	function configure($routeProvider) {
		$routeProvider
			.when("/", {
				redirectTo: "/person/1"
			})
			.when("/person/:personId", {
				templateUrl: "app/people/person.html",
				controller: "Person"
			})
			.when("/notfound", {
				templateUrl: "app/people/not-found.html"
			})
			.otherwise("/notfound");
	};
})();