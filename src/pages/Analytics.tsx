import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright";
import FrameComponent1 from "../components/FrameComponent1";

const Analytics: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/members");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[23px] leading-[normal] tracking-[normal] text-left text-xl text-white-100 font-roboto lg:flex-wrap lg:p-5 lg:box-border">
      <div className="w-[315px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border">
        <Copyright
          lionsAcrobatsAllRightsWidth="unset"
          lionsAcrobatsAllRightsAlignSelf="stretch"
          lionsAndArobats1="/lions-and-arobats-1@2x.png"
          socialMediaLinksMargin="0"
          onLinkContainerClick2={onLinkContainerClick}
          dashboardTextDecoration="unset"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border min-w-[442px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
          <div className="self-stretch rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 px-[29px] pb-[22px] box-border gap-5 max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
            <a className="[text-decoration:none] w-[432px] relative tracking-[-0.01em] leading-[28px] font-bold text-[inherit] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq450:text-base mq450:leading-[22px]">{`Popularity `}</a>
            <div className="w-[608px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-center text-smi">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="w-[537px] flex flex-row items-end justify-start gap-1 max-w-full mq750:flex-wrap">
                  <div className="flex flex-row items-start justify-start py-0 px-0 gap-1">
                    <b className="w-10 relative tracking-[-0.01em] leading-[28px] inline-block shrink-0">
                      <p className="m-0">30,000</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">20,000</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">10,000</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">5,000</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">0</p>
                    </b>
                    <div className="h-[323px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                      <img
                        className="w-px flex-1 relative max-h-full object-contain shrink-0"
                        loading="lazy"
                        alt=""
                        src="/line-3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border min-w-[320px] max-w-full">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[66.8px] max-w-full mq750:gap-[33px]">
                      <div className="w-[477px] flex flex-row items-start justify-end py-0 px-3.5 box-border max-w-full">
                        <img
                          className="h-[195.2px] flex-1 relative max-w-full overflow-hidden object-contain"
                          loading="lazy"
                          alt=""
                          src="/line-5.svg"
                        />
                      </div>
                      <img
                        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-13px] text-left font-headline">
                  <div className="w-[493px] relative tracking-[-0.01em] leading-[28px] whitespace-pre-wrap inline-block shrink-0 max-w-full">
                    Jan Feb Mar Apr May Jun Jul Aug Sept
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-6 px-6 pb-[65px] box-border gap-[27px] max-w-full mq450:pt-5 mq450:pb-[42px] mq450:box-border">
            <b className="w-[432px] relative tracking-[-0.01em] leading-[28px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq450:text-base mq450:leading-[22px]">
              Live Show Frequency
            </b>
            <div className="w-[618px] flex flex-col items-end justify-start gap-[7px] max-w-full text-right text-3xs-7 font-headline">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[11px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                  <div className="w-[27.9px] flex flex-col items-end justify-start gap-[45.8px]">
                    <div className="w-[26.5px] relative leading-[13px] font-semibold inline-block">
                      20
                    </div>
                    <div className="w-[26.5px] relative leading-[13px] font-semibold inline-block">
                      15
                    </div>
                    <div className="w-[26.5px] relative leading-[13px] font-semibold inline-block">
                      10
                    </div>
                    <div className="w-[26.5px] relative leading-[13px] font-semibold inline-block">
                      5
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px">
                      <div className="flex-1 relative leading-[12.61px] font-semibold">
                        0
                      </div>
                    </div>
                  </div>
                  <div className="h-[257px] w-[30.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[18px] box-border">
                    <img
                      className="w-3 flex-1 relative rounded-81xl max-h-full"
                      loading="lazy"
                      alt=""
                      src="/jan.svg"
                    />
                  </div>
                  <div className="h-[259px] w-[28.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-4 box-border">
                    <img
                      className="w-3 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/feb.svg"
                    />
                  </div>
                  <div className="h-[259px] w-[27.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[15px] box-border">
                    <img
                      className="w-3 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/feb.svg"
                    />
                  </div>
                  <div className="h-[257px] w-[29.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[17px] box-border">
                    <img
                      className="w-3 flex-1 relative rounded-81xl max-h-full"
                      loading="lazy"
                      alt=""
                      src="/jan.svg"
                    />
                  </div>
                  <div className="h-[259px] w-[32.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-5 box-border">
                    <img
                      className="w-3 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/may.svg"
                    />
                  </div>
                  <div className="h-[257px] w-[27.4px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[15px] box-border">
                    <img
                      className="w-3 flex-1 relative rounded-81xl max-h-full"
                      loading="lazy"
                      alt=""
                      src="/jan.svg"
                    />
                  </div>
                  <div className="h-[258.2px] w-[29.4px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[15px] box-border">
                    <img
                      className="w-[14.1px] flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/july.svg"
                    />
                  </div>
                  <div className="h-[257px] w-[29.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[17px] box-border">
                    <img
                      className="w-3 flex-1 relative rounded-81xl max-h-full"
                      alt=""
                      src="/jan.svg"
                    />
                  </div>
                  <div className="h-[257px] w-[29.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[17px] box-border">
                    <img
                      className="w-3 flex-1 relative rounded-81xl max-h-full"
                      alt=""
                      src="/jan.svg"
                    />
                  </div>
                  <div className="h-[259px] w-[28.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-4 box-border">
                    <img
                      className="w-3 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/october.svg"
                    />
                  </div>
                  <div className="h-[259px] w-[29.9px] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[17px] box-border">
                    <img
                      className="w-3 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/november.svg"
                    />
                  </div>
                  <div className="h-[259px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <img
                      className="w-3 flex-1 relative rounded-81xl max-h-full"
                      loading="lazy"
                      alt=""
                      src="/december.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[579px] flex flex-row items-start justify-start py-0 pl-0 pr-0.5 box-border gap-[15px] max-w-full text-center text-4xs mq750:flex-wrap">
                <div className="h-[35px] flex-1 relative font-medium flex items-center justify-center min-w-[32px] max-w-[30px]">
                  JAN
                </div>
                <div className="h-[35px] flex-1 relative font-medium flex items-center justify-center min-w-[32px] max-w-[30px]">
                  FEB
                </div>
                <div className="flex-[0.875] flex flex-col items-start justify-start pt-2 pb-0 pl-0 pr-[5px] box-border min-w-[39px] max-w-[40px] mq450:flex-1">
                  <div className="self-stretch h-[19px] relative font-medium flex items-center justify-center shrink-0">
                    MAR
                  </div>
                </div>
                <div className="flex-[0.8235] flex flex-col items-start justify-start py-0 pl-0 pr-1.5 box-border min-w-[36px] max-w-[34px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    APR
                  </div>
                </div>
                <div className="flex-[0.8108] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border min-w-[36px] max-w-[37px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    MAY
                  </div>
                </div>
                <div className="flex-[0.9063] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border min-w-[32px] max-w-[32px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    JUN
                  </div>
                </div>
                <div className="flex-[0.8788] flex flex-col items-start justify-start py-0 pl-0 pr-1 box-border min-w-[36px] max-w-[33px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    JUL
                  </div>
                </div>
                <div className="flex-[0.9211] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border min-w-[37px] max-w-[38px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    AUG
                  </div>
                </div>
                <div className="flex-[0.8571] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border min-w-[37px] max-w-[35px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    SEP
                  </div>
                </div>
                <div className="flex-[0.9189] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border min-w-[37px] max-w-[37px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    OCT
                  </div>
                </div>
                <div className="flex-[0.9167] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border min-w-[37px] max-w-[36px] mq450:flex-1">
                  <div className="self-stretch h-[35px] relative font-medium flex items-center justify-center shrink-0">
                    NOV
                  </div>
                </div>
                <div className="h-[35px] flex-1 relative font-medium flex items-center justify-center min-w-[32px] max-w-[30px]">
                  DEC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[377px] flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border max-w-full mq750:pt-[25px] mq750:box-border mq1050:pt-[39px] mq1050:box-border">
        <FrameComponent1 />
      </div>
    </div>
  );
};

export default Analytics;
