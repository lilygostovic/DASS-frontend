import React, { useState } from "react";

import { type Case } from "../../services/casesService/model";
import { CaseView } from "./CaseView";
import { type Filters } from "./CaseView/Types";
import { Form } from "./Form";
import { Nav } from "../../components";
import { NoResultView } from "./NoResultView";
import { RefreshButton } from "./RefreshButton";
import { StyledDiv } from "src/components/common/StyledDiv";
import { casesService } from "../../services/casesService";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const Cases = () => {
  const { register, handleSubmit } = useForm();
  const { getCases } = casesService;
  const { t } = useTranslation();

  const refreshButton = t("filterPage.refreshButton");

  const [cases, setCases] = useState<Case[]>([]);
  const [randomCase, setRandomCase] = useState<Case | null>();

  const fetchCase = async (data: Filters) => {
    const cases = await getCases({
      status: data.status,
      gender: data.gender,
      country: data.country,
      keywords:
        data.motive !== undefined
          ? [{ name: data.motive, type: "Asylmotiv" }]
          : undefined,
    });

    if (cases.length === 0) {
      setRandomCase(null);
    } else {
      const randIndex = Math.floor(Math.random() * cases.length);
      const randCase = cases[randIndex];

      setRandomCase(randCase);
      setCases(cases);
    }
  };

  const onSubmit = (data: unknown) => {
    try {
      fetchCase(data as Filters);

      setTimeout(() => {
        const caseView = document.getElementById("case-view");

        caseView?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
    } catch {
      const dataStr = data as string;

      // todo:: give warning to user that there was an error
      console.log(`=============\nType error: ${dataStr} not of type Filters`);
    }
  };

  const displayNewCase = () => {
    if (randomCase !== null && randomCase !== undefined) {
      const i = cases.indexOf(randomCase); // get index of current case displayed

      cases.splice(i, 1); // remove displayed case from array

      if (cases.length === 0) {
        setRandomCase(null);
      } else {
        const randIndex = Math.floor(Math.random() * cases.length);
        const randCase = cases[randIndex];

        setRandomCase(randCase);
        setCases(cases);
      }
    }
  };

  return (
    <>
      <Nav />
      <StyledDiv
        margin="50px 10vw"
        height="80vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Form
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        {randomCase !== null && randomCase !== undefined && (
          <StyledDiv
            id="case-view"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="150px"
          >
            <CaseView randomCase={randomCase} />
            <RefreshButton onClick={displayNewCase}>
              {refreshButton}
            </RefreshButton>
          </StyledDiv>
        )}
        {randomCase === null && <NoResultView />}
      </StyledDiv>
    </>
  );
};
