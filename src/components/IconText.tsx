import { FunctionComponent } from "react";

export type IconTextType = {
  className?: string;
};

const IconText: FunctionComponent<IconTextType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-boundvariablesdata10 flex flex-row flex-wrap items-center justify-start gap-boundvariablesdata11 text-left text-sm text-white-100 font-headline ${className}`}
    >
      <div className="h-4 w-4 rounded-radius-8 flex flex-row items-center justify-center">
        <img
          className="h-boundvariablesdata18 w-boundvariablesdata18 relative"
          alt=""
          src="/search.svg"
        />
      </div>
      <div className="flex-1 rounded-boundvariablesdata10 flex flex-col items-start justify-center">
        <div className="self-stretch relative leading-[20px]">Search</div>
      </div>
    </div>
  );
};

export default IconText;
