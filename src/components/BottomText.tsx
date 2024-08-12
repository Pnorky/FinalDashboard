import { FunctionComponent } from "react";

export type BottomTextType = {
  className?: string;
};

const BottomText: FunctionComponent<BottomTextType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] z-[1] ml-[-652px] text-center text-xs text-white-100 font-headline mq675:flex-wrap ${className}`}
    >
      <div className="flex-1 relative leading-[18px] inline-block min-w-[107px] max-w-[109px] shrink-0">
        Youtube
      </div>
      <div className="flex-1 relative leading-[18px] inline-block min-w-[107px] max-w-[109px] shrink-0">
        Spotify
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[107px] max-w-[109px]">
        <div className="ml-[-0.1px] self-stretch relative leading-[18px] shrink-0">
          Apple Music
        </div>
      </div>
      <div className="flex-1 relative leading-[18px] inline-block min-w-[107px] max-w-[109px] shrink-0">
        Facebook
      </div>
      <div className="flex-1 relative leading-[18px] inline-block min-w-[107px] max-w-[109px] shrink-0">
        Soundcloud
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[107px] max-w-[109px] text-gray-100">
        <div className="ml-[-0.1px] self-stretch relative leading-[18px] shrink-0">
          Live Shows
        </div>
      </div>
    </div>
  );
};

export default BottomText;
