define({
    environments: [
        { browserName: 'chrome' }
    ],

    maxConcurrency: 3,

    tunnel: 'SauceLabsTunnel',

    tunnelOptions: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
    },

    loaderOptions: {
        packages: [
            { name: 'intern-visual', location: 'node_modules/intern-visual/src' }
        ]
    },

    loaders: {
        'host-node': 'requirejs',
        'host-browser': 'node_modules/requirejs/require.js'
    },

    functionalSuites: [
        'visual-regression-tests/test-suits/sample'
    ],

    reporters: [
        'Runner',
        {
            id: 'intern-visual/reporters/VisualRegression',
            baselineLocation: './visual-test/baselines',
            reportLocation: './report'
        }
    ],

    excludeInstrumentation: /^(tests|node_modules)/
});
