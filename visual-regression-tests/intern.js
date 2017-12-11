define({
    
        environments: [
            { browserName: 'chrome' }
        ],
    
        maxConcurrency: 3,
    
        tunnel: 'SauceLabsTunnel',
    
        tunnelOptions: {
            accessKey: '1118483b-7ed0-4df9-a4b7-b8ac8330f321',
            username: 'elliottgreaves'
        },
    
        loaderOptions: {
            packages: [
                { name: 'intern-visual', location: "node_modules/intern-visual/src" }
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
            { id: 'intern-visual/reporters/VisualRegression', baselineLocation: './visual-test/baselines', reportLocation: './report' }
        ],
    
        excludeInstrumentation: /^(tests|node_modules)/
    });    