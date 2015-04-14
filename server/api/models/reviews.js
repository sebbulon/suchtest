/**
 * Created by sebastian.weikart on 14/04/2015.
 */
var Sequelize = require('sequelize');

// define product model -
var Review = Sequelize.define('Reviews', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId: {
        type: Sequelize.INTEGER,
        field: 'product_id'
    },
    description: {
        type: Sequelize.TEXT
    }
}, {
    tableName: 'reviews'
});