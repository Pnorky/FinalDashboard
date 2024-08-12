import { FunctionComponent } from "react";
import LeftText from "./LeftText";
import Vertical from "./Vertical";
import BottomText from "./BottomText";

export type ChartType = {
  className?: string;
  showLeftText?: boolean;
};

const Chart: FunctionComponent<ChartType> = ({
  className = "",
  showLeftText = true,
}) => {
  return (
    <div
      className={`flex-1 flex flex-row flex-wrap items-start justify-start gap-boundvariablesdata7 max-w-full z-[1] text-right text-xs text-white-100 font-headline ${className}`}
    >
      {showLeftText && <LeftText />}
      <div className="flex-1 flex flex-row items-end justify-start min-w-[424px] max-w-full text-center mq675:min-w-full">
        <div className="self-stretch flex-1 hidden max-w-full z-[1]" />
        <Vertical />
        <BottomText />
      </div>
    </div>
  );
};

export default Chart;
