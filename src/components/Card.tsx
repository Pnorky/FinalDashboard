import { FunctionComponent } from "react";
import Content from "./Content";

export type CardType = {
  className?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-boundvariablesdata flex flex-col items-start justify-start pt-0 px-0 pb-[11px] gap-boundvariablesdata1 shrink-0 text-left text-base text-white-100 font-roboto ${className}`}
    >
      <Content
        tag="Pop Rock"
        propWidth="unset"
        propWidth1="unset"
        propMinWidth="68px"
        text="52.1%"
      />
      <Content
        tag="OPM"
        propWidth="unset"
        propWidth1="unset"
        propMinWidth="36px"
        text="22.8%"
      />
      <Content
        tag="Alt Rock"
        propWidth="unset"
        propWidth1="unset"
        propMinWidth="59px"
        text="13.9%"
      />
      <Content tag="Indie  " text="11.2%" />
    </div>
  );
};

export default Card;
