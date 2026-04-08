import { useState, useEffect } from "react";
import './Tracker.css'
import {FetchTrack} from './Trackerapi';

function  Track(){
    const [tracker, setTrack]  = useState(null)
    useEffect(()=>{
        FetchTrack().then((i)=>{
            console.log(i)
            setTrack(i)
        })
    },[])
    if(!tracker){
        return <p>Loading...</p>
    }
    return (
        <>
        <h1>Difficulty Adjustment Tracker</h1>
        <h2>Progress:- {(tracker.progressPercent).toFixed(2)}%</h2>
        <h2>Remaining Blocks:- {tracker.remainingBlocks}</h2>
        <h2>Remaining Time:- {((tracker.remainingTime)/(3600000*24)).toFixed(0)} days</h2>
        <h2>Expected Change:- {tracker.difficultyChange}</h2>
        <h2>Expected Date :- {new Date(tracker.estimatedRetargetDate).toLocaleDateString()}</h2>
        </>
    )
}
export default Track