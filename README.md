Programming Exercise: Address Book
---

## Setup
```bash
npm install
bower install
grunt build
```

## Run Server
```bash
node server.js
```

## Notes
1. It uses grunt to build jade and stylus files
  * If changing the jade or styl files, do a grunt watch to compile automatically
1. Client uses bootstrap and angular
1. Person details are displayed using client-side routing
	* Routing handles person ids that do not exist
1. The people list is an angular directive
1. The person details are using an angular view
1. There is a repository service that caches people data after it is first loaded. This service also makes sure that the server is only called once.
1. There is an alphabetical service that handles the grouping of people per letter.
1. Things left out due to time constraints:
  * Uglyfying and concat of js and css assets
  * jshint checks
  * Testing with a larger data set, which would have forced pagination

## URL Endpoints

**Landing:**
http://localhost:8080

**People Data:**
http://localhost:8080/api/people

## Try it out

Running on:

https://address-book-exercise.herokuapp.com/

Or, deploy using your own heroku account:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
