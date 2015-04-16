/**
 * Created by sebastianweikart on 16/04/15.
 */


var hippie = require('hippie');
var server = require('../app');
var should = require('should');
var assert = require('chai').assert;

describe('Server', function () {
    describe('/api/products endpoint', function () {
        it('returns 10 products with ID 1 to 10', function (done) {
            hippie(server)
                .json()
                .get('/api/products?page=0&per_page=10')
                .expectStatus(200)
                .end(function(err, res, body) {
                    if (err) throw err;
                    assert.lengthOf(JSON.parse(res.body), 10, "response body has 10 products");
                    done();
                });
        });
    });
});