import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';
import { IoFlashOutline } from "react-icons/io5";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const changelanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <div className="w-full bg-[#222831] top-0 z-50 shadow-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
 
          <div className="flex items-center gap-2 sm:gap-3">
            <IoFlashOutline className='text-xl sm:text-2xl text-white' />
            <div className="text-white font-bold text-lg sm:text-xl">TechInnov</div>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link to="/" className="text-white text-sm lg:text-base hover:text-[#00ADB5] transition-colors">{t("Begin")}</Link>
            <Link to="/about" className="text-white text-sm lg:text-base hover:text-[#00ADB5] transition-colors">{t("Perspective")}</Link>
            <Link to="/contact" className="text-white text-sm lg:text-base hover:text-[#00ADB5] transition-colors">{t("Inventors")}</Link>
            <Link to="/faq" className="text-white text-sm lg:text-base hover:text-[#00ADB5] transition-colors">{t("Proceed")}</Link>
            <button className="cursor-pointer transform transition hover:scale-105 px-4 py-2 bg-[#008A90] text-white text-sm rounded-md">
              {t("Register")}
            </button>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <select 
              className="bg-white text-black px-2 py-1 sm:px-3 rounded-md text-xs sm:text-sm" 
              id="lang" 
              onChange={changelanguage}
              value={i18n.language || 'en'}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>

     
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white text-2xl"
            >
              {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1f24] border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white text-sm hover:text-[#00ADB5] transition-colors py-2"
              >
                {t("Begin")}
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white text-sm hover:text-[#00ADB5] transition-colors py-2"
              >
                {t("Perspective")}
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white text-sm hover:text-[#00ADB5] transition-colors py-2"
              >
                {t("Inventors")}
              </Link>
              <Link 
                to="/faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white text-sm hover:text-[#00ADB5] transition-colors py-2"
              >
                {t("Proceed")}
              </Link>
              <button className="w-full cursor-pointer bg-[#008A90] text-white text-sm rounded-md py-2 hover:bg-[#00ADB5] transition-colors mt-2">
                {t("Register")}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}










