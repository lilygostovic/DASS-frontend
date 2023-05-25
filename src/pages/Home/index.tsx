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

  return (
    <div>
      <Nav />
      <StyledDiv mb="100px">
        <TitleBlock title={title} subtitle={subtitle} data={data} />
        <HomeTextBlock
          title="About This Project"
          text="Here we could maybe add reasons for why this is the best project ever"
        />
        <HomeTextBlock
          title="What YOU have to do"
          text="Maybe instructions for what the user can do??? What each page shows, and how to operate them?"
        />
        <HomeTextBlock
          title="Resources"
          text="The website/tools we have used? What kind of data is used?"
        />
        <HomeTextBlock
          title="Contact Us"
          text="Contact information like emails and some links perhaps? Maybe some info like this could also be placed in the empty bottom right corner? IDK what else could be interesting to place in the empty corner? :DDD"
        />
      </StyledDiv>
    </div>
  );
};
