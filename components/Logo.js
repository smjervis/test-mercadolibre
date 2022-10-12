import React from 'react'
import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"

const Logo = () => {

    return (
        <Link href={"/"}>
            <a className='leading-none mr-7'>
                <Image src={logo} width={50} height={34} />
            </a>
        </Link>
    )
}

export default Logo

