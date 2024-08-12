import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Tooltip from "./Tooltip";

export type DonutType = {
  className?: string;
  dataPoint?: string;
  genreName?: string;
  propFlex1?: string;
  propWidth1?: string;
  propHeight1?: string;
  propFlex11?: string;
  propWidth11?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propBottom?: CSSProperties["bottom"];
};

const Donut: FunctionComponent<DonutType> = ({
  className = "",
  propHeight,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  propPadding,
  propAlignSelf,
  propFlex,
  propBottom,
  dataPoint,
  genreName,
  propFlex1,
  propWidth1,
  propHeight1,
  propFlex11,
  propWidth11,
}) => {
  const donutStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex,
      bottom: propBottom,
    };
  }, [
    propHeight,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propLeft,
    propPadding,
    propAlignSelf,
    propFlex,
    propBottom,
  ]);

  return (
    <div
      className={`h-[52.5px] w-[48.4px] !m-[0] absolute top-[0px] left-[53.4px] flex flex-row items-start justify-start pt-3 pb-[14.5px] pl-[3px] pr-0 box-border z-[4] text-left text-xs text-white-100 font-headline ${className}`}
      style={donutStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src={dataPoint}
      />
      <Tooltip
        propFlex={propFlex1}
        propWidth={propWidth1}
        propHeight={propHeight1}
        propFlex1={propFlex11}
        propWidth1={propWidth11}
        genreName={genreName}
      />
    </div>
  );
};

export default Donut;
