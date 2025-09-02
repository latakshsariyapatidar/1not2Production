import React from 'react'
import LanguageCycler from './LanguageCycler'
import languageData from '../assets/DifferentLanguages.json'

function Header({ onNavigateToContact }) {

    const handleContact = () => {
        if (onNavigateToContact) {
            onNavigateToContact();
        }
    }

  return (
    <div className='h-12 sm:h-16 flex items-center justify-between'>
        <div>
            <img src="logo2.png" className='h-8 w-8 sm:h-12 sm:w-12 md:h-15 md:w-15'/>
        </div>
        <div className='flex space-x-4 sm:space-x-6'>
            <LanguageCycler 
                mainContent="Contact Us"
                languages={languageData.contactUs}
                className='font-[Akshar] font-black text-white text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-red-400 transition-colors duration-300 cursor-pointer'
                onClick={handleContact}
            />
        </div>
    </div>

  )
}

export default Header