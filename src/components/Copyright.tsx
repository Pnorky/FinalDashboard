import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type CopyrightType = {
  className?: string;
  lionsAndArobats1?: string;

  /** Style props */
  lionsAcrobatsAllRightsWidth?: CSSProperties["width"];
  lionsAcrobatsAllRightsAlignSelf?: CSSProperties["alignSelf"];
  socialMediaLinksMargin?: CSSProperties["margin"];
  dashboardTextDecoration?: CSSProperties["textDecoration"];

  /** Action props */
  onLinkContainerClick1?: () => void;
  onLinkContainerClick2?: () => void;
};

const Copyright: FunctionComponent<CopyrightType> = ({
  className = "",
  lionsAcrobatsAllRightsWidth,
  lionsAcrobatsAllRightsAlignSelf,
  lionsAndArobats1,
  socialMediaLinksMargin,
  onLinkContainerClick1,
  onLinkContainerClick2,
  dashboardTextDecoration,
}) => {
  const copyrightStyle: CSSProperties = useMemo(() => {
    return {
      width: lionsAcrobatsAllRightsWidth,
      alignSelf: lionsAcrobatsAllRightsAlignSelf,
    };
  }, [lionsAcrobatsAllRightsWidth, lionsAcrobatsAllRightsAlignSelf]);

  const lionsAcrobatsStyle: CSSProperties = useMemo(() => {
    return {
      margin: socialMediaLinksMargin,
    };
  }, [socialMediaLinksMargin]);

  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: dashboardTextDecoration,
    };
  }, [dashboardTextDecoration]);

  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLinkContainerClick3 = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onLinkContainerClick4 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`w-[310px] flex flex-row items-start justify-start relative text-center text-xs text-lavenderblush font-roboto mq900:hidden ${className}`}
      style={copyrightStyle}
    >
      <div className="w-[323px] absolute !m-[0] right-[-9px] bottom-[11px] tracking-[-0.01em] leading-[20px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap z-[1]">{`© 2019 Lions&Acrobats. All rights reserved.`}</div>
      <div className="flex-1 rounded-tl-none rounded-tr-11xl rounded-b-none bg-gray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[38px] gap-[50px] text-left text-5xl mq450:gap-[25px]">
        <div className="self-stretch h-[1024px] relative rounded-tl-none rounded-tr-11xl rounded-b-none bg-gray-200 hidden" />
        <div className="self-stretch h-[314px] flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border">
          <div className="self-stretch flex-1 rounded-tl-none rounded-tr-11xl rounded-b-none bg-darkslategray-200 flex flex-col items-end justify-start pt-[19px] px-[52px] pb-1 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[310px] h-[300px] relative rounded-tl-none rounded-tr-11xl rounded-b-none bg-darkslategray-200 hidden" />
            <img
              className="self-stretch flex-1 relative rounded-11xl max-w-full overflow-hidden max-h-full object-cover z-[5]"
              loading="lazy"
              alt=""
              src={lionsAndArobats1}
            />
            <div className="w-[194px] flex flex-row items-start justify-end py-0 px-[7px] box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div
                  className="relative tracking-[-0.01em] leading-[36px] font-extrabold z-[4] mq450:text-lgi mq450:leading-[29px]"
                  style={lionsAcrobatsStyle}
                >{`Lions & Acrobats`}</div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-5 mt-[-8px] text-2xs">
                  <div className="flex-1 flex flex-row items-end justify-start gap-1">
                    <div className="h-[55px] w-8 relative">
                      <img
                        className="absolute top-[23px] left-[0px] w-8 h-8 overflow-hidden z-[2]"
                        alt=""
                        src="/icon--facebook.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[7px] w-[25px] h-[25px] overflow-hidden z-[3]"
                        loading="lazy"
                        alt=""
                        src="/icon--youtube.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                        <a
                          className="relative [text-decoration:underline] tracking-[-0.01em] leading-[36px] font-medium text-[inherit] inline-block min-w-[106.7px] shrink-0 z-[3]"
                          href="http://www.youtube.com/@lionsandacrobatsPH"
                          target="_blank"
                        >
                          @lionsandacrobatsPH
                        </a>
                      </div>
                      <div className="h-[26px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                        <a
                          className="mt-[-10px] relative [text-decoration:underline] tracking-[-0.01em] leading-[36px] font-medium text-[inherit] inline-block min-w-[94px] shrink-0 z-[2]"
                          href="http://www.facebook.com/@lionsandacrobats"
                          target="_blank"
                        >
                          @lionsandacrobats
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[291px] flex flex-row items-start justify-start py-0 px-[33px] box-border">
          <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-4 px-4 pb-[246px] gap-[25px] z-[1] text-left text-lg text-lavenderblush font-roboto mq675:pt-5 mq675:pb-40 mq675:box-border">
            <div
              className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-0 relative gap-2 cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border max-w-[18px]">
                <div className="h-[18px] w-px relative tracking-[-0.01em] leading-[18px] font-medium inline-block shrink-0">
                  {" "}
                </div>
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div
                className="w-[151px] absolute !m-[0] top-[9px] left-[57px] text-5xl tracking-[-0.01em] leading-[28px] font-medium inline-block mq450:text-lgi mq450:leading-[22px]"
                style={dashboardStyle}
              >
                Dashboard
              </div>
            </div>
            <div
              className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-[23px] relative gap-2 cursor-pointer"
              onClick={onLinkContainerClick1}
            >
              <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border max-w-[18px]">
                <div className="h-[18px] w-px relative tracking-[-0.01em] leading-[18px] font-medium inline-block shrink-0">
                  {" "}
                </div>
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
              </div>
              <div className="w-[113px] absolute !m-[0] top-[9px] left-[57px] text-5xl tracking-[-0.01em] leading-[28px] font-medium inline-block mq450:text-lgi mq450:leading-[22px]">
                Analytics
              </div>
            </div>
            <div
              className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-0 relative gap-2 cursor-pointer"
              onClick={onLinkContainerClick4}
            >
              <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border max-w-[18px]">
                <div className="h-[18px] w-px relative tracking-[-0.01em] leading-[18px] font-medium inline-block shrink-0">
                  {" "}
                </div>
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
              </div>
              <div className="w-[141px] absolute !m-[0] top-[8px] left-[54px] text-5xl tracking-[-0.01em] leading-[28px] font-medium inline-block mq450:text-lgi mq450:leading-[22px]">
                Music
              </div>
            </div>
            <div
              className="self-stretch h-[34px] rounded-md flex flex-row items-center justify-start py-0 pl-[3px] pr-0 box-border relative gap-2 text-17xl"
              onClick={onLinkContainerClick2}
            >
              <div className="h-[] w-9 !m-[0] absolute top-[-1px] left-[3px] flex flex-row items-start justify-start py-0 pl-0 pr-[35px] box-border max-w-[36px]">
                <h3 className="m-0 self-stretch flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-normal font-inherit mq450:text-3xl mq450:leading-[22px] mq900:text-10xl mq900:leading-[29px]">
                  {" "}
                </h3>
                <img
                  className="h-[30px] w-[30px] absolute !m-[0] top-[3px] left-[3px] overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-3.svg"
                />
              </div>
              <div className="w-[141px] absolute !m-[0] top-[2px] left-[52px] text-5xl tracking-[-0.01em] leading-[28px] font-medium inline-block mq450:text-lgi mq450:leading-[22px]">
                Members
              </div>
            </div>
          </nav>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[49px] pr-[46px] text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
            <div className="relative leading-[150%] z-[1]">
              Follow us on our Social Media
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[65px]">
              <div className="flex flex-row items-start justify-start gap-3">
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon--facebook-1.svg"
                />
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon--youtube-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
