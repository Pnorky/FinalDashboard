import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SubscribersType = {
  className?: string;
  subscribers?: string;
  prop?: string;
  fromLastMonth?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const Subscribers: FunctionComponent<SubscribersType> = ({
  className = "",
  propLeft,
  subscribers,
  prop,
  fromLastMonth,
}) => {
  const subscribersStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[202px] left-[0px] rounded-lg bg-gray-300 w-[280px] flex flex-col items-start justify-start pt-6 px-6 pb-[22px] box-border gap-4 text-left text-xl text-white-100 font-roboto ${className}`}
      style={subscribersStyle}
    >
      <div className="w-[370px] flex flex-row items-start justify-start max-w-[160%] shrink-0">
        <b className="w-[163px] relative tracking-[-0.01em] leading-[28px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0 mq450:text-base mq450:leading-[22px]">
          {subscribers}
        </b>
      </div>
      <div className="w-[370px] flex flex-row items-start justify-start max-w-[160%] shrink-0 text-17xl">
        <b className="flex-1 relative tracking-[-0.01em] leading-[40px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq900:text-10xl mq900:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
          {prop}
        </b>
      </div>
      <div className="w-[172px] flex flex-row items-start justify-start gap-2 text-base text-mediumspringgreen">
        <div className="h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <div className="w-full flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-[15px] box-border relative max-w-[16px]">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[16px]">
              {" "}
            </div>
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[-1px] bottom-[0px] max-h-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start max-w-[147.61px]">
          <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
            {fromLastMonth}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
