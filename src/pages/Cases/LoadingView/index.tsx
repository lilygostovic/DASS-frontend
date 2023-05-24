// ScaleLoader and SyncLoader also nice

import BeatLoader from "react-spinners/BeatLoader";
import { StyledDiv } from "src/components/common/StyledDiv";

export const LoadingView = () => (
  <StyledDiv
    height="100%"
    width="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <BeatLoader size={10} speedMultiplier={0.4} />
  </StyledDiv>
);
