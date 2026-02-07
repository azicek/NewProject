import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../../assets/image.png"
export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {t("tranforming")} <br />{t("Technology")}
          </h1>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-700">
            {t("pioneer")}
          </h3>
          <button className="w-full sm:w-64 cursor-pointer bg-[#00ADB5] text-white py-3 rounded-md hover:bg-[#008C9E] transition-colors font-semibold">
            {t("Learn")}
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={img} alt="TechInnov" className="w-full h-auto rounded-lg object-cover cursor-pointer hover:shadow-xl transition-shadow" />
        </div>
      </div>
    </div>
  )
}
