import React from 'react'

const Footer = () => {
  const currentYear=new Date().getFullYear()
  return (
   <footer className='bg-gray-900 flex items-center justify-center text-white md:h-15 h-14'>
     <p className='text-[12px] md:text-sm'>Copyright &copy; {currentYear} Tea🍵Pay - All rights reserved!</p>
    </footer>
  )
}

export default Footer