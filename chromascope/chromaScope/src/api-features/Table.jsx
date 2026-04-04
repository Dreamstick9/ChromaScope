import { useEffect, useState } from 'react'
import fetchBlockInfo from './Blocks';
import './Table.css'

function Table(){
  const [data, showData] = useState([])
  useEffect(()=>{
    fetchBlockInfo().then((result)=>{
      console.log(result)
      showData(result)
    })
  },[])

  return (
    <>
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
      data.map((i)=>{
        const k = i.extras
        return (
          <tr key={i.id}>
            <td>{i.height}</td>
            <td>{k.pool.name}</td>
            <td>{i.timestamp}</td>
            <td>{(k.totalFees/100000000).toFixed(2)} BTC</td>
            <td>{i.tx_count}</td>
            <td>{((i.size)/1000000).toFixed(2)} mb</td>
          </tr>
        )
      })
    }
    </tbody>
    </table>


    </>
  )
}

export default Table