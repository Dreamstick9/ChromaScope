const api = 'api/v1/fees/recommended';



async function FetchFee() {
    try{
        let k = await fetch(api)
        let data = await k.json()
        return data
    }catch(error){
        console.log(error)
        return []
    }
        
        
}
export { FetchFee }
export default FetchFee
