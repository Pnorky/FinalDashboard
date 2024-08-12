import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TooltipType = {
  className?: string;
  genreName?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
};

const Tooltip: FunctionComponent<TooltipType> = ({
  className = "",
  propFlex,
  propWidth,
  propHeight,
  propFlex1,
  propWidth1,
  genreName,
}) => {
  const tooltipStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      height: propHeight,
    };
  }, [propFlex, propWidth, propHeight]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth1,
    };
  }, [propFlex1, propWidth1]);

  return (
    <div
      className={`self-stretch flex-1 [backdrop-filter:blur(40px)] rounded-boundvariablesdata2 bg-black-80 flex flex-row items-start justify-start py-boundvariablesdata5 px-[7px] opacity-[0] z-[1] text-left text-xs text-white-100 font-headline ${className}`}
      style={tooltipStyle}
    >
      <div
        className="self-stretch flex-1 rounded-boundvariablesdata2 flex flex-row items-start justify-start"
        style={text1Style}
      >
        <div className="self-stretch flex-1 relative leading-[18px]">
          {genreName}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
