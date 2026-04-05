import React, { useState } from 'react'
import Search from './search-feature/search'
import Table from './api-features/Table'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('')
  return (
    <>
    <Search setQuery={setQuery} setSort={setSort}/>
    <Table query={query} sort={sort}/>

    </>
  )

}

export default App
