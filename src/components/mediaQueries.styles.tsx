import { css } from "styled-components";

const size = {
  mobile: "375px",
  tablet: "780px",
  desktop: "1920",
};

export const mobile = (inner: string) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;

export const tablet = (inner: string) => css`
  @media (max-width: ${size.tablet}) {
    ${inner};
  }
`;

export const desktop = (inner: string) => css`
  @media (max-width: ${size.desktop}) {
    ${inner};
  }
`;
