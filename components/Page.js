import React from 'react'
import Head from "next/head"
import NavBar from './NavBar'

const Page = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title} | Mercadolibre</title>
            </Head>
            <NavBar />
            {/* <div className='w-3/4 m-auto'> */}
            <div className='w-3/4 m-auto'>
                {children}
            </div>
        </>
    )
}

export default Page