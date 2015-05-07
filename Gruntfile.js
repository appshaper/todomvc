module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildFolder: 'dist/',
        sourceFolder: 'js/',
        templateFolder: 'js/templates/',
        handlebars: {
            compile: {
                options: {
                    namespace: 'appshaper.templates',
                    amd: true,
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    },
                    processPartialName: function(filePath) { // input:  templates/_header.hbs
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    },
                    partialsUseNamespace: true,
                    partialRegex: /.*/,
                    partialsPathRegex: /\/partials\//,
                    wrapped: true,
                    //node: true
                },
                files: {
                    'js/templates.js': ['<%= templateFolder %>**/*.hbs']
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    almond: true,
                    baseUrl: '<%= sourceFolder %>',
                    name: 'app',
                    optimize: 'uglify',
                    out: '<%= buildFolder %>modules.js',
                    mainConfigFile: '<%= sourceFolder %>config.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.registerTask('default', [
        'handlebars',
        'requirejs'
    ]);

};
