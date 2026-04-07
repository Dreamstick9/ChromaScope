import React, { useState } from 'react'
import Search from './search-feature/Search'
import Table from './api-features/Table/Table.jsx'
import Mempool from './api-features/Mempool/Mempool.jsx'
import Fees from './api-features/Fees/Fees.jsx'
import Mines from './api-features/Mining/Mining.jsx'
import Track from './api-features/Tracker/Tracker.jsx'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('all')
  return (
    <>
    <Search setQuery={setQuery} setSort={setSort} setFilter = {setFilter}/>
    <Table query={query} sort={sort} filter={filter}/>
    <Mempool />
    <Fees />
    <Mines />
    <Track />


    </>
  )

}

export default App
