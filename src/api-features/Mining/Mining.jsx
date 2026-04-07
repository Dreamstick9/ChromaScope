import { useState, useEffect } from "react";
import './Mining.css'
import { FetchMining } from './Miningapi';
function Mines(){
    const [mine, showmine] = useState(null)
    useEffect(()=>{
        FetchMining().then((result)=>{
            console.log(result)
            showmine(result)
        })
    },[])
    if(!mine){
        return <h3>Loading...</h3>
    }
    return (
        <>
        <h1>Mining Pool Distribution</h1>
        {
            mine.pools.map((i)=>{
            return (
                <a href={i.link} target="_blank" className="mining_link">
                    <h2 key={i.poolId} style={{display:'flex', justifyContent:'space-between'}}>
                        <span>{i.rank}{`)`} {i.name}</span>
                        <span className="bro">{i.blockCount} blocks</span>
                    </h2>
                </a>
            )
                
            })
        }

        </>
    )
}



export default Mines