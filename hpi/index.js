/**
 * Top level facade for bundling (exporting/accessing) the underlying modules from
 * an external module.
 */

exports.configTabBar = function() {
    return require('./js/config/tabbar.js');
};