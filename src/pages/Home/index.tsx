import { GuideBlock } from "./components/GuideBlock";
import { HomeTextBlock } from "./components/HomeText";
import { Nav } from "../../components";
import React from "react";
import { StyledDiv } from "../../components/common/StyledDiv";
import { TitleBlock } from "./components/TitleBlock";
import { data } from "../Dashboard/data";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const title = t("homePage.title");
  const subtitle = t("homePage.subtitle");
  const aboutTitleText = t("homePage.about.title");
  const aboutText = t("homePage.about.body");
  const youTitle = t("homePage.you.title");
  const youBody = t("homePage.you.body");
  const resTitle = t("homePage.res.title");
  const resBody = t("homePage.res.body");
  const contactTitle = t("homePage.contact.title");
  const contactBody = t("homePage.contact.body");
  const ugTitle = t("homePage.ug.title");
  const ugBody = t("homePage.ug.body");

  return (
    <div>
      <Nav />
      <StyledDiv mb="100px">
        <TitleBlock title={title} subtitle={subtitle} data={data} />
        <HomeTextBlock
          title={aboutTitleText}
          text={aboutText}
        />
        <HomeTextBlock
          title={youTitle}
          text={youBody}
        />
        <HomeTextBlock
          title={resTitle}
          text={resBody}
        />
        <HomeTextBlock
          title={contactTitle}
          text={contactBody}
        />
        <GuideBlock
          title={ugTitle}
          text={ugBody}
        />
      </StyledDiv>
    </div>
  );
};
