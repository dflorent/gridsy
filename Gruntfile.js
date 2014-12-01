module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: [
                    'src/**/*.scss',
                    'test/**/*.scss'
                ],
                tasks: [
                    'sass'
                ],
                options: {
                    spawn: false,
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'test/demo.css': 'test/demo.scss'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch', 'sass']);
};
