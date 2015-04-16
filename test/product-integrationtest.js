/**
 * Created by sebastianweikart on 16/04/15.
 */


var hippie = require('hippie');
var server = require('../app');

describe('Server', function () {
    describe('/api/products endpoint', function () {
        it('returns 10 products with ID 1 to 10', function (done) {
            hippie(server)
                .json()
                .get('/api/products?page=0&per_page=10')
                .expectStatus(200)
                .end(function(err, res, body) {
                    if (err) throw err;
                    done();
                });
        });
    });
});