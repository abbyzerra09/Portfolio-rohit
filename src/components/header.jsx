import { useState, useEffect } from 'react';

function Header () {

    const updateCursor = (scale, label = "") => {
        const event = new CustomEvent('cursorUpdate', { detail: { scale, label } });
        window.dispatchEvent(event);
    };

  return (
        <>
            <div className='flex justify-center pt-5 md:pt-10 bg-[#FCFCFC]'>
                <h2 className='text-[35px] md:text-5xl font-medium font-Lostar cursor-pointer text-black'
                onMouseEnter={() => updateCursor(2.8)}
                onMouseLeave={() => updateCursor(1)}>
                    RT</h2>
            </div>
        </>
  )
}
export default Header;