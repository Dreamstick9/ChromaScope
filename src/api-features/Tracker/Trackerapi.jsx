const api = 'api/v1/difficulty-adjustment';
const mock = {
  "progressPercent": 45.2,
  "difficultyChange": 1.25,
  "estimatedRetargetDate": 1744896000000,
  "remainingBlocks": 1105,
  "remainingTime": 663000000,
  "previousRetarget": -0.5,
  "nextRetargetHeight": 838656,
  "timeAvg": 592000,
  "timeOffset": -8000
}


async function FetchTrack(){
    try{
        // let k = await fetch(api)
        // let data = await k.json()
        return mock
    }catch(error){
        console.log(error)
        return []
    }
}

export {FetchTrack}
export default FetchTrack