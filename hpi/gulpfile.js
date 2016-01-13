var builder = require('jenkins-js-builder');

//
// Bundle the modules.
//
builder.bundle('index.js', 'jenkins-js-widgets')
    .withExternalModuleMapping('jquery-detached', 'jquery-detached:jquery2')
    .less('./js/style.less')
    .asJenkinsModuleResource()
    .export();
