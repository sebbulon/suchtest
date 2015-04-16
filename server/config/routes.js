/**
 * Created by sebastian.weikart on 14/04/2015.
 */

var products  = require('../api/controllers/products'),
    reviews = require('../api/controllers/reviews');

module.exports = function (app) {


    app.get('/api/products', products.getProducts);

   // app.get('/api/reviews', reviews.getReviews);

    app.post('/api/reviews', reviews.createReviews);

    app.get('/partials/*', function (req, res) {
        console.debug('request for partial ' + req.params[0]);  // todo replace all console calls with logger
        res.render('../../public/app/' + req.params[0]);

    });

    app.get('/', function (req, res, next) {
        console.log('request for ' + req.params[0]);
        if (req.user) {
            req.user.salt = ''; // TODO remove salt - find better solution
        };

        res.render('index', {
            title: 'Express',
            bootstrappedUser: req.user
        });
    });


    app.all('/api/*', function (req, res) {
        console.log('request for ' + req.params[0]);
        res.sendStatus(404);
    });


    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}