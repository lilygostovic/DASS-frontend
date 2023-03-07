import React from "react";
import i18n from "../../i18n/config";

export const LanguagePicker = () => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      name="language"
      onChange={handleLanguageChange}
      style={{
        appearance: "none",
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        padding: "0 1em 0 0",
        margin: "0px",
        paddingBlock: "5px",
        paddingInline: "10px",
        fontWeight: "bold",
      }}
    >
      <option value="da">DA</option>
      <option value="en">EN</option>
    </select>
  );
};
