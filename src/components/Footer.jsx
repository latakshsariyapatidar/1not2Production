import React from 'react'
import LanguageCycler from './LanguageCycler'
import languageData from '../assets/DifferentLanguages.json'

function Footer({ onNavigateToWorks, onNavigateToAbout }) {

    const handleWorks = () => {
        if (onNavigateToWorks) {
            onNavigateToWorks();
        }
    }

    const handleAbout = () => {
        if (onNavigateToAbout) {
            onNavigateToAbout();
        }
    }

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0'>
        <LanguageCycler
            mainContent="Works"
            languages={languageData.works}
            className='font-[Akshar] font-black text-white text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-red-400 transition-colors duration-300 cursor-pointer'
            onClick={handleWorks}
        />
        <LanguageCycler
            mainContent="About Us"
            languages={languageData.aboutUs}
            className='font-[Akshar] font-black text-white text-sm sm:text-lg md:text-xl lg:text-2xl hover:text-red-400 transition-colors duration-300 cursor-pointer'
            onClick={handleAbout}
        />
    </div>
)
}

export default Footer