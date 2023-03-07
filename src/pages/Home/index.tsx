import { Footer, Nav } from "../../components";
import React, { useState } from "react";
import { SummaryChart } from "../Dashboard/components";
import { data } from "../Dashboard/data";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [filter] = useState<"sex" | "lgbtq">("sex");

  const text = t("WELCOME TO THE HOME OF ASYLUM SEEKERS");

  return (
    <div
      style={{
        backgroundColor: "#ECF2FF",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <div
        style={{
          marginBottom: "20px",
          justifyContent: "space-bewteen",
          alignItems: "right",
          height: "85vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            color: "white",
            height: "3.5vh",
            fontSize: "25px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#577ACB",
          }}
        >
          {text}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
          <div
            style={{
              backgroundColor: "#ffffff",
              height: "84vh",
              width: "100%",
              border: "4px solid #78A6F5",
            }}
          >
            <h1 style={{ fontSize: "19px", color: "#577ACB" }}>
              About This Project
              <div style={{ fontSize: "12px", color: "black" }}>
                Here we could maybe add reasons for why this is the best project ever
              </div>
            </h1>

            <h1 style={{ fontSize: "19px", color: "#577ACB" }}>
              What YOU have to do
              <div style={{ fontSize: "12px", color: "black" }}>
                Maybe instructions for what the user can do???
                What each page shows, and how to operate them?
              </div>
            </h1>

            <h1 style={{ fontSize: "19px", color: "#577ACB" }}>
              Resources
              <div style={{ fontSize: "12px", color: "black" }}>
                The website/tools we have used? What kind of data is used?
              </div>
            </h1>

            <h1 style={{ fontSize: "19px", color: "#577ACB" }}>
              Contact Us
              <div style={{ fontSize: "12px", color: "black" }} >
                Contact information like emails and some links perhaps?
                Maybe some info like this could also be placed in the empty bottom right corner?
                IDK what else could be interesting to place in the empty corner? :DDD
              </div>
            </h1>
          </div>
          <div
            style={{
              height: "47vh",
              backgroundColor: "#ffffff",
              border: "4px solid #78A6F5",
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "13px",
              fontWeight: "normal",
            }}
          >
            <SummaryChart data={data} filter={filter} w={600} h={400} />
          </div>
        </div>
      </div>
    </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
