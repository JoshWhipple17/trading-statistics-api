module.exports = class TradeData {
    constructor(ticker,entry,exit,shares){
        this.ticker = ticker;
        this.entry = entry;
        this.exit = exit;
        this.shares = shares;
    }

    calculateProfitOrLoss(){
        this.profitOrLoss = (this.exit * this.shares) - (this.entry * this.shares);
    }
}