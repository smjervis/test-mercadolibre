import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ResultBreadcrumbs from './ResultBreadcrumbs'
import { useRouter } from "next/router"
import fetchData from '../helpers/fetchData'
import Spinner from "./Spinner"
import NoResults from './NoResults'

const ProductsResults = () => {

    const route = useRouter()
    const searchTerm = route.query.items
    const [state, setState] = useState({
        results: [],
        category: [],
        isLoading: false,
        noResults: null
    })

    const { results, category, isLoading, noResults } = state

    const handleStart = () => {
        setState({ isLoading: true })
    }
    const handleEnd = () => {
        setState({ isLoading: false })
    }

    useEffect(() => {
        if (searchTerm) {
            (async () => {
                const response = await fetchData(`/api/items?q=${searchTerm}`)
                setState({ results: response.items, category: response.categories, noResults: response.total_results })
                route.events.on('routeChangeStart', handleStart)
                route.events.on('routeChangeComplete', handleEnd)
            }
            )()
        }
    })

    const renderResults = () => {
        if (results && !isLoading) {
            return results.map((result, index) => {
                return (
                    <div key={index}>
                        <ProductCard result={result} />
                    </div>
                )
            })
        }
        if (isLoading) {
            return <Spinner />
        }
    }

    const showNoResults = () => {
        if (noResults === 0) {
            return <NoResults />
        }
    }

    return (
        <>
            {category && <ResultBreadcrumbs results={category} />}
            {renderResults()}
            {showNoResults()}
        </>
    )
}

export default ProductsResults











