import React from 'react'
import Image from "next/image"
import Link from "next/link"
import formatCurrency from "../helpers/currency"

const ProductCard = ({ result }) => {

    const renderResults = (
        <Link href={`/items/${result.id}`} key={result.id} >
            <a className="flex border-b flex-col md:flex-row items-center">
                <div>
                    <Image src={result.picture} width={180} height={180} className="rounded"></Image>
                </div>
                <div className='flex flex-1 flex-col justify-start items-start pt-6 ml-4'>
                    <div className='flex justify-center items-center mb-8'>
                        <p className='text-2xl mr-2'>{formatCurrency(result.price.amount)}</p>
                        <span>{result.free_shipping && <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1} stroke="green" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}</span>
                    </div>
                    <p className='text-lg'>{result.title}</p>
                    <p className='text-lg'>{result.condition}</p>
                </div>
                <div className='flex justify-center items-start pt-6'>
                    <p className='text-xs text-ml-gray'>{result.address}</p>
                </div>
            </a>
        </Link>
    )

    return (
        <div className='w-11/12 my-4 mx-auto'>
            {renderResults}
        </div>
    )
}

export default ProductCard