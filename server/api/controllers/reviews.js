/**
 * Created by sebastian.weikart on 15/04/2015.
 */

var orm = require("../../common/modelSingleton");

exports.createReviews = function(req, res, next) {
    console.log("what's in the body?" + JSON.stringify(req.body));
    var reviewData = req.body;
    console.log("building review with request data" + JSON.stringify(reviewData));
    var Review = orm.model("reviews");
    var newReview = Review.build(
        reviewData
    );

    newReview.save()
        .then(function(anotherTask) {
            console.log("successfully saved review");
            res.send(newReview);
        }).catch(function(error) {
            console.log("some error happened: " + error);
            next(error);
        })

}