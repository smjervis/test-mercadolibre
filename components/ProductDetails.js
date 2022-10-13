import React from 'react'
import Image from "next/image"
import BuyButton from "./BuyButton"
import ProductBreadcrumbs from './ProductBreadcrumbs'
import formatCurrency from "../helpers/currency"

const ProductDetail = ({ productInfo }) => {

  return (
    <>
      <ProductBreadcrumbs productInfo={productInfo} />
      <div className='flex flex-col mt-8 mx-8'>
        <div className='flex'>
          <Image src={productInfo.picture} width={680} height={680} ></Image>
          <div className='flex-1 ml-4'>
            <p className='text-sm mb-3.5'>{productInfo.condition} - {productInfo.sold_quantity} vendidos</p>
            <h2 className='text-2xl font-bold'>{productInfo.title}</h2>
            <p className='text-4xl my-8'>{formatCurrency(productInfo.price.amount)}</p>
            <BuyButton type="button">Comprar</BuyButton>
          </div>
        </div>
        <div className='mt-24'>
          <h3 className='text-3xl'>Descripción del producto</h3>
          <p className='text-base text-ml-gray my-8'> {productInfo.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

