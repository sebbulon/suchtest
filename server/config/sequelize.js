/**
 * Created by sebastian.weikart on 14/04/2015.
 */

var Sequelize = require('sequelize');

module.exports = function() {
    var sequelize = new Sequelize('main', {
        host: 'localhost',
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

        // SQLite only
        storage: '../../db/catalogue.sqlite3'
    });
    sequelize.connect();
    sequelize.on('error', console.error.bind(console, 'database connection error... '));
    db.once('open', function callback() {
        console.log('db opened');
    });
}