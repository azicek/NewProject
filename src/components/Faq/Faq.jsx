import React from 'react'
import { useTranslation } from 'react-i18next'
import Img from "../../assets/image copy 8.png"

export default function Faq() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="bg-linear-to-b from-gray-600 to-gray-700 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">

          <div className="w-full lg:w-1/2">
            <img 
              className='rounded-lg sm:rounded-2xl w-full h-auto object-cover shadow-xl hover:shadow-2xl transition-shadow' 
              src={Img} 
              alt="Innovation Process" 
            />
          </div>

    
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {t("Our inovatsion progress")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">
              {t("Our journey to market disruption")}
            </p>
            <div>
              <button className="bg-[#00ADB5] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg cursor-pointer hover:bg-[#008C9E] transition-colors duration-300 font-semibold text-sm sm:text-base">
                {t("Learn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
