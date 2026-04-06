import React, { useState } from 'react'
import Search from './search-feature/Search'
import Table from './api-features/Table'
import Mempool from './api-features/Mempool'
import Fees from './api-features/Fees'
import Mines from './api-features/Mining'
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


    </>
  )

}

export default App
