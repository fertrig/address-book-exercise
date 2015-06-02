(function() {
	"use strict";

	angular
		.module("app.people")
		.factory("peopleRepository", peopleRepository);

	/* @ngInject */
	function peopleRepository(Repository) {
		
		var repo = new Repository("/api/people");

		var service = {
			getPeople: getPeople,
			getById: getById
		};

		return service;

		function getPeople() {
			return repo.read();
		}

		function getById(id) {
			return repo.read()
				.then(function(people) {
					for (var i = 0; i < people.length; i++) {
						if (id === people[i].id) {
							return people[i];
						}
					}

					throw new Error("Person not found");
				});
		}
	}
})();