import { FunctionComponent } from "react";
import Tooltip from "./Tooltip";

export type BarType = {
  className?: string;
};

const Bar: FunctionComponent<BarType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-0 px-[26px] relative z-[2] ml-[-0.1px] ${className}`}
    >
      <div className="w-7 h-[46.5px] absolute !m-[0] top-[93px] right-[40.3px] bg-secondary-green max-w-[28px]" />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[17.5px] gap-[3px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3.5">
          <div className="flex flex-col items-start justify-start">
            <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-secondary-green opacity-[0] max-w-[28px]" />
            <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-secondary-green max-w-[28px]" />
          </div>
        </div>
        <Tooltip
          propFlex="unset"
          propWidth="unset"
          propHeight="26px"
          propFlex1="1"
          propWidth1="unset"
          genreName="26,000"
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-[15px]">
        <div className="flex flex-col items-start justify-start">
          <div className="w-7 h-[46.5px] relative bg-secondary-green max-w-[28px]" />
          <div className="w-7 h-[46.5px] relative bg-secondary-green max-w-[28px]" />
          <div className="w-7 h-[46.5px] relative bg-secondary-green max-w-[28px]" />
          <div className="w-7 h-[46.5px] relative bg-secondary-green max-w-[28px]" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-[15px]">
        <div className="h-[46.5px] w-7 relative rounded-t-none rounded-b-boundvariablesdata2 bg-secondary-green max-w-[28px]" />
      </div>
    </div>
  );
};

export default Bar;
