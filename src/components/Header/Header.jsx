import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Header() {
        const [language, setLanguage] = useTranslation('English');
    const {t, i18n} = useTranslation();
    const changelanguage=(e)=>{
        console.log(e.target.value)
        console.log(i18n)
        i18n.changeLanguage(e.target.value)
    }
    
  return (
    
    <>
<div className="w-full h-20 bg-blue-400">
    <div className="flex items-center h-full gap-4 text-white text-md px-16 justify-between">

    <Link to={"/"} className="cursor-pointer transform hover:scale-110 transition-transform duration-200">{t("home")}</Link>
    <Link to={"/about"} className="cursor-pointer transform hover:scale-110 transition-transform duration-200">{t("about")}</Link>
    <Link to={"/faq"} className="cursor-pointer transform hover:scale-110 transition-transform duration-200">{t("faq")}</Link>
    <Link to={"/contact"} className="cursor-pointer transform hover:scale-110 transition-transform duration-200">{t("contact")}</Link>
    <select className="bg-white text-black p-1 rounded-md" id="lang" onChange={changelanguage}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
    </div>
          
</div>
    </>
  )
}
