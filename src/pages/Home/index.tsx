import React, { useState } from "react";

import { HomeText } from "./components";
import { Nav } from "../../components";
import { TitleBlock } from "./components/TitleBlock";
import { data } from "../Dashboard/data";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [filter] = useState<"sex" | "lgbtq">("sex");

  const title = t("homePage.title");
  const subtitle = t("homePage.subtitle");

  return (
    <div>
      <Nav />
      <div>
        <TitleBlock
          title={title}
          subtitle={subtitle}
          data={data}
          filter={filter}
        />
        <HomeText />
      </div>
    </div>
  );
};
