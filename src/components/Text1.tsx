import { FunctionComponent } from "react";

export type Text1Type = {
  className?: string;
  text?: string;
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  text = "11.2%",
}) => {
  return (
    <div
      className={`w-[43px] rounded-boundvariablesdata2 flex flex-col items-start justify-center text-left text-base text-white-100 font-roboto ${className}`}
    >
      <div className="self-stretch h-[18px] relative leading-[18px] inline-block">
        {text}
      </div>
    </div>
  );
};

export default Text1;
