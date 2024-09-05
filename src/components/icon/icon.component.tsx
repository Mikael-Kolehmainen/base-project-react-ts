import { MouseEventHandler } from "react";
import { IconContainer, StyledIcon } from "./icon.styles";

interface IconProps {
  iconPath: string;
  onClick: MouseEventHandler;
}

const Icon = ({ iconPath, onClick }: IconProps) => {
  return (
    <IconContainer className="icon" onClick={onClick}>
      <StyledIcon iconPath={iconPath} />
    </IconContainer>
  );
};

export default Icon;
