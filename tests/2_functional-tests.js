const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    suite("5 functional get request tests", function () {
        test("Viewing one stock: GET request to /api/stock-prices/", function (done) {
          chai
            .request(server)
            .get("/api/stock-prices/")
            .set("content-type", "application/json")
            .query({ stock: "TSLA" })
            .end(function (err, res) {
              assert.equal(res.status, 200);
              assert.equal(res.body.stockData.stock, "TSLA");
              assert.exists(res.body.stockData.price, "TSLA has a price");
              done();
            });
        });
        test("Viewing one stock and liking it: GET request to /api/stock-prices/", function (done) {
            chai
              .request(server)
              .get("/api/stock-prices/")
              .set("content-type", "application/json")
              .query({ stock: "GOLD", like: true })
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.stockData.stock, "GOLD");
                assert.equal(res.body.stockData.likes, 1);
                assert.exists(res.body.stockData.price, "GOLD has a price");
                done();
              });
          });
    });
});
