(function() {
	"use strict";

	angular
		.module("app.people")
		.controller("Person", Person);

	/* @ngInject */
	function Person($scope, $routeParams, peopleRepository, $location) {
		peopleRepository.findById($routeParams.personId)
			.then(function(person) {
				if (person) {
					$scope.person = person;
				}
				else {
					$location.path("/notfound");
				}
			});
	}
	
})();