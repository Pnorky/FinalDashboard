import { FunctionComponent } from "react";
import Tag from "./Tag";
import Text1 from "./Text1";

export type ContentType = {
  className?: string;
  tag?: string;
  propWidth?: string;
  propWidth1?: string;
  propMinWidth?: string;
  text?: string;
};

const Content: FunctionComponent<ContentType> = ({
  className = "",
  tag,
  propWidth,
  propWidth1,
  propMinWidth,
  text,
}) => {
  return (
    <div
      className={`self-stretch rounded-boundvariablesdata2 flex flex-row flex-wrap items-center justify-between py-0 pl-0 pr-0.5 gap-5 text-left text-base text-white-100 font-roboto ${className}`}
    >
      <Tag
        propWidth={propWidth}
        tag={tag}
        propWidth1={propWidth1}
        propMinWidth={propMinWidth}
      />
      <Text1 text={text} />
    </div>
  );
};

export default Content;
