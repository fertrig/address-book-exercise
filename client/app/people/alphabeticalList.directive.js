(function() {
	"use strict";

	angular
		.module("app.people")
		.directive("alphabeticalList", alphabeticalList);

	/* @ngInject */
	function alphabeticalList(alphabeticalRepository) {
		var directive = {
			restrict: "E",
			templateUrl: "app/people/alphabetical-list.html",
			controller: controller
		};

		return directive;

		function controller(scope) {
			scope.reverse = false;
			
			alphabeticalRepository.getGroups()
				.then(function(groups) {
					scope.groups = groups;
				});
		}
	}
})();