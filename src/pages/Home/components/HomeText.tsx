import React from "react";
import styled from "styled-components";

// todo:: add actual text here

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 200px;
`;

export const HomeText = () => (
  <Container>
    <h1>About This Project</h1>
    <div>
      Here we could maybe add reasons for why this is the best project ever
    </div>
    <h1>What YOU have to do</h1>
    <div>
      Maybe instructions for what the user can do??? What each page shows, and
      how to operate them?
    </div>
    <h1>Resources</h1>
    <div>The website/tools we have used? What kind of data is used?</div>
    <h1>Contact Us</h1>
    <div>
      Contact information like emails and some links perhaps? Maybe some info
      like this could also be placed in the empty bottom right corner? IDK what
      else could be interesting to place in the empty corner? :DDD
    </div>
  </Container>
);
