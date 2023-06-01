import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";
import homePic from "./../../../images/home.png";
import navPic from "./nav.png";
import summaryPic1 from "./../../../images/summary1.png";
import summaryPic2 from "./../../../images/summary2.png";
// import casesPic from "./cases.png";
// import chartPic from "./caseSum.png";
// import sumPic from "./sum.png";
import { useTranslation } from "react-i18next";

interface GuideBlockProps {
  title: string;
  text: string;
}

export const GuideBlock = ({ title, text }: GuideBlockProps) => {
  const { t } = useTranslation();
  const homeTitle = t("homePage.images.homeTitle");
  const summaryTitle = t("homePage.images.summaryTitle");
  const casesTitle = t("homePage.images.casesTitle");
  const t1 = t("homePage.images.home");
  const t2 = t("homePage.images.summary1");
  const t3 = t("homePage.images.summary2");
  const t4 = t("homePage.images.cases1");
  const t5 = t("homePage.images.cases2");

  // Scroll to top when images are clicked
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <StyledDiv
        display="flex"
        flexDirection="column"
        alignItems="center"
        mx="500px"
        py="40px"
    >
        <StyledText variant="headerBig">{title}</StyledText>
        <StyledText variant="paragraphMedium" textAlign="center">{text}</StyledText>
        <StyledDiv
            display="flex"
            flexDirection="column"
        >
            <StyledDiv
              margin="30px 10px"
              alignItems="center"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            >
              <h1 style={{ textAlign: "center", fontSize: "23px", fontWeight: "normal" }}>{homeTitle}</h1>
              <StyledDiv
                display="flex"
                flexDirection="row"
              >
                <figure>
                  <img
                    src={homePic}
                    width="240px"
                    height="150px"
                    onClick={handleClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(3.4)";
                      e.currentTarget.style.zIndex = "3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.zIndex = "2";
                    }}
                    style={{
                      position: "relative",
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      marginLeft: "155px",
                    }}>
                  </img>
                  <figcaption style={{ textAlign: "center" }}>{t1}</figcaption>
                </figure>
              </StyledDiv>
            </StyledDiv>

            <StyledDiv
              margin="30px 10px"
              alignItems="center"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            >
              <h1 style={{ textAlign: "center", fontSize: "23px", fontWeight: "normal" }}>{summaryTitle}</h1>
              <StyledDiv
                display="flex"
                flexDirection="row"
              >
                <figure>
                  <img
                    src={summaryPic1}
                    width="240px"
                    height="150px"
                    onClick={handleClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(3.4)";
                      e.currentTarget.style.zIndex = "3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.zIndex = "2";
                    }}
                    style={{
                      position: "relative",
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}>
                  </img>
                  <figcaption style={{ textAlign: "center" }}>{t2}</figcaption>
                </figure>

                <figure>
                  <img
                    src={summaryPic2}
                    width="240px"
                    height="150px"
                    onClick={handleClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(3.4)";
                      e.currentTarget.style.zIndex = "3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.zIndex = "2";
                    }}
                    style={{
                      position: "relative",
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}>
                  </img>
                  <figcaption style={{ textAlign: "center" }}>{t3}</figcaption>
                </figure>
              </StyledDiv>
            </StyledDiv>

            <StyledDiv
              margin="30px 10px"
              alignItems="center"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            >
              <h1 style={{ textAlign: "center", fontSize: "23px", fontWeight: "normal" }}>{casesTitle}</h1>
              <StyledDiv
                display="flex"
                flexDirection="row"
              >
                <figure>
                  <img
                    src={navPic}
                    width="240px"
                    height="150px"
                    onClick={handleClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(3.4)";
                      e.currentTarget.style.zIndex = "3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.zIndex = "2";
                    }}
                    style={{
                      position: "relative",
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}>
                  </img>
                  <figcaption style={{ textAlign: "center" }}>{t4}</figcaption>
                </figure>

                <figure>
                  <img
                    src={navPic}
                    width="240px"
                    height="150px"
                    onClick={handleClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(3.4)";
                      e.currentTarget.style.zIndex = "3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.zIndex = "2";
                    }}
                    style={{
                      position: "relative",
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}>
                  </img>
                  <figcaption style={{ textAlign: "center" }}>{t5}</figcaption>
                </figure>
              </StyledDiv>
            </StyledDiv>
        </StyledDiv>
    </StyledDiv>
  )
};
