import React, {useContext} from 'react'
import Link from 'next/link'

const categories = [{name : 'React', slug : 'react', }, {name : 'Web Development', slug: 'web-dev'}]

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8 '>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block '>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-gray-200'>
                            GraphCMS
                        </span>
                    </Link>
                </div>

                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <div className='md:float-right mt-2 align-middle text-gray-100 ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header