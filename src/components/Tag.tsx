import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TagType = {
  className?: string;
  tag?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Tag: FunctionComponent<TagType> = ({
  className = "",
  propWidth,
  tag,
  propWidth1,
  propMinWidth,
}) => {
  const tagStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const tag1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propMinWidth]);

  return (
    <div
      className={`rounded-boundvariablesdata2 flex flex-row items-center justify-start py-0.5 pl-boundvariablesdata5 pr-[65px] text-left text-base text-white-100 font-roboto ${className}`}
      style={tagStyle}
    >
      <input
        className="cursor-pointer m-0 h-boundvariablesdata6 w-boundvariablesdata6 relative"
        type="radio"
        name="radioGroup-1"
      />
      <div
        className="w-[35px] relative leading-[18px] whitespace-pre-wrap inline-block"
        style={tag1Style}
      >
        {tag}
      </div>
    </div>
  );
};

export default Tag;
