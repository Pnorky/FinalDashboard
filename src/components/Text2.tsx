import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Text2Type = {
  className?: string;
  text2?: string;
  text?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const Text2: FunctionComponent<Text2Type> = ({
  className = "",
  text2 = "⌘N",
  text = "Notifications",
  propFlex,
  propTextDecoration,
  propWidth,
  propDisplay,
}) => {
  const text2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      textDecoration: propTextDecoration,
      width: propWidth,
      display: propDisplay,
    };
  }, [propFlex, propTextDecoration, propWidth, propDisplay]);

  return (
    <div
      className={`self-stretch flex-1 rounded-boundvariablesdata10 flex flex-row flex-wrap items-center justify-start gap-x-2 gap-y-[5px] text-left text-xs text-white-100 font-headline ${className}`}
    >
      <div
        className="self-stretch flex-1 relative leading-[16px]"
        style={text2Style}
      >
        {text}
      </div>
      <div className="self-stretch w-[23px] relative leading-[16px] text-white-40 inline-block">
        {text2}
      </div>
    </div>
  );
};

export default Text2;
