import { FunctionComponent } from "react";

export type LeftTextType = {
  className?: string;
};

const LeftText: FunctionComponent<LeftTextType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[23px] flex flex-col items-start justify-start text-right text-xs text-white-100 font-headline ${className}`}
    >
      <div className="h-[100px] relative leading-[18px] inline-block min-w-[23px]">
        30K
      </div>
      <div className="h-[100px] relative leading-[18px] inline-block min-w-[23px]">
        20K
      </div>
      <div className="self-stretch relative leading-[18px] inline-block max-h-[100px]">
        <p className="m-0">10K</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">5K</p>
      </div>
      <div className="self-stretch h-[100px] relative leading-[18px] inline-block">
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">0</p>
      </div>
    </div>
  );
};

export default LeftText;
