import { type Case } from "../../../services/casesService/model";
import { StyledDiv } from "src/components/common/StyledDiv";
import { StyledText } from "src/components/common/StyledText";
import { useTranslation } from "react-i18next";

interface FilterPropertyProps {
  filter: string;
  value: string;
}

const FilterProperty = ({ filter, value }: FilterPropertyProps) => (
  <div style={{ padding: "12px" }}>
    <StyledText variant="labelSmall" color="#6e55ce" fontWeight="bold">
      {filter}:{" "}
    </StyledText>
    <StyledText variant="labelSmall" color="black">
      {value}
    </StyledText>
  </div>
);

export interface CaseHighlightsProps {
  randomCase: Case;
}

export const CaseHighlights = ({ randomCase }: CaseHighlightsProps) => {
  const { t } = useTranslation();
  const acceptedLabel = t("filterPage.accepted.label");
  const motiveLabel = t("filterPage.motive.label");
  const countryLabel = t("filterPage.country.label");
  const genderLabel = t("filterPage.gender.label");

  return (
    <StyledDiv display="flex" height="60px">
      <FilterProperty filter={acceptedLabel} value={randomCase.status} />
      <FilterProperty
        filter={motiveLabel}
        value={randomCase.keywords.map((keyword) => keyword.name).join(", ")}
      />
      <FilterProperty filter={countryLabel} value={randomCase.country.name} />
      <FilterProperty filter={genderLabel} value={randomCase.gender} />
    </StyledDiv>
  );
};
