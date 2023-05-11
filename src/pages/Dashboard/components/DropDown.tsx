import { useTranslation } from "react-i18next";

interface dropDownProps {
  selectedOption: string
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export const DropDown = ({ selectedOption, setOption }: dropDownProps) => {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }

  const { t } = useTranslation();

  const countryText = t("summaryDropDown.options.country");
  const genderText = t("summaryDropDown.options.gender");
  const motiveText = t("summaryDropDown.options.motive");
  const lgbtqText = t("summaryDropDown.options.lgbtq")

  return (
    <select value={selectedOption} onChange={handleMenuChange}
      style={{
        height: "35px",
        width: "190px",
        fontWeight: "bold",
        border: "1px solid grey",
        color: "black",
        borderRadius: "4px",
        fontSize: "19px",
        margin: "20px 25px",
        cursor: "pointer",
      }}
    >
        <option value="country">{countryText}</option>
        <option value="gender">{genderText}</option>
        <option value="motive">{motiveText}</option>
        <option value="lgbtq">{lgbtqText}</option>
    </select>
  )
}
