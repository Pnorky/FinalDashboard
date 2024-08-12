import { FunctionComponent } from "react";
import Button from "./Button";

export type GroupType = {
  className?: string;
};

const Group: FunctionComponent<GroupType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[196px] rounded-boundvariablesdata10 flex flex-row flex-wrap items-center justify-start py-0 pl-5 pr-1 box-border gap-x-1 gap-y-0.5 text-left text-xs text-white-100 font-headline ${className}`}
    >
      <Button propWidth="122px" propLeft="calc(50% - 61px)" />
      <Button propWidth="98px" propLeft="calc(50% - 49px)" />
      <Button />
    </div>
  );
};

export default Group;
