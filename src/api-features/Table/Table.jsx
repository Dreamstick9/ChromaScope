import { useEffect, useState } from 'react'
import { fetchBlockInfo } from './Blocks';
import './Table.css'

function Table({query, sort, filter}){

    const [data, showData] = useState([])
    useEffect(()=>{
        fetchBlockInfo().then((result)=>{
        console.log(result)
        showData(result)
        })
    },[])


    let searched = data.filter((i)=>{
        if (query==''){
            return true
        }
        return i.extras?.pool?.name?.toLowerCase().includes(query.toLowerCase())
    })
    let filtered = searched.filter((i)=>{
        if(filter == 'all'){
            return true
        }else if(filter =='small'){
            return ((i.size)/1000000) < 1.5
        }else if (filter == 'medium'){
            return ((i.size)/1000000) > 1.5 && ((i.size)/1000000) < 2
        }else{
            return ((i.size)/1000000) > 2
        }
    })
    const final = [...filtered].sort((a,b)=>{
        if(sort=='fees'){
            return b.extras.totalFees - a.extras.totalFees
        }else if(sort == 'size'){
            return b.size - a.size
        }else{
            return 0
        }
    })
     
    console.log(query)
    console.log(searched)
    

    return (
        <div className='table'>
        <table>
        <thead>
        <tr>
            <th>Height</th>
            <th>Pool Name</th>
            <th>Timestamp</th>
            <th>Total Fees</th>
            <th>Tx's</th>
            <th>Size</th>
        </tr>
        </thead>
        <tbody>
        {
        final.map((i)=>{
            const k = i.extras
            return (
            <tr key={i.id}>
                <td>{i.height}</td>
                <td>{k.pool.name}</td>
                <td>{i.timestamp}</td>
                <td>{(k.totalFees/100000000).toFixed(3)} BTC</td>
                <td>{i.tx_count}</td>
                <td>{((i.size)/1000000).toFixed(2)} mb</td>
            </tr>
            )
        })
        }
        </tbody>
        </table>


        </div>
    )
}

export default Table