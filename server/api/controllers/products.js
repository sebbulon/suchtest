/**
 * Created by sebastian.weikart on 15/04/2015.
 */


var orm = require("../../common/modelSingleton");

exports.getProducts = function (req, res) {

    // TODO add pagination and optional loading of reviews
    var getReviews = false;
    var page = req.query.page;
    var perPage = req.query.per_page ? req.query.per_page : 10;  // default page size to 10
    var Product = orm.model("products");

    if(page) {
        Product.findAll(
            {
                offset: page * perPage,
                limit: perPage,
                include: [{ all: true }]
            }
        ).then(function (products) {
            console.log("finding products...");
            console.log(JSON.stringify(products));
            res.send(products);
        });

    } else {

        Product.find( {
            limit: perPage  // limit to default page size
        }).then(function (products) {
            console.log("finding products...");
            console.log(JSON.stringify(products));
            res.send(products);
        });
    }


};

exports.createProduct = function (req, res) {

};