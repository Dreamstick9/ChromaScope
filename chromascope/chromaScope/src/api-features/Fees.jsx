import { useState, useEffect } from "react";
import './Fees.css'
import FetchFee from "./Feesapi";


function fee(){
    const [fees, showFees] = useState(null)
    useEffect(()=>{
        FetchFee().then((result)=>{
            console.log(result)
            showFees(result)
        })
    },[])
    if(!fees){
        return <p>Loading...</p>

    }
    return (
        <>
        <h1>Fee Estimator</h1>
        <h2>Highest Fee:- {fees.fastestFee} sat/vb</h2> 
        <h2>Standard Fee:- {fees.hourFee} sat/vb</h2>
        <h2>Economy Fee:- {fees.economyFee} sat/vb</h2>
        </>
    )
}
export default fee