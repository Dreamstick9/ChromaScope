const api ='api/mempool';


async function fetchmempool(){
    try{
        let k = await fetch(api)
        let data = await k.json()
        return data
    }catch(error){
        console.log(error)
        return null
    }
}
export { fetchmempool }
export default fetchmempool
