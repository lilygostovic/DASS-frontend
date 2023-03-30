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
  filter: "sex" | "lgbtq";
}

export const TitleBlock = ({
  title,
  subtitle,
  data,
  filter,
}: TitleBlockProps) => (
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
      <SummaryChart data={data} filter={filter} w={600} h={400} />
    </StyledDiv>
  </StyledDiv>
);
