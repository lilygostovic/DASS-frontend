import React, { useState } from "react";

import { type Case } from "../../services/casesService/model";
import { CaseView } from "./CaseView";
import { type Filters } from "./CaseView/Types";
import { Form } from "./Form";
import { Nav } from "../../components";
import { casesService } from "../../services/casesService";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Content = styled.div`
  margin: 50px 10vw;
  height: 80vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
const RefreshButton = styled.button`
  width: 150px;
  margin: 40px 0px;
  padding: 20px;

  border-radius: 8px;
  border: none;

  color: white;
  font-size: 14px;
  background-color: #151515c7;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Cases = () => {
  const { register, handleSubmit } = useForm();
  const { getCases } = casesService;

  const defaultFilters: Filters = {};

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [randomCase, setRandomCase] = useState<Case | null>();

  const fetchCase = async (data: Filters) => {
    const cases = await getCases({
      status: data.status,
      gender: data.gender,
      country: data.country,
      // keywords: [], //todo:: figure out how to add with typing
    });

    const randIndex = Math.floor(Math.random() * cases.length);
    const randCase = cases[randIndex];

    setRandomCase(randCase);
  };

  const onSubmit = (data: unknown) => {
    try {
      setFilters(data as Filters);
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

  return (
    <div>
      <Nav />
      <Content>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        {randomCase !== null && randomCase !== undefined && (
          <div
            id="case-view"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CaseView randomCase={randomCase} />
            <RefreshButton
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => {
                await fetchCase(filters);
              }}
            >
              View New Case
            </RefreshButton>
          </div>
        )}
      </Content>
    </div>
  );
};
