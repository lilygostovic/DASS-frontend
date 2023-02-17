import React from 'react';
import i18n from '../../i18n/config';

export const LanguagePicker = () => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <select name="language" onChange={handleLanguageChange}>
      <option value="da">Danish</option>
      <option value="en">English</option>
    </select>
  )
};
