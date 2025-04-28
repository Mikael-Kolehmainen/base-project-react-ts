import { MouseEventHandler } from "react";
import styles from "./icon.module.css";

interface IconProps {
  iconPath: string;
  onClick: MouseEventHandler;
}

const Icon = ({ iconPath, onClick }: IconProps) => {
  return (
    <div className={styles.iconContainer} onClick={onClick}>
      <i className={styles.icon} style={{ background: `url(${iconPath})` }} />
    </div>
  );
};

export default Icon;
