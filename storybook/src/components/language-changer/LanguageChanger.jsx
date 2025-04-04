import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import * as Flags from 'country-flag-icons/react/3x2';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentFlagCode, setCurrentFlagCode] = useState(currentLocale);
  const dropdownRef = useRef(null);

   const localeToFlagCode = {
      en: "GB",
      ru: "RU", 
    };
  
  const getFlagComponent = (locale = 'en') => {
    const flagCode = localeToFlagCode[locale]; 
    const FlagComponent = Flags[flagCode];
    return FlagComponent ? <FlagComponent className="flagIcon" /> : null;
  };

  useEffect(() => {
    setCurrentFlagCode(currentLocale);
  }, [currentLocale]);

  const handleChange = (newLocale) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    i18n.changeLanguage(newLocale);
    setCurrentFlagCode(newLocale);

    const newPathname = location.pathname.replace(
      `/${currentLocale}`,
      `/${newLocale}`
    );
    navigate(newPathname);

    setShowDropdown(false);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-changer" ref={dropdownRef}>
       <div className="language-changer__current" onClick={handleDropdownClick}>
        {getFlagComponent(currentFlagCode)} 
      </div>
      {showDropdown && (
        <div className="language-changer__dropdown">
          <div
            className="language-changer__dropdown-item"
            onClick={() => handleChange("en")}
          >
            {getFlagComponent("en")} 
          </div>
          <div
            className="language-changer__dropdown-item"
            onClick={() => handleChange("ru")}
          >
            {getFlagComponent("ru")} 
          </div>
        </div>
      )}
    </div>
  );
}
