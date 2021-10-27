import React, { useState } from 'react'

import data from 'data/data.json'
import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [categories, setCategories] = useState(['streaming'])

  return (
    <SearchContext.Provider
      value={{
        data,
        categories,
        setCategories,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
