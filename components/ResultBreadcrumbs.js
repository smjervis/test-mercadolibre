import React from 'react'
import Link from "next/link"

const ResultBreadcrumbs = ({ results }) => {

    const renderBreadcrumb = (
        results[0] && <div>{results[0].categories.map((result, index) => {
            return (
                <ol key={index} className='list-none flex my-4'>
                    {result.categoriesPath.map((category, index) => {
                        return (
                            <li key={category.id} className="mr-3 text-sm text-ml-gray flex items-center">
                                <Link href="#">
                                    <a className='mr-2'>
                                        {category.name}
                                    </a>
                                </Link>
                                {index !== result.categoriesPath.length - 1 && <svg className="w-5 h-5 text-ml-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>}
                            </li>
                        )
                    })}
                </ol>
            )
        })
        }
        </div>
    )
    return (
        <>
            {renderBreadcrumb}
        </>
    )
}

export default ResultBreadcrumbs
