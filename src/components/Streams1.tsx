import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Streams1Type = {
  className?: string;
  streams?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propFlex?: CSSProperties["flex"];
};

const Streams1: FunctionComponent<Streams1Type> = ({
  className = "",
  propPadding,
  streams,
  propWidth,
  propDisplay,
  propFlex,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const streamsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      flex: propFlex,
    };
  }, [propWidth, propDisplay, propFlex]);

  return (
    <div
      className={`self-stretch h-[127px] rounded-lg bg-darkslategray-200 flex flex-col items-end justify-start pt-4 px-0 pb-8 box-border relative gap-[7px] text-left text-base text-mediumspringgreen font-roboto ${className}`}
    >
      <div className="w-full absolute !m-[0] top-[0px] left-[0px] rounded-lg bg-darkslategray-200 h-full hidden z-[0]" />
      <img
        className="w-[152px] h-12 absolute !m-[0] top-[47px] left-[1px] z-[1]"
        alt=""
        src="/chart.svg"
      />
      <div className="w-[145px] !m-[0] absolute top-[16px] left-[8px] flex flex-row items-start justify-start gap-2 z-[1]">
        <div className="h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <div className="w-full flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-[15px] box-border relative max-w-[16px]">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[16px]">
              {" "}
            </div>
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[-1px] bottom-[0px] max-h-full overflow-hidden shrink-0"
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
        <div
          className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border max-w-[147.61px]"
          style={textStyle}
        >
          <div
            className="w-[158px] relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0"
            style={streamsStyle}
          >
            {streams}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streams1;
