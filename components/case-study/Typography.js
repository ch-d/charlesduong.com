import styled from "styled-components";
import { space } from "styled-system";
import { theme } from "../../theme";

export const H2 = styled.h2`
  color: ${theme.colors.neutral[800]};
  font-size: 1.25rem;
  margin-top: 0;
`;

export const H6 = styled.h6`
  color: ${theme.colors.neutral[200]};
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Para = styled.p`
  color: ${theme.colors.neutral[800]};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0;
  break-inside: avoid;
`;

export const Caption = styled.h6`
  color: ${theme.colors.neutral[500]};
  font-size: 0.75rem;
  text-align: right;
  font-weight: 400;
  ${space}
`;
