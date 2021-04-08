export default {
    //计算数量
    getConst(state){
        return state.Products.length;
    },
    getSum(state) {
        let sum = 0;
        let selected = state.Products.filter(item => item.isSelected);
        selected.forEach((item) => {
            item.lowNowPrice = Number(item.lowNowPrice);
            let productPrice = item.lowNowPrice * item.const;
            sum += productPrice
        })
        return sum.toFixed(2)
    },
    isAll(state) {
        return state.Products.every(item => item.isSelected)
    },

}