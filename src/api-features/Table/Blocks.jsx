import React from "react";

const api = '/api/v1/blocks';


async function fetchBlockInfo(){
    try{
        let k = await fetch(api);
        let data = await k.json()
        return data
    }catch(error){
        console.log(error)
        return []
    }
}
export { fetchBlockInfo }
export default fetchBlockInfo
