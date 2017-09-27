'use strict';

var yfm = require('yfm');
var S = require("string");
var path = require('path');

module.exports = function (grunt) {

    // Load all Grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['build/scss/**/*.scss'],
                tasks: ['sass_globbing', 'sass', 'postcss']
            },
            hugo: {
                files: ['content/**', 'layouts/**', 'data/**', 'static/**', 'archetypes/**', 'config.yaml', 'config-dev.yaml', '!static/js/lunr-index.json'],
                tasks: ['hugo:dev', 'index']
            },
            js: {
                files: ['build/js/**/*.js'],
                tasks: ['js']
            }
        },

        connect: {
            docs: {
                options: {
                    hostname: '127.0.0.1',
                    port: 1313,
                    protocol: 'http',
                    base: 'public',
                    livereload: true
                }
            }
        },

        clean: {
            dist: {
                src: [
                    '.tmp',
                    'public/'
                ]
            }
        },

        sass: {
            options: {
                sourceMap: true,
                outputStyle: "expanded"
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'build/scss/',
                    src: [
                        '*.scss',
                        '!_*.scss'
                    ],
                    dest: 'static/css/',
                    ext: '.css'
                }]
            }
        },

        sass_globbing: {
            docs: {
                files: {
                    'build/scss/tmp/_componentsMap.scss': 'build/scss/components/**/*.scss'
                },
                options: {
                    useSingleQuotes: false
                }
            }
        },

        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
                ]
            },
            dist: {
                src: 'static/css/**/*.css'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'static/img',
                    src: '**/*.{gif,jpeg,jpg,png,svg}',
                    dest: 'static/img'
                }]
            }
        },

        jshint: {
            options: {
                force: false,
                jshintrc: 'build/js/.jshintrc'
            },
            all: ['build/js/src/**/*.js']
        },

        concat: {
            dist: {
                src: [
                    'build/js/**/*.js'
                ],
                dest: 'static/js/custom.js'
            }
        },

        lunr_index: {
            options: {
                source: 'content',
                dest: 'static/js/lunr-index.json'
            }
        },

        hugo: {
            options: {
                source: 'content',
                dest: 'public'
            }
        },

        'gh-pages': {
            push: {
                options: {
                    base: 'public'
                },
                src: ['**']
            }
        }

    });

    grunt.registerTask('default', [
        'build'
    ]);

    /*
     * Builds the whole site from scratch
     *
     * clean: revisions and minifies files
     * hugo: prepares public/ HTML from content
     * css: builds css from scss
     * js: prepares javascript
     * index: runs lunr index
     */
    grunt.registerTask('build', [
        'clean',
        'hugo',
        'css',
        'js',
        'index'
    ]);

    /*
     * Builds the whole site from scratch - in dev mode
     *
     * clean: revisions and minifies files
     * hugo: prepares public/ HTML from content
     * css: builds css from scss
     * js: prepares javascript
     * index: runs lunr index
     */
    grunt.registerTask('buildDev', [
        'clean',
        'hugo:dev',
        'css',
        'js',
        'index'
    ]);

    /*
     * This task builds and prepares css
     *
     * sass_globbing: supports wildcard @import statements
     * sass: builds scss files into css
     * postcss: prefixes css statements with browser-specific versions
     */
    grunt.registerTask('css', [
        'sass_globbing',
        'sass',
        'postcss'
    ]);


    grunt.registerTask('index', [
        'lunr_index'
    ]);

    /*
     * Allows live editing
     *
     * connect: creates a server
     * buildDev: build site in dev mode
     * watch: waits for changes to source files and re-runs grunt tasks
     */
    grunt.registerTask('edit', [
        'connect',
        'buildDev',
        'watch'
    ]);

    /*
     * Deploys dist (public/) files to gh-pages branch
     */
    grunt.registerTask('push', [
        'gh-pages:push'
    ]);

    /*
     * Javscript tasks
     */
    grunt.registerTask('js', [
        'concat',
        'jshint'
    ]);

    /*
     * Creates lunr.js index of content
     */
    grunt.registerTask("lunr_index", function() {

        grunt.log.writeln("Build lunr index");

        var options = this.options();

        var indexPages = function() {
            var pagesIndex = [];
            grunt.file.recurse(options.source, function(abspath, rootdir, subdir, filename) {
                grunt.verbose.writeln("Parse file:",abspath);
                pagesIndex.push(processFile(abspath, filename));
            });

            return pagesIndex;
        };

        var processFile = function(abspath, filename) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename);
            } else {
                pageIndex = processMDFile(abspath, filename);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath)
                .chompLeft(options.source).s;
            return {
                title: pageName,
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
            };
        };

        var processMDFile = function(abspath, filename) {
            var pageIndex;
            try {
                var ydata = yfm.read(abspath);
                var frontMatter = ydata.context;
            } catch (e) {
                grunt.log.error(e.message);
            }

            var href = S(abspath).chompLeft(options.source).chompRight(".md").s;

            // href for index.md files stops at the folder name
            if (filename === "index.md") {
                href = S(abspath).chompLeft(options.source).chompRight(filename).s;
            }

            // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: href,
                content: S(ydata.content).trim().stripTags().stripPunctuation().s
            };

            return pageIndex;
        };

        grunt.file.write(options.dest, JSON.stringify(indexPages()));
    });

    /*
     * Compiles hugo content into HTML
     */
    grunt.registerTask('hugo', function (target) {
        var options = this.options();
        var target = target || 'final';

        var args, done;
        done = this.async();
        args = [
            '--destination=./' + options.dest
        ];

        if (target === 'dev') {
            args.push('--config=' + path.resolve('./config-dev.yaml'));
        } else {
            args.push('--config=' + path.resolve('./config.yaml'));
        }

        // Run hugo
        grunt.util.spawn({
            cmd: 'hugo',
            args: args,
            opts: {
                stdio: 'inherit'
            }
        }, function (error, result, code) {
            if (error) {
                done(error);
            }

            done();
        });
    });
};
