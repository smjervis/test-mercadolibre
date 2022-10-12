import React from 'react'
import Image from "next/image"
import Link from "next/link"
import formatCurrency from "../helpers/currency"

const ProductCard = ({ result }) => {

    const renderResults = (
        result.items.map(item => {
            return (
                <Link href={`/items/${item.id}`} key={item.id} >
                    <a className="flex border-b-2">
                        <div className='m-4'>
                            <Image src={item.picture} width={180} height={180} className="rounded"></Image>
                        </div>
                        <div className='flex flex-1 flex-col justify-start items-start pt-6'>
                            <div className='flex justify-center items-center mb-8'>
                                <p className='text-2xl mr-2'>{formatCurrency(item.price.amount)}</p>
                                <span>{item.free_shipping && <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1} stroke="green" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>}</span>
                            </div>
                            <p className='text-lg'>{item.title}</p>
                            <p className='text-lg'>{item.condition}</p>
                        </div>
                        <div className='flex justify-center items-start pt-6'>
                            <p className='text-xs text-ml-gray'>{item.address}</p>
                        </div>
                    </a>
                </Link>
            );
        })
    )

    return (
        <>
            {renderResults}
        </>
    )
}

export default ProductCard