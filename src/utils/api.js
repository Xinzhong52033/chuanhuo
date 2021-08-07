import {request} from './request.js';
/*-------园区-------*/

// 系统人数汇总
export const selectCountData = (param)=>{
    return request({
        url:'/sc-server/userController/selectCountData',
        method:'get',
        params:param
    })
}

// 川货品类
export const selectGroupCategory = (param)=>{
    return request({
        url:'/sc-server/commodityCategoryController/selectGroupCategory',
        method:'get',
        params:param
    })
}

// 名优品牌
export const goodbrand= (param)=>{
    return request({
        url:'/sc-server/supplierCategoryController/selectGroupCategory',
        method:'get',
        params:param
    })
}

// 商品类型
export const goodtype= (param)=>{
    return request({
        url:'/sc-server/commodityController/selectCommodityType',
        method:'get',
        params:param
    })
}

export const login= (param)=>{
    return request({
        url:'/sc-server/userController/login',
        method:'get',
        params:param
    })
}
export const register = (param)=>{//post
    return request({
      url: '/sc-server/userController/registered',
      method: 'post',
      data: param
    })
}
export const selectCityList = (param)=>{
    return request({
        url:'/sc-server/quotesController/selectCityList',
        method:'get',
        params:param
    })
}
// 市场行情
export const getLine = (param)=>{
    return request({
        url:'/sc-server/quotesController/selectQuotesCountData',
        method:'get',
        params:param
    })
}

// 价格指数
export const getPrice = (param)=>{
    return request({
        url:'/sc-server/priceIndexController/selectPriceIndexData',
        method:'get',
        params:param
    })
}

// 库存统计
export const getInventory = (param)=>{
    return request({
        url:'/sc-server/stockCountController/selectStockCountData',
        method:'get',
        params:param
    })
}

// 商品类型
export const getProductType = (param)=>{
    return request({
        url:'/sc-server/commodityController/selectCommodityType',
        method:'get',
        params:param
    })
}

// 商品类型
export const getGoodType = (param)=>{
    return request({
        url:'/sc-server/commodityController/selectCommodityTypeById',
        method:'get',
        params:param
    })
}
