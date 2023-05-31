import { HomeTextBlock } from "./components/HomeText";
import { Nav } from "../../components";
import React from "react";
import { StyledDiv } from "../../components/common/StyledDiv";
import { TitleBlock } from "./components/TitleBlock";
import { countriesService } from "../../services";
import { useTranslation } from "react-i18next";

interface linkPage {
  link: string;
  name: string;
}

export const Home = () => {
  const { t } = useTranslation();
  const { getCountries } = countriesService;

  const title = t("homePage.title");
  const subtitle = t("homePage.subtitle");
  const aboutTitle = t("homePage.about.title");
  const aboutBody = t("homePage.about.body");
  const youTitle = t("homePage.you.title");
  const youBody = t("homePage.you.body");
  const resTitle = t("homePage.res.title");
  const resBody = t("homePage.res.body");
  const contactTitle = t("homePage.contact.title");
  const contactBody = t("homePage.contact.body");
  const uniText = t("homePage.uni");
  const flnText = t("homePage.fln")

  const ku: linkPage = {
    link: "https://www.ku.dk/",
    name: uniText,
  };

  const fln: linkPage = {
    link: "https://fln.dk/",
    name: flnText,
  };

  // Get the default countries to display
  const [, data] = getCountries();

  return (
    <div>
      <Nav/>
      <StyledDiv mb="100px">
        <TitleBlock title={title} subtitle={subtitle} data={data} />
        <HomeTextBlock
          title={aboutTitle}
          text={aboutBody}
          links={[ku]}
        />
        <HomeTextBlock
          title={youTitle}
          text={youBody}
        />
        <HomeTextBlock
          title={resTitle}
          text={resBody}
          links={[fln]}
        />
        <HomeTextBlock
          title={contactTitle}
          text={contactBody}
        />
      </StyledDiv>
    </div>
  );
};
