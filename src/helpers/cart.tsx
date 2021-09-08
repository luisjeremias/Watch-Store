
import * as React from 'react'

let allCartData:any = [];
let badgeCount:any = [];
const Pushcart = (cdata?:any) =>{
allCartData = cdata;
badgeCount = [...badgeCount,cdata]

}

export {Pushcart,allCartData,badgeCount}