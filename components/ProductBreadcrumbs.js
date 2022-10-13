import React, { useEffect, useState } from 'react'
import fetchData from '../helpers/fetchData'

const ProductBreadcrumbs = ({ productInfo }) => {

    const [category, setCategory] = useState({})

    useEffect(() => {
        (async () => {
            const response = await fetchData(`/api/categories?id=${productInfo.category}`)
            setCategory(response);
        }
        )()
    }, [])

    return (
        <ol className='py-4 bg-ml-light-gray'>
            <li className="mr-3 text-sm text-ml-gray flex items-center mr-2">
                {category.category_name}
                <svg className="w-5 h-5 text-ml-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                {productInfo.title}
            </li>
        </ol>
    )
}

export default ProductBreadcrumbs