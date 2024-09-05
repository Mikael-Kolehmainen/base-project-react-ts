import styled from "styled-components";

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  margin: auto;
`;

export const StyledIcon = styled.i`
  display: block;
  width: 40%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.secondaryFontColor};
  background: url(${(props) => props.iconPath}) no-repeat center;
`;
