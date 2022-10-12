import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ResultBreadcrumbs from './ResultBreadcrumbs'
import { useRouter } from "next/router"
import fetchData from '../lib/fetchData'

const ProductsResults = () => {

    const route = useRouter()
    const searchTerm = route.query.items

    const [results, setResults] = useState([])

    useEffect(() => {
        if (searchTerm) {
            (async () => {
                const response = await fetchData(`/api/items?q=${searchTerm}`)
                setResults(response)
            }
            )()
        }
    }, [searchTerm])

    const renderResults = (
        results && results.map((result, index) => {
            return (
                <div key={index}>
                    <ProductCard result={result} />
                </div>
            )
        })
    )

    return (
        <>
            <ResultBreadcrumbs results={results} />
            {renderResults}
        </>
    )
}

export default ProductsResults


