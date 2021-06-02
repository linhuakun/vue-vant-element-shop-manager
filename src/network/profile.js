import {request} from "@/network/Axios";

export function getSign(){
    return request({
      url:'/users/sign'
    })
  }

export function getOrder(){
    return request({
      url:'/order/getOrder'
    })
  }