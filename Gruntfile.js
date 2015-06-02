module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			scripts: {
				files: ['client/app/**/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false,
				},
			},
		},
		jade: {
		    compile: {
		        options: {
		        	pretty: true,
		            data: {
		                debug: false
		            }
		        },
		        files: [
					{
						expand: true,
						cwd: 'client/app/',
						src: ['**/*.jade'],
						dest: 'client/app/',
						ext: '.html',
						extDot: 'first'
					},
				]
		    }
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask("build", ["jade"]);
};