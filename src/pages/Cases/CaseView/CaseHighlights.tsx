import { type Filters } from "./Types";
import styled from "styled-components";

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

export const CaseHighlights = ({ filters }: CaseHighlightsProps) => (
  <Container>
    <FilterProperty filter="Accepted?" value={filters.accepted} />
    <FilterProperty filter="Motive" value={filters.motive} />
    <FilterProperty filter="Country" value={filters.country} />
    <FilterProperty filter="Sex" value={filters.sex.toString()} />
    {filters.minAge !== undefined && filters.minAge !== "" && (
      <FilterProperty filter="Minimum Age" value={filters.minAge.toString()} />
    )}
    {filters.maxAge !== undefined && filters.maxAge !== "" && (
      <FilterProperty filter="Maximum Age" value={filters.maxAge.toString()} />
    )}
  </Container>
);
