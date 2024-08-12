import { FunctionComponent } from "react";
import Tooltip from "./Tooltip";
import Bar from "./Bar";

export type VerticalType = {
  className?: string;
};

const Vertical: FunctionComponent<VerticalType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-boundvariablesdata8 box-border max-w-full [row-gap:20px] z-[2] mq675:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-0 pl-[27px] pr-[26px] box-border min-w-[71px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[16.5px] pl-[13px] pr-3.5 relative">
          <div className="flex flex-col items-start justify-start">
            <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-secondary-indigo opacity-[0] max-w-[28px]" />
            <div className="w-7 h-[46.5px] relative bg-secondary-indigo opacity-[0] max-w-[28px]" />
            <div className="w-7 h-[46.5px] relative bg-secondary-indigo opacity-[0] max-w-[28px]" />
          </div>
          <div className="h-[46.5px] w-7 absolute !m-[0] right-[14.4px] bottom-[-30px] bg-secondary-indigo opacity-[0] max-w-[28px]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1">
          <Tooltip
            propFlex="unset"
            propWidth="unset"
            propHeight="26px"
            propFlex1="1"
            propWidth1="unset"
            genreName="12,000"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3.5">
            <div className="flex flex-col items-start justify-start">
              <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-red-200 max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-red-200 max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-red-200 max-w-[28px]" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3.5">
          <div className="h-[46.5px] w-7 relative rounded-t-none rounded-b-boundvariablesdata2 bg-red-100 max-w-[28px]" />
        </div>
      </div>
      <div className="w-[217.3px] flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-col items-start justify-start py-0 px-[27px] relative gap-[23px]">
          <div className="flex flex-row items-start justify-start py-0 pl-3 pr-3.5">
            <div className="flex flex-col items-start justify-start">
              <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-secondary-mint opacity-[0] max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-chartreuse opacity-[0] max-w-[28px]" />
            </div>
          </div>
          <div className="w-7 h-[46.5px] absolute !m-[0] top-[93px] left-[40.3px] rounded-t-boundvariablesdata2 rounded-b-none bg-chartreuse max-w-[28px]" />
          <div className="w-7 h-[46.5px] absolute !m-[0] top-[139.5px] left-[40.3px] bg-chartreuse max-w-[28px]" />
          <div className="self-stretch flex flex-col items-start justify-start gap-11">
            <Tooltip
              propFlex="unset"
              propWidth="unset"
              propHeight="26px"
              propFlex1="1"
              propWidth1="unset"
              genreName="21,000"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
              <div className="flex flex-col items-start justify-start">
                <div className="w-7 h-[46.5px] relative bg-chartreuse max-w-[28px]" />
                <div className="w-7 h-[46.5px] relative bg-chartreuse max-w-[28px]" />
                <div className="w-7 h-[46.5px] relative bg-chartreuse max-w-[28px]" />
                <div className="w-7 h-[46.5px] relative rounded-t-none rounded-b-boundvariablesdata2 bg-chartreuse max-w-[28px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-7 pr-[27px] relative gap-[43px] z-[2] ml-[-0.1px]">
          <div className="flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-primary-brand opacity-[0] max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-primary-brand opacity-[0] max-w-[28px]" />
            </div>
          </div>
          <div className="w-7 h-[46.5px] absolute !m-[0] top-[93px] right-[40.3px] bg-primary-brand opacity-[0] max-w-[28px]" />
          <div className="w-7 h-[46.5px] absolute !m-[0] top-[139.5px] right-[40.3px] rounded-t-boundvariablesdata2 rounded-b-none bg-goldenrod max-w-[28px]" />
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <Tooltip
              propFlex="unset"
              propWidth="unset"
              propHeight="26px"
              propFlex1="1"
              propWidth1="unset"
              genreName="17,000"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
              <div className="flex flex-col items-start justify-start">
                <div className="w-7 h-[46.5px] relative bg-goldenrod max-w-[28px]" />
                <div className="w-7 h-[46.5px] relative bg-goldenrod max-w-[28px]" />
                <div className="w-7 h-[46.5px] relative bg-goldenrod max-w-[28px]" />
                <div className="w-7 h-[46.5px] relative rounded-t-none rounded-b-boundvariablesdata2 bg-goldenrod max-w-[28px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 pl-7 pr-[27px] box-border relative gap-[43px] min-w-[71px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-royalblue opacity-[0] max-w-[28px]" />
            <div className="w-7 h-[46.5px] relative bg-royalblue opacity-[0] max-w-[28px]" />
          </div>
        </div>
        <div className="w-7 h-[46.5px] absolute !m-[0] top-[93px] left-[40.3px] bg-royalblue opacity-[0] max-w-[28px]" />
        <div className="w-7 h-[46.5px] absolute !m-[0] top-[139.5px] left-[40.3px] rounded-t-boundvariablesdata2 rounded-b-none bg-royalblue max-w-[28px]" />
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <Tooltip
            propFlex="unset"
            propWidth="unset"
            propHeight="26px"
            propFlex1="1"
            propWidth1="unset"
            genreName="17,000"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-[13px]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-7 h-[46.5px] relative bg-royalblue max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-royalblue max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-royalblue max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative rounded-t-none rounded-b-boundvariablesdata2 bg-royalblue max-w-[28px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[217.3px] flex flex-row items-start justify-start">
        <div className="flex-[0.8765] flex flex-col items-start justify-start py-0 pl-[30px] pr-[29px] relative gap-[30.5px]">
          <div className="flex flex-row items-start justify-start pt-0 pb-1.5 pl-2.5 pr-[11px] relative">
            <div className="flex flex-col items-start justify-start">
              <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-secondary-cyan opacity-[0] max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-secondary-cyan opacity-[0] max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-secondary-cyan opacity-[0] max-w-[28px]" />
            </div>
            <div className="h-[46.5px] w-7 absolute !m-[0] right-[11.4px] bottom-[-40.5px] bg-secondary-cyan opacity-[0] max-w-[28px]" />
          </div>
          <div className="w-7 h-[46.5px] absolute !m-[0] bottom-[139.5px] left-[40.3px] bg-secondary-cyan opacity-[0] max-w-[28px]" />
          <Tooltip
            propFlex="unset"
            propWidth="unset"
            propHeight="26px"
            propFlex1="unset"
            propWidth1="34px"
            genreName="8,000"
          />
          <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[11px]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-7 h-[46.5px] relative rounded-t-boundvariablesdata2 rounded-b-none bg-tomato max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative bg-tomato max-w-[28px]" />
              <div className="w-7 h-[46.5px] relative rounded-t-none rounded-b-boundvariablesdata2 bg-tomato max-w-[28px]" />
            </div>
          </div>
        </div>
        <Bar />
      </div>
    </div>
  );
};

export default Vertical;
