import {
    request
  } from "@/network/Axios";
  
export function getAllorder(){
    return request({
      url:'/order/allorder',
    }) 
  }
