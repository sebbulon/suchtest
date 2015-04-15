/**
 * Created by sebastian.weikart on 14/04/2015.
 */

var Sequelize = require('sequelize');

module.exports = function (config) {

    // TODO replace ecerything with config parameters
    //var sequelize = new Sequelize('main',null,null, {
    //    dialect: 'sqlite',
    //    storage: config.rootPath + '/db/catalogue.sqlite3'
    //});

    require(config.rootPath + 'server/common/modelSingleton').setup(config.rootPath + 'server/api/models', 'main', null, null, {
        dialect: 'sqlite',
        storage: config.rootPath + '/db/catalogue.sqlite3'
    });
    //sequelize.connect();
    //sequelize.on('error', console.error.bind(console, 'database connection error... '));
    //db.once('open', function callback() {
    //    console.log('db opened');
    //});
}