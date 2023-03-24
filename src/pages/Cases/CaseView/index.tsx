import { CaseHighlights, type CaseHighlightsProps } from "./CaseHighlights";

import { CaseBody } from "./CaseBody";
import { Container } from "../components/Helper";
import { Title } from "./StyledComponents";
import { useTranslation } from "react-i18next";

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
