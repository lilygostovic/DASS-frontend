import React from 'react';
import i18n from '../i18n/config';
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {
  const { t } = useTranslation();

  const text = t("welcome");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
        <p>{text}</p>
        <select name="language" onChange={handleLanguageChange}>
            <option value="da">Danish</option>
            <option value="en">English</option>
        </select>
    </div>
  )
};
