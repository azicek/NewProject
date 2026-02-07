import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../../assets/image copy.png"
export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="w-full bg-[#222831] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div 
          style={{ backgroundImage: `url(${img})` }} 
          className="bg-cover bg-center w-full rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 min-h-72 sm:min-h-96 lg:min-h-[500px] flex flex-col justify-center"
        >
          <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4'>
            {t("Effortless")}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
            {t("Consolidate")}
          </p>
        </div>
      </div>
    </div>
  )
}
