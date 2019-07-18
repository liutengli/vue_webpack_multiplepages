import http from './axios'
// 平台 - 油品报价列表
export const oilPriceList = (params) => {
  return http.post('/refinery_price/page', params)
}
