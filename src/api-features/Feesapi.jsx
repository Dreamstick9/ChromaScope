const api = 'api/v1/fees/recommended';
const mock = {
    "fastestFee": 54,
    "halfHourFee": 1,
    "hourFee": 32,
    "economyFee": 8,
    "minimumFee": 1
}


async function FetchFee() {
    try{
        // let k = await fetch(api)
        // let data = await k.json()
        return mock
    }catch(error){
        console.log(error)
        return []
    }
        
        
}
export default FetchFee