/* eslint-disable multiline-ternary */
import React, { useState } from "react";

import { type Case } from "../../services/casesService/model";
import { CaseView } from "./CaseView";
import { type Filters } from "./CaseView/Types";
import { Form } from "./Form";
import { LoadingView } from "./LoadingView";
import { Nav } from "../../components";
import { NoResultView } from "./NoResultView";
import { RefreshButton } from "./RefreshButton";
import { StyledDiv } from "../../components/common/StyledDiv";
import { StyledText } from "../../components/common/StyledText";
import { UndefinedView } from "./UndefinedView";
import { casesService } from "../../services/casesService";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const Cases = () => {
  const { register, handleSubmit } = useForm();
  const { getCases } = casesService;
  const { t } = useTranslation();

  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutPassed, setTimeoutPassed] = useState(false);
  const [randomCase, setRandomCase] = useState<Case | null>();
  const [numMatchingCases, setNumMatchingCases] = useState(0);
  const [numViewedCases, setNumViewedCases] = useState(0);

  const viewedText = t("filterPage.viewedText", {
    matching: numMatchingCases,
    viewed: numViewedCases,
  });
  const refreshButton = t("filterPage.refreshButton");

  const fetchCase = async (data: Filters) => {
    setIsLoading(true);
    setTimeoutPassed(false);

    setTimeout(() => {
      setTimeoutPassed(true);
    }, 4000);

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

      setCases(cases);
      setRandomCase(randCase);
      setNumMatchingCases(cases.length);
      setNumViewedCases(1);
    }

    setIsLoading(false);
  };

  const onSubmit = (data: unknown) => {
    try {
      console.log(data);
      fetchCase(data as Filters);
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

        setCases(cases);
        setRandomCase(randCase);
        setNumViewedCases(numViewedCases + 1);
      }
    }
  };

  return (
    <StyledDiv display="flex" flexDirection="column" height="100vh">
      <Nav />
      <StyledDiv display="flex" height="100%" justifyContent="space-between">
        <Form
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        {isLoading ? (
          <LoadingView timeoutPassed={timeoutPassed} />
        ) : (
          <>
            {randomCase === null && <NoResultView />}
            {randomCase === undefined && <UndefinedView />}
            {randomCase !== null && randomCase !== undefined && (
              <StyledDiv
                id="case-view"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="30px"
                mb="20px"
              >
                <CaseView randomCase={randomCase} />
                <StyledText variant="paragraphSmall" mt="10px">
                  {viewedText}
                </StyledText>
                <RefreshButton onClick={displayNewCase}>
                  <StyledText variant="paragraphTinyBold">
                    {refreshButton}
                  </StyledText>
                </RefreshButton>
              </StyledDiv>
            )}
          </>
        )}
      </StyledDiv>
    </StyledDiv>
  );
};
