# grunt-pure-grids

> Generate custom grid units for [Pure Grids](http://purecss.io/grids).

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pure-grids --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pure-grids');
```

## The "pure_grids" task

### Overview
In your project's Gruntfile, add a section named `pure_grids` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    pure_grids: {
        responsive: {
            dest: 'path/to/my-responsive-grid.css',
            options: {
                units: 12, // 12-column grid
                mediaQueries: {
                    sm: 'screen and (min-width: 35.5em)', // 568px
                    md: 'screen and (min-width: 48em)',   // 768px
                    lg: 'screen and (min-width: 64em)',   // 1024px
                    xl: 'screen and (min-width: 80em)'    // 1280px
                }
            }
        }
    }
});
```

### Options

#### options.units
Type: `Integer` || `Array`
Default value: `undefined`

Determines how many columns your grid should have. If `undefined`, it only generates the media queries for a 5ths and 24ths-column grid (same as Pure's Default Grid).

#### options.mediaQueries
Type: `Object`
Default value: `undefined`

Used to generate responsive grids. Pass an object where the `key` denotes the grid key, and the `property` denotes the media query breakpoint (e.g., `{ FOO: 'screen and (min-width: 48em)' }` would generate `.pure-u-FOO-*` class names that become active when the viewport is `>= 48em`).

#### options.includeOldIEWidths
Type: `Boolean`
Default value: `true`

Determines whether or not each grid unit should have an accompanying `*width` value, to make it work properly in IE 6/7.

#### options.includeReducedFractions
Type: `Boolean`
Default value: `true`

Determines whether or not the output should only include the reduced fractions. Setting this to `true` means that all grid classnames would be provided in their regular **and** reduced fractional form reduced form (ex: `.pure-u-md-2-4` and `.pure-u-md-1-2` will be outputted). Setting this to `false` will only output class names in their regular form where the denominator is always equal to the value provided at `options.units`.

#### options.decimals
Type: `Integer`
Default value: `4`

Determines the width accuracy when constructing the individual grid units. You shouldn't need more than 4 decimals, but you may want fewer.

#### options.selectorPrefix
Type: `String`
Default value: `.pure-u-`

Determines the prefix for each grid class name.



### Usage Examples

#### No Media Queries
In this example, we just create a regular 12-column Pure grid.

```js
grunt.initConfig({
    pure_grids: {
        twelveCols: {
            dest: 'path/to/my-grid.css',
            options: {
                units: 12, //12-column grid
            }
        }
    }
});
```

#### Responsive Grid
In this example, we create a 6-column responsive grid with breakpoints at `48em` and `60em`. We also customize the prefix to just be `.col-`.

```js
grunt.initConfig({
    pure_grids: {
        responsive: {
            dest: 'path/to/my-responsive-grid.css',
            options: {
                units: 6, // 6-column grid,
                mediaQueries: {
                    md: 'screen and (min-width: 48em)', //768px
                    lg: 'screen and (min-width: 60em)'  //960px
                },
                selectorPrefix: '.col-'
            }
        }
    }
});
```

In my HTML, I can now write something like this:

```html
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.4.2/pure-min.css">
<link rel="stylesheet" href="path/to/my-responsive-grid.css">

..

<div class="pure-g">
    <!--
        an element which is:
        width: 100% < 48em,
        width: 50% >= 48em,
    and width: 25% >= 60em
    -->
    <div class="col-1 col-md-1-2 col-lg-1-4">
        ...
    </div>
</div>

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2.0.0: Upgrade to rework-pure-grids@2.0.0
* 1.0.2: Update README examples, _again_.
* 1.0.1: Update README examples.
* 1.0.0: __Stable__, Added unit tests, moved to Yahoo org on GitHub.
* 0.0.2: Added docs to README. (@tilomitra)
* 0.0.1: Initial release on npm.

## License
This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/yahoo/grunt-pure-grids/blob/master/LICENSE
