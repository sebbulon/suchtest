/**
 * Created by sebastian.weikart on 14/04/2015.
 */

var orm = require("../../common/modelSingleton")
    , Seq = orm.Seq();

// define product model to be consumed by our modelSingleton initialiser
module.exports = {
    model: {
        id: {
            type: Seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        externalId: {
            type: Seq.STRING,
            field: 'external_id',
            unique: true,
            allowNull: false
        },
        details: {
            type: Seq.TEXT,
            field: 'details_json',
            notEmpty: true,
            allowNull: false,
            set: function (val) {
                this.setDataValue('details', JSON.stringify(val));
            },
            get: function () {
                return JSON.parse(this.getDataValue('details'));
            }
        }
    },
    relations: {
        hasMany: "reviews"
    },
    options: {
        timestamps: false,
        tableName: 'products'
    }


}

