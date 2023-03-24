import { CaseHighlights, type CaseHighlightsProps } from "./CaseHighlights";

import { CaseBody } from "./CaseBody";
import { Title } from "./StyledComponents";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 80px 40px 80px;

  background-color: #ffffffa2;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
`;

export type CaseViewProps = {
  caseNumber: number;
  text: string;
} & CaseHighlightsProps;

export const CaseView = ({ caseNumber, filters, text }: CaseViewProps) => {
  const { t } = useTranslation();
  const title = `${t("Case #")}${caseNumber}`; // todo:: update text

  return (
    <Container>
      <Title>{title}</Title>
      <CaseHighlights filters={filters} />
      <CaseBody text={text} />
    </Container>
  );
};
