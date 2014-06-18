/*jslint node: true */
'use strict';

var pkg = require('./package.json');

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function (fileTypePatterns) {
    fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
    var ignore = ['node_modules', 'bower_components', 'dist', 'temp', 'instrumented'];
    var fs = require('fs');
    return fs.readdirSync(process.cwd())
        .map(function (file) {
            if (ignore.indexOf(file) !== -1 ||
                file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
                return null;
            } else {
                return fileTypePatterns.map(function (pattern) {
                    return file + '/**/' + pattern;
                });
            }
        })
        .filter(function (patterns) {
            return patterns;
        })
        .concat(fileTypePatterns);
};

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};


module.exports = function (grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        connect: {
            main: {
                options: {
                    port: 9001
                }
            },
            test: {
                options: {
                    port: 9002
                }
            },
            instrumented: {
                options: {
                    port: 9002,
                    base: 'instrumented'
                }
            }
        },
        watch: {
            main: {
                options: {
                    livereload: true,
                    livereloadOnError: false,
                    spawn: false
                },
                files: [createFolderGlobs(['*.js', '*.less', '*.html']), '!_SpecRunner.html', '!.grunt'],
                tasks: [] //all the tasks are run dynamically during the watch event handler
            }
        },
        jshint: {
            main: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: [createFolderGlobs('*.js')]
            }
        },
        clean: {
            before: {
                src: ['dist', 'temp']
            },
            after: {
                src: ['temp']
            },
            test: {
                src: ['instrumented', 'coverage']
            }
        },
        less: {
            production: {
                options: {
                },
                files: {
                    'temp/app.css': 'app.less'
                }
            }
        },
        ngtemplates: {
            main: {
                options: {
                    module: pkg.name,
                    htmlmin: '<%= htmlmin.main.options %>'
                },
                src: [createFolderGlobs('*.html'), '!index.html', '!_SpecRunner.html'],
                dest: 'temp/templates.js'
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['img/**'], dest: 'dist/'},
                    {src: ['bower_components/font-awesome/fonts/**'], dest: 'dist/', filter: 'isFile', expand: true}
                    //{src: ['bower_components/angular-ui-utils/ui-utils-ieshiv.min.js'], dest: 'dist/'},
                    //{src: ['bower_components/select2/*.png','bower_components/select2/*.gif'], dest:'dist/css/',flatten:true,expand:true},
                    //{src: ['bower_components/angular-mocks/angular-mocks.js'], dest: 'dist/'}
                ]
            },
            test: {
                files: [
                    {src: ['bower_components/**', '**/*.less', '**/*.html'], dest: 'instrumented/'}
                ]
            }
        },
        dom_munger: {
            read: {
                options: {
                    read: [
                        {selector: 'script[data-concat!="false"]', attribute: 'src', writeto: 'appjs'},
                        {selector: 'link[rel="stylesheet"][data-concat!="false"]', attribute: 'href', writeto: 'appcss'}
                    ]
                },
                src: 'index.html'
            },
            update: {
                options: {
                    remove: ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
                    append: [
                        {selector: 'body', html: '<script src="app.full.min.js"></script>'},
                        {selector: 'head', html: '<link rel="stylesheet" href="app.full.min.css">'}
                    ]
                },
                src: 'index.html',
                dest: 'dist/index.html'
            },
            your_target: {
                options: {
                    prefix: {selector:'link',attribute:'href',value:'../'},
                    callback: function($){
                        $('script').each(function(index, element) {
                            var jqElement = $(element);
                            var src = jqElement.attr('src');
                            if (src.indexOf('http') === 0) {
                                return;
                            }
                            if (src.indexOf('bower_components') === 0) {
                                jqElement.attr('src', '../'+src);
                            } else {
                                jqElement.attr('src', 'instrumented/'+src);
                            }
                        });
                    }
                },
                src: 'index.html',
                dest: 'instrumented/index.html'
            }
        },
        cssmin: {
            main: {
                src: ['temp/app.css', '<%= dom_munger.data.appcss %>'],
                dest: 'dist/app.full.min.css'
            }
        },
        concat: {
            main: {
                src: ['<%= dom_munger.data.appjs %>', '<%= ngtemplates.main.dest %>'],
                dest: 'temp/app.full.js'
            }
        },
        ngmin: {
            main: {
                src: 'temp/app.full.js',
                dest: 'temp/app.full.js'
            }
        },
        uglify: {
            main: {
                src: 'temp/app.full.js',
                dest: 'dist/app.full.min.js'
            }
        },
        htmlmin: {
            main: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },
        imagemin: {
            main: {
                files: [
                    {
                        expand: true, cwd: 'dist/',
                        src: ['**/{*.png,*.jpg}'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        karma: {
            options: {
                frameworks: ['jasmine'],
                files: [  //this files data is also updated in the watch handler, if updated change there too
                    '<%= dom_munger.data.appjs %>',
                    'bower_components/angular-mocks/angular-mocks.js',
                    createFolderGlobs('*-spec.js')
                ],
                logLevel: 'ERROR',
                reporters: ['mocha'],
                autoWatch: false, //watching is handled by grunt-contrib-watch
                singleRun: true
            },
            all_tests: {
                browsers: ['PhantomJS']
            },
            during_watch: {
                browsers: ['PhantomJS']
            }
        },
        protractor_webdriver: {
            main: {
            }
        },
        protractor_coverage: {
            options: {
                configFile: 'protractor-travis.conf.js',
                coverageDir: 'coverage',
                args: {
                    specs: ['test-e2e/*.js']
                }
            },
            main: {
            }
        },
        protractor: {
            options: {
                configFile: 'protractor-local.conf.js',
                args: {
                    specs: ['test-e2e/*.js']
                }
            },
            main: {
            }
        },
        instrument: {
            files: [createFolderGlobs('*.js'), '!protractor*.js', '!Gruntfile.js'],
            options: {
                lazy: true,
                basePath: "instrumented"
            }
        },
        makeReport: {
            src: 'coverage/*.json',
            options: {
                type: 'lcov',
                dir: 'coverage/reports',
                print: 'detail'
            }
        },
        coveralls: {
            options: {
                src: 'coverage/reports/lcov.info',
                force: false
            }
        }
    });

    grunt.registerTask('build', ['jshint', 'clean:before', 'less', 'dom_munger', 'ngtemplates', 'cssmin', 'concat', 'ngmin', 'uglify', 'copy', 'htmlmin', 'imagemin', 'clean:after']);
    grunt.registerTask('serve', ['dom_munger:read', 'jshint', 'connect:main', 'watch']);
    grunt.registerTask('test', ['dom_munger:read', 'karma:all_tests']);
    grunt.registerTask('test-e2e', ['connect:test', 'protractor_webdriver', 'protractor']);
    grunt.registerTask('test-travis', ['clean:test', 'instrument', 'copy:test', 'connect:instrumented', 'protractor_webdriver', 'protractor_coverage', 'makeReport']);

    grunt.event.on('watch', function (action, filepath) {
        //https://github.com/gruntjs/grunt-contrib-watch/issues/156

        var tasksToRun = [];

        if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

            //lint the changed js file
            grunt.config('jshint.main.src', filepath);
            tasksToRun.push('jshint');

            //find the appropriate unit test for the changed file
            var spec = filepath;
            if (filepath.lastIndexOf('-spec.js') === -1 || filepath.lastIndexOf('-spec.js') !== filepath.length - 8) {
                spec = filepath.substring(0, filepath.length - 3) + '-spec.js';
            }

            //if the spec exists then lets run it
            if (grunt.file.exists(spec)) {
                var files = [].concat(grunt.config('dom_munger.data.appjs'));
                files.push('bower_components/angular-mocks/angular-mocks.js');
                files.push(spec);
                grunt.config('karma.options.files', files);
                tasksToRun.push('karma:during_watch');
            }
        }

        //if index.html changed, we need to reread the <script> tags so our next run of karma
        //will have the correct environment
        if (filepath === 'index.html') {
            tasksToRun.push('dom_munger:read');
        }

        grunt.config('watch.main.tasks', tasksToRun);

    });
};
