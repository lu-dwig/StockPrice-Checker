'use strict';
const StockModel = require("../models").StockModel;
const fetch = require ("node-fetch");


async function saveStock(stock, like, ip) {
  let saved = {};
  const foundStock = await findStock(stock);
  if (!foundStock) {
    const createStock = await createStock(stock, like, ip); 
    saved = createStock;
    return saved;
  } else {
    if (like && foundStock.likes.indexOf(ip) === -1) {
      foundStock.likes.push(ip);
    }
    saved = await foundStock.save();
    return saved;
  }
}

async function getStock(stock){
  const response = await fetch(
    `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock}/quote`
  );
  const{ symbol, latestPrice } = await response.json();
  return { symbol, latestPrice };
}

module.exports = function (app) {

  // https://stock-price-checker-proxy.freecodecamp.rocks/

  app.route('/api/stock-prices').get(async function (req, res){
      const { stock, like } = req.query;
      const { symbol, latestPrice } = await getStock(stock);
      if (!symbol){
        res.jsons({ stockData: { likes: like ? 1 :0 } });
        return;
      }
      // if (!stocks || stocks.length === 0) {
      //   return res.status(400).json({ error: 'No stocks provided' });
      // }
    });
    
};
