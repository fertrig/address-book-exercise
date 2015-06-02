(function() {
	"use strict";

	angular
		.module("app.people")
		.controller("Person", Person);

	/* @ngInject */
	function Person($scope, $routeParams, peopleRepository) {
		peopleRepository.getById($routeParams.personId)
			.then(function(person) {
				$scope.person = person;
			});
	}
	
})();