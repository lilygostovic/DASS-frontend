import { StyledDiv } from "src/components/common/StyledDiv";
import { StyledText } from "src/components/common/StyledText";
import { noResult } from "src/images";
import { useTranslation } from "react-i18next";

export const NoResultView = () => {
  const { t } = useTranslation();

  const title = t("filterPage.noResult.title");
  const subtitle = t("filterPage.noResult.subtitle");

  return (
    <StyledDiv width="100%" alignSelf="center">
      <StyledDiv height="250px" width="250px" margin="auto">
        <img src={noResult} height="250px" />
      </StyledDiv>
      <div
        style={{
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        <StyledText variant="paragraphMediumBold" mb="32px">
          {title}
        </StyledText>
      </div>
      <div
        style={{
          alignContent: "center",
          textAlign: "center",
          width: "350px",
          margin: "auto",
        }}
      >
        <StyledText variant="paragraphSmall" color="darkGrey">
          {subtitle}
        </StyledText>
      </div>
    </StyledDiv>
  );
};
