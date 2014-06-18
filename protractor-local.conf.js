exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    capabilities: {
        'browserName': 'phantomjs'
    },
    rootElement: 'html',
    baseUrl: 'http://localhost:9002/'
};