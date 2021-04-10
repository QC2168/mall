import {request} from "./request"

export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url: "/recommend",
    })
}
export class Goods {
    constructor(columns, itemInfo, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.price = itemInfo.price;
        this.discountDesc = itemInfo.discountDesc;
        this.services = services
        this.columns = columns
    }
}

export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.shopLogo = shopInfo.shopLogo;
        this.cFans = shopInfo.cFans;
        this.cGoods = shopInfo.cGoods;
        this.cSells = shopInfo.cSells;
    }
}
