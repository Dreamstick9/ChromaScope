import React from "react";

const api = '/api/v1/blocks';
import mockData from '../../api.json';

const mock = mockData;

async function fetchBlockInfo(){
    try{
        // let k = await fetch(api);
        // let data = await k.json()
        return mock
    }catch(error){
        console.log(error)
        return []
    }
}
export { fetchBlockInfo }
export default fetchBlockInfo
