import { Footer, Nav } from "../../components";

import React from "react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const text = t(`homepage.title`);

  return (
    <div style ={{
      backgroundColor: "#ECF2FF",
      maxHeight: "100vh",
      minHeight: "100vh",
    }}>
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
            justifyContent: "center",
            alignItems: "center",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "black",
              height: "80vh",
              fontSize: "25px",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            {text}
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              height: "800vh",
              width: "150vh",
              border: "2px solid #3E54AC",
              justifyContent: "left",
              display: "flex",
            }}
          >
            <div>
              <h1 style={{ fontSize: "20px" }}>About Us</h1>
              We could have something like this for the home page content with
              links and such. Just a bad looking idea, you are welcome to do
              something else :D
            </div>
          </div>
        </div>
        <div style={{ alignItems: "flex-end" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
