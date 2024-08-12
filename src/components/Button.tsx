import { FunctionComponent } from "react";
import Tooltip1 from "./Tooltip1";

export type ButtonType = {
  className?: string;
  propWidth?: string;
  propLeft?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  propWidth,
  propLeft,
}) => {
  return (
    <div
      className={`h-14 flex-1 rounded-boundvariablesdata12 flex flex-row items-center justify-center pt-[55px] px-0 pb-0 box-border relative text-left text-xs text-white-100 font-headline ${className}`}
    >
      <Tooltip1
        propWidth={propWidth}
        propLeft={propLeft}
        text="Notifications"
        text2="⌘N"
      />
    </div>
  );
};

export default Button;
