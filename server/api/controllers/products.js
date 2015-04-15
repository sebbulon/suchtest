/**
 * Created by sebastian.weikart on 15/04/2015.
 */


var orm = require("../../common/modelSingleton");

exports.getProducts = function (req, res) {

    // TODO add pagination and optional loading of reviews
    var getReviews = false;
    var Product = orm.model("products");
    Product.findAll().then(function (products) {
        console.log("finding products...");
        console.log(JSON.stringify(products));
        res.send(products);
    });


};

exports.createProduct = function (req, res, next) {

};