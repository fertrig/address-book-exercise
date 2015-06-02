module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['client/app/**/*.jade', 'client/content/style.styl'],
				tasks: ['build'],
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
		stylus: {
            compile: {
                options: {
                    paths: [ 'client/content' ]
                },
                files: {
                    'client/content/style.css': 'client/content/style.styl'
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('build', ['jade', 'stylus']);
};