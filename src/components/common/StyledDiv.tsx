/* eslint-disable @typescript-eslint/indent */
import {
  type BorderProps,
  type BoxShadowProps,
  type ColorProps,
  type FlexboxProps,
  type LayoutProps,
  type PositionProps,
  type SpaceProps,
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";

import styled from "styled-components";

type ForgetViewProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  PositionProps &
  BoxShadowProps;

export const StyledDiv = styled.div<ForgetViewProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${boxShadow}
`;
