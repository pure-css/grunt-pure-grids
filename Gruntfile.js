/*
 * grunt-pure-grids
 * https://github.com/yahoo/grunt-pure-grids
 *
 * Copyright 2013 Yahoo! Inc.
 * Licensed under the Yahoo! Inc. BSD license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    pure_grids: {
      custom_units: {
        dest: 'tmp/custom_units.css',
        options: {
          units: 12
        }
      },

      custom_mqs: {
        dest: 'tmp/custom_mqs.css',
        options: {
          units: 12,
          mediaQueries: {
            sm : 'screen and (min-width: 35.5em)', // 568px
            med: 'screen and (min-width: 48em)',   // 768px
            lrg: 'screen and (min-width: 58em)',   // 928px
            xl : 'screen and (min-width: 75em)'    // 1200px
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'pure_grids', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
