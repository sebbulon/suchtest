/**
 * Created by sebastian.weikart on 14/04/2015.
 */
var orm = require("../../common/modelSingleton")
    , Seq = orm.Seq();

// define review model to be consumed by our modelSingleton initialiser
module.exports = {
    model: {
        id: {
            type: Seq.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: Seq.INTEGER,
            field: 'product_id'
        },
        description: {
            type: Seq.TEXT
        }
    },
    relations: {
        belongsTo: "products"
    },
    options: {
        timestamps: false,
        tableName: 'reviews'
    }
}
