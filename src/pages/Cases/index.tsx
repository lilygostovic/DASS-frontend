import React, { useState } from "react";

import { CaseView } from "./CaseView";
import { type Filters } from "./CaseView/Types";
// import { type Filters } from "./CaseView/Types";
import { Form } from "./Form";
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Nav } from "../../components";
import { PageBreak } from "./components/Helper";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const DassDiv = styled.div`
  background-color: #ecf2ff;
  height: 2000px; // todo:: get rid of hard coded 2000px
`;

const Content = styled.div`
  margin: 50px 10vw;
  height: 80vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Cases = () => {
  const { register, handleSubmit } = useForm();

  const defaultFilters: Filters = {
    accepted: "All",
    motive: "All",
    country: "All",
    sex: "All",
  };

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [caseNumber, setCaseNumber] = useState<number>();
  const [text, setText] = useState<string>();

  const onSubmit = (data: unknown) => {
    try {
      // todo:: make get req to api here

      setCaseNumber(9943); // todo:: remove hardcoded
      setFilters(data as Filters);
      setText(
        // todo:: remove hardcoded
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        "Nævnet stadfæstede i marts 2023 Udlændingestyrelsens afgørelse om overførsel til Tyskland i medfør af udlændingelovens § 48 a, stk. 1, 1. pkt., jf. § 29 a, stk. 1, jf. Dublinforordningen, vedrørende en mand, der har indgivet ansøgning om asyl i Tyskland. Sagen blev behandlet på formandskompetence. DRC Dansk Flygtningehjælp henviste som begrundelse for, at klagerens sag skulle behandles i Danmark, blandt andet til klagerens frygt for sit hjemlands myndigheder i Tyskland, og til at klageren følte sig isoleret og ensom i Tyskland. Efter en gennemgang af sagen, udtalte Flygtningenævnet blandt andet: ”Det fremgår af udlændingelovens § 48 a, stk. 1, 1. pkt., at påberåber en udlænding sig at være omfattet af § 7, træffer Udlændingestyrelsen snarest muligt afgørelse om afvisning eller overførsel efter reglerne i kapitel 5 a. Det fremgår videre af kapitel 5 a, herunder § 29 a, stk. 1, at en udlænding kan afvises eller overføres til en anden medlemsstat efter reglerne i Dublinforordningen. I den foreliggende sag har nævnet lagt til grund, at klageren har ansøgt om international beskyttelse i Tyskland og herefter er udrejst af Tyskland, inden hans asylsag var færdigbehandlet. Flygtningenævnet finder på denne baggrund, at Tyskland er forpligtet til at modtage klageren, jf. forordningens artikel 18, stk. 1, litra b, og at Tyskland dermed er ansvarlig for at behandle klagerens ansøgning om international beskyttelse. Det bemærkes herved, at Tyskland [i vinteren 2022/2023] har accepteret at modtage klageren i medfør af pågældende bestemmelse. Det forhold, at klageren frygter at vende tilbage til Tyskland, fordi [myndighederne i hjemlandet] er bekendt med klagerens ophold i Tyskland og har truet klageren og klagerens familie, kan ikke føre til en ændret vurdering. Flygtningenævnet har herved lagt vægt på, at klageren kan henvises til at rette henvendelse til de tyske myndigheder, såfremt han oplever problemer i Tyskland. Flygtningenævnet har endvidere lagt vægt på, at Tyskland har tiltrådt Flygtningekonventionen og EU’s charter om grundlæggende rettigheder, og at der ikke er holdepunkter for at antage, at Tyskland ikke lever op til sine internationale forpligtelser, herunder princippet om non-refoulement. Det forhold, at klageren føler sig ensom i Tyskland, og at klageren har et netværk i Danmark, kan endvidere ikke føre til en ændret vurdering. Flygtningenævnet finder, at der ikke er grundlag for at tilsidesætte Udlændingestyrelsens vurdering af, at der ikke foreligger sådanne særlige hensyn, herunder af humanitær karakter, at asylansøgningen bør behandles i Danmark, jf. forordningens artikel 17. På den baggrund skal Flygtningenævnet meddele, at nævnet efter en gennemgang af sagen ikke finder grundlag for at omgøre Udlændingestyrelsens afgørelse, jf. udlændingelovens § 48 a, stk. 1, 1. pkt., jf. § 29 a, stk. 1, jf. Dublinforordningen.”"
      );
    } catch {
      const dataStr = data as string;

      // todo:: give warning to user that there was an error
      console.log(`Type error: ${dataStr} not of type Filters`);
    }
  };

  return (
    <DassDiv>
      <Nav />
      <Content>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <PageBreak />
        {caseNumber !== undefined && text !== undefined && (
          <CaseView caseNumber={caseNumber} filters={filters} text={text} />
        )}
      </Content>
    </DassDiv>
  );
};
