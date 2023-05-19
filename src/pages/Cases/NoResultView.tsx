import { StyledDiv } from "src/components/common/StyledDiv";
import { StyledText } from "src/components/common/StyledText";
import { noResult } from "src/images";
import { useTranslation } from "react-i18next";

export const NoResultView = () => {
  const { t } = useTranslation();

  const title = t("filterPage.noResult.title");
  const subtitle = t("filterPage.noResult.subtitle");

  return (
    <StyledDiv justifyContent="center" width="350px">
      <StyledDiv height="250px" width="250px" margin="auto">
        <img src={noResult} height="250px" />
      </StyledDiv>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <StyledText variant="paragraphMediumBold" mb="20px">
          {title}
        </StyledText>
      </div>
      <div style={{ textAlign: "center" }}>
        <StyledText variant="paragraphSmall" color="darkGrey">
          {subtitle}
        </StyledText>
      </div>
    </StyledDiv>
  );
};
