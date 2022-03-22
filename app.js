const express = require('express');
const utilityFunctions = require('./utility');
const TradeData = require('./models/TradeData');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.send("Trading Statistics");
})

app.get('/api/alltrades', (req,res) => {
    res.json(utilityFunctions.getTradesFromJsonFile());
})

app.get('/api/numberoftrades', (req, res) => {
    res.send(utilityFunctions.calculateNumberOfTrades());
})

app.post('/api/addtrade', (req, res) => {
    let newTrade = new TradeData(req.body.ticker, req.body.entry, req.body.exit, req.body.shares);
    newTrade.calculateProfitOrLoss();
    utilityFunctions.addTradeToJsonFile(newTrade);
    res.send(`${newTrade.ticker}`);
})


app.get('/api/avgprofit', (req, res) => {
    res.send(utilityFunctions.calculateAvgProfit());
})

app.get('/api/avgloss', (req, res) => {
    res.send(utilityFunctions.calculateAvgLoss());
})

app.get('/api/winrate', (req, res) => {
    res.send(utilityFunctions.calculateWinRate());
})

app.listen(8000, () => {
    console.log('Listening on port 8000...');
})