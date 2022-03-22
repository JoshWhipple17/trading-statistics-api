const fs = require('fs');

// get trades from json file
const getTradesFromJsonFile = () => {
    try {
        return JSON.parse(fs.readFileSync('./data/test.json'));
    } catch(err) {
        if(err.message === "Unexpected end of JSON input"){
            //this fixes the issue of the file being blank and throwing a syntax error because of it being blank
            let emptyTrades = [];
            let data = JSON.stringify(emptyTrades, null, 2);
            fs.writeFileSync('./data/test.json', data);
            return JSON.parse(fs.readFileSync('./data/test.json'));
        } 
        else if(err.message === "ENOENT: no such file or directory, open './data/test.json'"){
            let emptyTrades = [];
            let data = JSON.stringify(emptyTrades, null, 2);
            fs.writeFileSync('./data/test.json', data);
            return JSON.parse(fs.readFileSync('./data/test.json'));;
        }
        else {
            throw err.message;
        }
    }
}

// add trade to json file
const addTradeToJsonFile = (newTrade) => {
    let trades = getTradesFromJsonFile();
    trades.push(newTrade);

    let data = JSON.stringify(trades, null, 2);
    fs.writeFileSync('./data/test.json', data);
}

// update trade in json file

// delete trade from json file

// calculate the total number of trades
const calculateNumberOfTrades = () => {
    return getTradesFromJsonFile().length.toString();
}

// calculate avg profit
const calculateAvgProfit = () => {
    let allTrades = this.getTradesFromJsonFile();
    if(allTrades.length == 0) return "0";
    console.log("All Trades", allTrades);

    let profitableTrades = allTrades.filter(trade => trade.profitOrLoss > 0);
    if(profitableTrades.length == 0) return "0";
    console.log("Profitable Trades", profitableTrades);

    let sum = 0;
    profitableTrades.forEach(trade => {
        sum += trade.profitOrLoss;
    });

    let avgProfit = sum / profitableTrades.length;
    return avgProfit.toString();
}

// calculate avg loss
const calculateAvgLoss = () => {
    let allTrades = this.getTradesFromJsonFile();
    if(allTrades.length == 0) return "0";
    console.log("All Trades", allTrades);

    let losingTrades = allTrades.filter(trade => trade.profitOrLoss <= 0);
    if(losingTrades.length == 0) return "0";
    console.log("Losing Trades", losingTrades);

    let sum = 0;
    losingTrades.forEach(trade => {
        sum += trade.profitOrLoss;
    });

    let avgProfit = sum / losingTrades.length;
    return avgProfit.toString();
}

// calculate avg rrr
const calculateAvgRRR = () => {

}

// calculate win rate
const calculateWinRate = () => {
    let allTrades = this.getTradesFromJsonFile();
    if(allTrades.length == 0) return "0";
    console.log("All Trades", allTrades);

    let profitableTrades = allTrades.filter(trade => trade.profitOrLoss > 0);
    if(profitableTrades.length == 0) return "0";
    console.log("Profitable Trades", profitableTrades);

    return (profitableTrades.length / allTrades.length * 100).toString();
}

// get the last time updated
const getLastTimeUpdated = () => {

}

// exporting
exports.calculateNumberOfTrades = calculateNumberOfTrades;
exports.addTradeToJsonFile = addTradeToJsonFile;
exports.getTradesFromJsonFile = getTradesFromJsonFile;
exports.calculateAvgProfit = calculateAvgProfit;
exports.calculateAvgLoss = calculateAvgLoss;
exports.calculateWinRate = calculateWinRate;