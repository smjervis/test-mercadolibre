import React, { useState } from 'react'
import Logo from "./Logo"
import SearchButton from "./SearchButton"
import fetchData from "../lib/fetchData"
import { useRouter } from "next/router"

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const route = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetchData(`/api/items?q=${searchTerm}`)
            route.push(`/?items=${searchTerm}`)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <nav className='bg-ml-yellow py-2 px-7 flex justify-center'>
            <Logo />
            <form className='flex w-3/4' onSubmit={onSubmit}>
                <input type="text" className='py-1.5 px-4 w-full' placeholder='Nunca dejes de buscar' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <SearchButton type="submit"></SearchButton>
            </form>
        </nav>
    )
}

export default NavBar
