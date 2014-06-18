exports.config = {
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    multiCapabilities: [{
        'browserName': 'firefox',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': "SaTest build " + process.env.TRAVIS_BUILD_NUMBER
    }, {
        'browserName': 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': "SaTest build " + process.env.TRAVIS_BUILD_NUMBER
    }],
    rootElement: 'html',
    baseUrl: 'http://localhost:9002/'
};