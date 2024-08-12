import { FunctionComponent } from "react";
import IconText from "./IconText";

export type SearchType = {
  className?: string;
};

const Search: FunctionComponent<SearchType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-boundvariablesdata16 bg-gray-300 overflow-hidden flex flex-row flex-wrap items-center justify-start py-boundvariablesdata13 px-boundvariablesdata17 gap-x-2 gap-y-[7px] text-left text-sm text-white-100 font-headline ${className}`}
    >
      <IconText />
      <div className="rounded-boundvariablesdata10 flex flex-col items-start justify-center text-black-20">
        <div className="relative leading-[20px] inline-block min-w-[21px]">
          ⌘/
        </div>
      </div>
    </div>
  );
};

export default Search;
