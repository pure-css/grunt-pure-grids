'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.pure_grids = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  custom_units: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_units.css');
    var expected = grunt.file.read('test/expected/custom_units.css');
    test.equal(actual, expected, 'should output Pure Grids CSS for 12 units.');

    test.done();
  },

  custom_mqs: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_mqs.css');
    var expected = grunt.file.read('test/expected/custom_mqs.css');
    test.equal(actual, expected, 'should output Pure Grids CSS for 12 units with custom Media Queries.');

    test.done();
  }
};
