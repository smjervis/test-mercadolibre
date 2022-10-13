import React from 'react'

const NoResults = () => {
    return (
        <div className='mt-14 text-center'>
            <p className='text-2xl font-bold'>No hay publicaciones que coincidan con tu búsqueda.</p>
            <ul className='py-8'>
                <li>Revisa la ortografía de la palabra.</li>
                <li> Utiliza palabras más genéricas o menos palabras.</li>
                <li>Navega por las categorías para encontrar un producto similar.</li>
            </ul>
        </div>
    )
}

export default NoResults