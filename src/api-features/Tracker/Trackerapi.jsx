const api = 'api/v1/difficulty-adjustment';

async function FetchTrack(){
    try{
        let k = await fetch(api)
        let data = await k.json()
        return data
    }catch(error){
        console.log(error)
        return []
    }
}

export {FetchTrack}
export default FetchTrack