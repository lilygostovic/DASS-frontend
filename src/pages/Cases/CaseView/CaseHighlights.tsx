import { type Filters } from "./Types";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
`;

interface FilterPropertyProps {
  filter: string;
  value: string;
}

const FilterProperty = ({ filter, value }: FilterPropertyProps) => (
  <div style={{ padding: "12px" }}>
    <b>{filter}:</b> {value}
  </div>
);

export interface CaseHighlightsProps {
  filters: Filters;
}

export const CaseHighlights = ({ filters }: CaseHighlightsProps) => {
  const { t } = useTranslation();
  const acceptedLabel = t("filterPage.accepted.label");
  const motiveLabel = t("filterPage.motive.label");
  const countryLabel = t("filterPage.country.label");
  const sexLabel = t("filterPage.sex.label");
  const minAgeLabel = t("filterPage.ageFilter.minLabel");
  const maxAgeLabel = t("filterPage.ageFilter.maxLabel");

  return (
    <Container>
      <FilterProperty filter={acceptedLabel} value={filters.accepted} />
      <FilterProperty filter={motiveLabel} value={filters.motive} />
      <FilterProperty filter={countryLabel} value={filters.country} />
      <FilterProperty filter={sexLabel} value={filters.sex.toString()} />
      {filters.minAge !== undefined && filters.minAge !== "" && (
        <FilterProperty
          filter={minAgeLabel}
          value={filters.minAge.toString()}
        />
      )}
      {filters.maxAge !== undefined && filters.maxAge !== "" && (
        <FilterProperty
          filter={maxAgeLabel}
          value={filters.maxAge.toString()}
        />
      )}
    </Container>
  );
};
