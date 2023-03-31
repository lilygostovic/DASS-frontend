import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";
import { SummaryChart } from "../../Dashboard/components";

interface TitleBlockProps {
  title: string;
  subtitle: string;
  data: Array<{
    country: string;
    total: number;
    female: number;
    male: number;
    lgbtq: number;
  }>;
}

export const TitleBlock = ({ title, subtitle, data }: TitleBlockProps) => (
  <StyledDiv
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    padding="0px 80px"
    minHeight="100vh"
  >
    <StyledDiv display="flex" flexDirection="column">
      <StyledText variant="title">{title}</StyledText>
      <StyledText variant="subtitle" pt="24px">
        {subtitle}
      </StyledText>
    </StyledDiv>
    <StyledDiv
      style={{ fontSize: "14px" }}
      onClick={() => {
        window.location.href = "/summary";
      }}
    >
      <SummaryChart data={data} w={600} h={400} isSummaryPage={false} />
    </StyledDiv>
  </StyledDiv>
);
