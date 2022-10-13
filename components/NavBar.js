import React, { useState } from 'react'
import { useRouter } from "next/router"
import Logo from "./Logo"
import SearchButton from "./SearchButton"
import fetchData from "../helpers/fetchData"


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
        <>
            <div className='bg-ml-yellow'>
                <nav className='bg-ml-yellow py-2 flex justify-center w-3/4 mx-auto'>
                    <Logo />
                    <form className='flex w-full' onSubmit={onSubmit}>
                        <input type="text" className='py-1.5 px-4 w-full' placeholder='Nunca dejes de buscar' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <SearchButton type="submit"></SearchButton>
                    </form>
                </nav>
            </div>

        </>
    )
}

export default NavBar






