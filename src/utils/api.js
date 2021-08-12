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

// 获取商品数据
export const getGoodSList = (param)=>{
    return request({
        url:'/sc-server/commodityController/selectCommodityByType',
        method:'get',
        params:param
    })
}

// 需求类型

export const getDemandType = (param)=>{
    return request({
        url:'/sc-server/demandDetailsController/selectDemandDetailType',
        method:'get',
        params:param
    })
}

// 查询商品详情
export const getGoodDetail = (param)=>{
    return request({
        url:'/sc-server/commodityController/selectCommodityById',
        method:'get',
        params:param
    })
}

// 获取需求列表
export const getDemandList = (param)=>{
    return request({
        url:'/sc-server/demandDetailsController/selectDemandDetailByType',
        method:'get',
        params:param
    })
}

// 留言
export const sendMessage = (param)=>{
    return request({
        url:'/sc-server/commodityCommentController/insertCommodityComment',
        method:'post',
        params:param
    })
}

// 需求详情
export const getDemandDetail = (param)=>{
    return request({
        url:'/sc-server/demandDetailsController/selectDemandDetailById',
        method:'get',
        params:param
    })
}

// 获取供应商详情
export const getCompanyInfo = (param)=>{
    return request({
        url:'/sc-server/parkCompanyInfoController/selectOne',
        method:'get',
        params:param
    })
}

// 发布需求
export const sendDemand = (param)=>{
    return request({
        url:'/sc-server/demandDetailsController/insertDemandDetails',
        method:'post',
        data:param
    })
}

// 获取用户信息
export const getUserInfo = (param)=>{
    return request({
        url:'/sc-server/userController/selectById',
        method:'get',
        params:param
    })
}

// 修改用户信息
export const updateUserInfo = (param)=>{
    return request({
        url:'/sc-server/userController/updateById',
        method:'post',
        data:param
    })
}

// 获取园区信息
export const getParKInfo = (param)=>{
    return request({
        url:'/park-server/parkController/selectOne',
        method:'get',
        params:param
    })
}


// 获取公司信息
export const getCompany = (param)=>{
    return request({
        url:'/park-server/companyInfoController/selectCompanyByCondition',
        method:'get',
        params:param
    })
}

// 获取公司信息
export const getCompanyDetail = (param)=>{
    return request({
        url:'/park-server/companyInfoController/selectOne',
        method:'get',
        params:param
    })
}


