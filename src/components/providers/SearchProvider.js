import React from 'react'
import {
  useQueryParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam,
  withDefault,
} from 'use-query-params'

import data from 'data/data.json'
import SearchContext from 'utils/SearchContext'

export default function SearchProvider(props) {
  const [categories, setCategories] = useQueryParam(
    'categories',
    withDefault(DelimitedArrayParam, ['streaming'])
  )

  const [comparaisons, setComparaisons] = useQueryParam(
    'comparaisons',
    withDefault(DelimitedNumericArrayParam, [])
  )

  return (
    <SearchContext.Provider
      value={{
        data,
        categories,
        setCategories,
        comparaisons,
        setComparaisons,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
