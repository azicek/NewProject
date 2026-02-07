import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../../assets/image copy 2.png"
import imge from "../../assets/image copy 3.png"
import imges from "../../assets/image copy 4.png"
import photo from "../../assets/image copy 5.png"
import photos from "../../assets/image copy 6.png"
import jpg from "../../assets/image copy 7.png"

export default function Contact() {
  const { t, i18n } = useTranslation();
  
  const pioneers = [
    { img: imges, name: "Max Henderson", role: "Founder & CEO" },
    { img: photo, name: "James Carter", role: "Chief Engineer" },
    { img: photos, name: "Sara Tucker", role: "Lead Designer" },
    { img: jpg, name: "David Black", role: "Marketing guru" }
  ];

  return (
    <div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 bg-[#222831] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div 
          style={{ backgroundImage: `url(${img})` }} 
          className="bg-cover bg-center w-full rounded-lg sm:rounded-2xl p-6 sm:p-8 min-h-64 sm:min-h-80 md:min-h-96 flex flex-col justify-end"
        >
          <h3 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>{t("Solid")}</h3>
          <p className="text-white text-base sm:text-lg md:text-xl">{t("Safeguarding")}</p>
        </div>
        <div 
          style={{ backgroundImage: `url(${imge})` }} 
          className="bg-cover bg-center w-full rounded-lg sm:rounded-2xl p-6 sm:p-8 min-h-64 sm:min-h-80 md:min-h-96 flex flex-col justify-end"
        >
          <h3 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>{t("User-Focused")}</h3>
          <p className="text-white text-base sm:text-lg md:text-xl">{t("Weaving")}</p>
        </div>
      </div>

      <div className="bg-[#222831] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 sm:mb-4">
            {t("Meet the Pioneers")}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            {t("The intellects behind the advancements.")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pioneers.map((pioneer, index) => (
            <div key={index} className="flex flex-col">
              <img 
                className='rounded-lg sm:rounded-2xl w-full h-48 sm:h-56 md:h-64 object-cover hover:shadow-xl transition-shadow' 
                src={pioneer.img} 
                alt={pioneer.name} 
              />
              <h3 className="text-white mt-3 sm:mt-4 font-semibold text-sm sm:text-base md:text-lg">
                {t(pioneer.name)}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                {t(pioneer.role)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
