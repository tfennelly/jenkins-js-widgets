var builder = require('jenkins-js-builder');

// It's a maven project, but we don't want to locate the src files in the
// default spots
builder.src('./js');
builder.tests('./spec');

//
// Bundle the modules.
//
builder.bundle('index.js', 'jenkins-js-widgets')
    .withExternalModuleMapping('jquery-detached', 'jquery-detached:jquery2')
    .less('./js/style.less')
    .asJenkinsModuleResource()
    .export();
