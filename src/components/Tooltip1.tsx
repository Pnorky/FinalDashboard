import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Text2 from "./Text2";

export type Tooltip1Type = {
  className?: string;
  text?: string;
  text2?: string;
  propFlex?: string;
  propTextDecoration?: string;
  propWidth1?: string;
  propDisplay?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const Tooltip1: FunctionComponent<Tooltip1Type> = ({
  className = "",
  propWidth,
  propLeft,
  text,
  text2,
  propFlex,
  propTextDecoration,
  propWidth1,
  propDisplay,
}) => {
  const tooltip1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft,
    };
  }, [propWidth, propLeft]);

  return (
    <div
      className={`h-6 w-[118px] !m-[0] absolute top-[calc(50%_+_32px)] left-[calc(50%_-_59px)] [backdrop-filter:blur(40px)] rounded-boundvariablesdata10 bg-black-801 flex flex-row items-center justify-start py-boundvariablesdata11 px-boundvariablesdata13 box-border opacity-[0] text-left text-xs text-white-100 font-headline ${className}`}
      style={tooltip1Style}
    >
      <Text2
        text2={text2}
        text={text}
        propFlex={propFlex}
        propTextDecoration={propTextDecoration}
        propWidth={propWidth1}
        propDisplay={propDisplay}
      />
    </div>
  );
};

export default Tooltip1;
