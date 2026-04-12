const api ='/api/v1/mining/pools/1w';

async function FetchMining(){
    try{
        let k = await fetch(api)
        let data = await k.json()
        return data
    }catch(error){
        console.log(error)
        return []
    }

}
export { FetchMining }
export default FetchMining
