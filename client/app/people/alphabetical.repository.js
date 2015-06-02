(function() {
	"use strict";

	angular
		.module("app.people")
		.factory("alphabeticalRepository", alphabeticalRepository);

	/* @ngInject */
	function alphabeticalRepository(peopleRepository) {

		var service = {
			getGroups: getGroups
		};

		return service;

		function getGroups() {
			return peopleRepository.getPeople()
				.then(function(people) {
					var alphabet = {},
						groups = [];

					for (var i = 0; i < people.length; i++) {
						var letter = people[i].name.substring(0, 1);
						alphabet[letter] = alphabet[letter] || [];
						alphabet[letter].push(people[i]);
					}

					for (var letter in alphabet) {
						groups.push({
							letter: letter,
							people: alphabet[letter]
						});
					}

					return groups;
				});
		}
	}
})();