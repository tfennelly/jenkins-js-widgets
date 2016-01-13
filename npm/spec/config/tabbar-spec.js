var jsTest = require("jenkins-js-test");

describe("Config tabbar tests", function () {

    it("- test", function (done) {
        jsTest.onPage(function() {
            var configTabBar = jsTest.requireSrcModule('config/tabbar');
            var firstTableMetadata = configTabBar.addTabsOnFirst();
            
            var jQD = require('jquery-detached');
            var $ = jQD.getJQuery();
            
            expect($('.section-header-row', firstTableMetadata.configTable).size()).toBe(5);
            expect(firstTableMetadata.length).toBe(4);
            expect($('.tabBar .tab').size()).toBe(4);
            
            // TODO: lots more tests !!!
            
            done();
        }, 'config/workflow-config.html');
    });
});

// TODO: lots more tests !!!