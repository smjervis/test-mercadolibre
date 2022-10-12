import React from 'react'

const BuyButton = ({ type, children }) => {
    return (
        <button type={type} className="bg-ml-blue text-white px-20 py-2 rounded">{children}</button>
    )
}

export default BuyButton