var maxProfit = function(prices) {
    let maxProfit =0;
    let minCost = prices[0];

    for (let i =0; i <prices.length; i++){
        if(prices[i]-minCost > maxProfit){
            maxProfit = prices[i]-minCost;
        }

        if(prices[i] < minCost){
            minCost = prices[i]
        }
    }
    return maxProfit;
};
