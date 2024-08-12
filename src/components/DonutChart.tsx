import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Donut from "./Donut";

export type DonutChartType = {
  className?: string;
  dataPoint?: string;
  dataPoint1?: string;
  dataPoint2?: string;
  dataPoint3?: string;
  propHeight1?: string;
  propHeight2?: string;
  propHeight3?: string;
  propHeight4?: string;
  propWidth2?: string;
  propWidth3?: string;
  propWidth4?: string;
  propWidth5?: string;
  propMargin?: string;
  propMargin1?: string;
  propMargin2?: string;
  propMargin3?: string;
  propPosition?: string;
  propPosition1?: string;
  propPosition2?: string;
  propPosition3?: string;
  propTop?: string;
  propTop1?: string;
  propTop2?: string;
  propTop3?: string;
  propLeft?: string;
  propLeft1?: string;
  propLeft2?: string;
  propLeft3?: string;
  propPadding?: string;
  propPadding1?: string;
  propPadding2?: string;
  propPadding3?: string;
  propAlignSelf?: string;
  propAlignSelf1?: string;
  propAlignSelf2?: string;
  propAlignSelf3?: string;
  propFlex1?: string;
  propFlex2?: string;
  propFlex3?: string;
  propFlex4?: string;
  propBottom?: string;
  propBottom1?: string;
  propBottom2?: string;
  propBottom3?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
};

const DonutChart: FunctionComponent<DonutChartType> = ({
  className = "",
  propHeight,
  propWidth,
  propMinWidth,
  propFlex,
  propWidth1,
  dataPoint,
  dataPoint1,
  dataPoint2,
  dataPoint3,
  propHeight1,
  propHeight2,
  propHeight3,
  propHeight4,
  propWidth2,
  propWidth3,
  propWidth4,
  propWidth5,
  propMargin,
  propMargin1,
  propMargin2,
  propMargin3,
  propPosition,
  propPosition1,
  propPosition2,
  propPosition3,
  propTop,
  propTop1,
  propTop2,
  propTop3,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propPadding,
  propPadding1,
  propPadding2,
  propPadding3,
  propAlignSelf,
  propAlignSelf1,
  propAlignSelf2,
  propAlignSelf3,
  propFlex1,
  propFlex2,
  propFlex3,
  propFlex4,
  propBottom,
  propBottom1,
  propBottom2,
  propBottom3,
}) => {
  const donutChartStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propHeight, propWidth, propMinWidth, propFlex]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`h-[190px] w-[204px] flex flex-row items-start justify-start pt-0 pb-[0.1px] pl-1 pr-0 box-border relative gap-[0.9px] min-w-[204px] shrink-0 text-left text-xs text-white-100 font-headline mq450:flex-1 ${className}`}
      style={donutChartStyle}
    >
      <div
        className="h-[79.7px] w-[71.9px] flex flex-col items-start justify-start pt-[12.7px] px-0 pb-0 box-border"
        style={frameDivStyle}
      >
        <Donut
          propHeight={propHeight1}
          propWidth={propWidth2}
          propMargin={propMargin}
          propPosition={propPosition}
          propTop={propTop}
          propLeft={propLeft}
          propPadding={propPadding}
          propAlignSelf={propAlignSelf}
          propFlex={propFlex1}
          propBottom={propBottom}
          dataPoint={dataPoint}
          genreName="13.9%"
          propFlex1="unset"
          propWidth1="48px"
          propHeight1="unset"
          propFlex11="unset"
          propWidth11="35px"
        />
      </div>
      <Donut
        propHeight={propHeight2}
        propWidth={propWidth3}
        propMargin={propMargin1}
        propPosition={propPosition1}
        propTop={propTop1}
        propLeft={propLeft1}
        propPadding={propPadding1}
        propAlignSelf={propAlignSelf1}
        propFlex={propFlex2}
        propBottom={propBottom1}
        dataPoint={dataPoint1}
        genreName="22.8%"
        propFlex1="unset"
        propWidth1="51px"
        propHeight1="unset"
        propFlex11="1"
        propWidth11="unset"
      />
      <Donut
        propHeight={propHeight3}
        propWidth={propWidth4}
        propMargin={propMargin2}
        propPosition={propPosition2}
        propTop={propTop2}
        propLeft={propLeft2}
        propPadding={propPadding2}
        propAlignSelf={propAlignSelf2}
        propFlex={propFlex3}
        propBottom={propBottom2}
        dataPoint={dataPoint2}
        genreName="52.1%"
        propFlex1="unset"
        propWidth1="48px"
        propHeight1="unset"
        propFlex11="1"
        propWidth11="unset"
      />
      <Donut
        propHeight={propHeight4}
        propWidth={propWidth5}
        propMargin={propMargin3}
        propPosition={propPosition3}
        propTop={propTop3}
        propLeft={propLeft3}
        propPadding={propPadding3}
        propAlignSelf={propAlignSelf3}
        propFlex={propFlex4}
        propBottom={propBottom3}
        dataPoint={dataPoint3}
        genreName="11.2%"
      />
    </div>
  );
};

export default DonutChart;
