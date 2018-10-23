// let grunt = require("load-grunt-tasks"); //(grunt); 
module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['env'],
            },

            dist: {

                files: [
                    {
                        expand: true,
                        src: ["./app/prod/**/*.js"],
                        dest: "./app/dist",
                        ext: ".js",

                    }
                ],


            }
        },

        jasmine: {
            src: 'app/dist/**/*.js',
            options: {
                specs: 'spec/**/*.js',
                helpers: 'spec/*Helper.js'
            }
        },

        eslint: {
            options: {
                configFile: '.eslintrc.js',
                rulePaths: ['/']
            },
            target: ["app/prod/**/*.js"],
        },

        jshint: {
            target: ["app/prod/**/*.js"],
        },

        exec: {
            node: { cmd: "node app/bin/www" }
        }
    });

    //   grunt.loadNpmTasks('load-grunt-tasks');


    grunt.registerTask("test", ["jasmine"]);
    grunt.registerTask("default", ["babel"]);/* "eslint" */

    //node node_modules/jshint/bin/jshint app/prod      :jshint npm starter
    // "start": "grunt && npm test && cd app && npm install  && cd .. && node app/bin/www", : start cmd with install included
}
