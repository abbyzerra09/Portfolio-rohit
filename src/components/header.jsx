import React from 'react'

function Header () {
  return (
    <>
        <div>
            <div className='flex justify-around pt-2 sticky top-0 z-50'>
                <h2 className='hidden md:block text-3xl font-medium font-Bebas cursor-pointer'>Welcome to my Portfolio</h2>
                <h2 className='text-4xl md:text-5xl font-Rillosta font-medium text-center cursor-pointer'>Rohit Thapa</h2>
                <ul className='hidden gap-8 md:flex'>
                    <li className='font-medium text-gray-500 cursor-pointer hover:text-black transition-all duration-150'>Home</li>
                    <li className='font-medium text-gray-500 cursor-pointer hover:text-black transition-all duration-150'>Projects</li>
                    <li className='font-medium text-gray-500 cursor-pointer hover:text-black transition-all duration-150'>About Me</li>
                    <li className='font-medium text-gray-500 cursor-pointer hover:text-black transition-all duration-150'>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}
export default Header;