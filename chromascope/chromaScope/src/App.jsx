import React, { useState } from 'react'
import Search from './search-feature/search'
import Table from './api-features/Table'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  return (
    <>
    <Search setQuery={setQuery}/>
    <Table query={query}/>

    </>
  )

}

export default App
