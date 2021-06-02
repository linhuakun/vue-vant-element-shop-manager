import {
    request
  } from "@/network/Axios";
  
export function getusersdata(){
    return request({
      url:'/users/manager/getusersdata',
    }) 
  }