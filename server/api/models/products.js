/**
 * Created by sebastian.weikart on 14/04/2015.
 */

var Sequelize = require('sequelize');
var Reviews = require('reviews');
// define product model -
var Product = Sequelize.define('Products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        externalId: {
            type: Sequelize.STRING,
            field: 'external_id',
            unique: true,
            allowNull: false
        },
        details: {
            type: Sequelize.TEXT,
            field: 'details_json',
            notEmpty: true,
            allowNull: false,
            set      : function(val) {
                this.setDataValue('details', JSON.stringify(val));
            },
            get     : function() {
                return JSON.parse(this.getDataValue('details'));
            }
        }
    }, {
        tableName: 'products'
    }
);

