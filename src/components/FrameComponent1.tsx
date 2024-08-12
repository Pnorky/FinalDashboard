import { FunctionComponent } from "react";
import DonutChart from "./DonutChart";
import Card from "./Card";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-xl text-white-100 font-roboto mq450:gap-[17px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pl-px pr-2.5 box-border max-w-full">
        <div className="w-[366px] rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 pb-[42px] pl-6 pr-0 box-border gap-4 max-w-full">
          <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
            Music Genre
          </b>
          <div className="w-[374px] flex flex-row items-end justify-start gap-[11px] max-w-[110%] shrink-0 text-xs font-headline mq450:flex-wrap">
            <DonutChart
              dataPoint="/frame-41.svg"
              dataPoint1="/frame-5.svg"
              dataPoint2="/frame-6.svg"
              dataPoint3="/frame-7.svg"
              propHeight1="unset"
              propHeight2="115.9px"
              propHeight3="unset"
              propWidth2="unset"
              propWidth3="87.6px"
              propWidth4="unset"
              propMargin="unset"
              propMargin1="0 !important"
              propMargin2="unset"
              propPosition="relative"
              propPosition1="absolute"
              propPosition2="relative"
              propTop="unset"
              propTop1="unset"
              propTop2="unset"
              propLeft="unset"
              propLeft1="0.3px"
              propLeft2="unset"
              propPadding="20px 11px 21px"
              propPadding1="43px 13px 46.9px"
              propPadding2="83px 20px 80.9px"
              propAlignSelf="stretch"
              propAlignSelf1="unset"
              propAlignSelf2="stretch"
              propFlex1="1"
              propFlex2="unset"
              propFlex3="1"
              propBottom="unset"
              propBottom1="2.8px"
              propBottom2="unset"
            />
            <div className="w-[211px] flex flex-col items-start justify-end pt-0 px-0 pb-[26px] box-border min-w-[211px] shrink-0 text-base font-roboto mq450:flex-1">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
          <div className="flex-1 rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 pb-[18.7px] pl-[21px] pr-0 box-border gap-2 min-w-[156px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
              <b className="flex-1 relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                New Listeners
              </b>
            </div>
            <div className="w-[135px] flex flex-row items-start justify-start pt-2 px-[3px] pb-[52.7px] box-border relative text-5xl font-headline">
              <b className="w-[78.6px] relative flex items-center shrink-0 mq450:text-lgi">
                +34%
              </b>
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/graph.svg"
              />
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 px-[11px] pb-[18.7px] box-border gap-2 min-w-[156px]">
            <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
              New Subscribers
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[11px] text-5xl font-headline">
              <div className="flex-1 flex flex-row items-start justify-start pt-2 px-[3px] pb-[52.7px] relative">
                <b className="w-[78.6px] relative flex items-center shrink-0 mq450:text-lgi">
                  +14%
                </b>
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/graph.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
          <div className="flex-1 rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 px-6 pb-[15px] box-border gap-4 max-w-full">
            <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
              Top Countries
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-base">
              <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                <div className="w-[112.3px] flex flex-row items-baseline justify-start max-w-[112.31px]">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <ol className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>Philippines</li>
                    </ol>
                  </div>
                </div>
                <div className="w-[48.1px] flex flex-row items-baseline justify-start max-w-[48.06px]">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                    62,431
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                <div className="w-[130.8px] flex flex-row items-baseline justify-start max-w-[130.83px]">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <ol className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>United States</li>
                    </ol>
                  </div>
                </div>
                <div className="w-[48.1px] flex flex-row items-baseline justify-start max-w-[48.06px]">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                    48,926
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                <div className="w-[71.5px] flex flex-row items-baseline justify-start py-0 px-0 box-border max-w-[71.53px]">
                  <div className="w-20 relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                    <ol className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>Canada</li>
                    </ol>
                  </div>
                </div>
                <div className="w-[48.1px] flex flex-row items-baseline justify-start max-w-[48.06px]">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                    37,811
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-base">
          <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-between p-4 gap-5 mq450:flex-wrap">
            <div className="w-[126.8px] flex flex-row items-start justify-start max-w-[126.8px]">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                Monthly Listeners
              </div>
            </div>
            <div className="w-[69.2px] flex flex-row items-start justify-start max-w-[69.2px]">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                3,456,789
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-between p-4 gap-5 mq450:flex-wrap">
            <div className="w-[68.9px] relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              Followers
            </div>
            <div className="w-[69.2px] relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              2,345,678
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-between p-4 gap-5 mq450:flex-wrap">
            <div className="w-[49px] flex flex-row items-start justify-start max-w-[49px]">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                Shares
              </div>
            </div>
            <div className="w-[69.2px] flex flex-row items-start justify-start max-w-[69.2px]">
              <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                1,987,654
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
