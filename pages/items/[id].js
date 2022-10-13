import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import Page from "../../components/Page"
import ProductDetails from "../../components/ProductDetails"
import fetchData from '../../helpers/fetchData'

const ProductDetail = () => {
    const route = useRouter()
    const { id } = route.query

    const [productInfo, setProductInfo] = useState()

    useEffect(() => {
        if (id) {
            (async () => {
                const response = await fetchData(`/api/product?q=${id}`)
                setProductInfo(response.item)
            }
            )()
        }
    }, [id])

    return (
        <Page title={"Product Details"}>
            {productInfo && <ProductDetails productInfo={productInfo} />}
        </Page>
    )
}

export default ProductDetail