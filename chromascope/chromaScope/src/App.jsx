import React, { useState } from 'react'
import Search from './search-feature/search'
import Table from './api-features/Table'
import Mempool from './api-features/Mempool'
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

    </>
  )

}

export default App
