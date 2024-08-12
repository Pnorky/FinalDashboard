import { FunctionComponent, useCallback } from "react";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
import Group from "../components/Group";
import Subscribers from "../components/Subscribers";
import Chart from "../components/Chart";
import DonutChart from "../components/DonutChart";
import Card from "../components/Card";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onLinkContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkContainerClick2 = useCallback(() => {
    navigate("/members");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[39px] box-border gap-[23px] leading-[normal] tracking-[normal] text-center text-xs text-lavenderblush font-roboto mq900:pl-5 mq900:box-border">
      <header className="w-[1052px] !m-[0] absolute top-[30px] right-[55px] flex flex-row items-end justify-between gap-5 max-w-full">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <button className="cursor-pointer [border:none] pt-[5px] pb-1 pl-[45px] pr-11 bg-gray-300 rounded-lg flex flex-row items-start justify-start hover:bg-darkslategray-100">
            <div className="h-[38px] w-[187px] relative rounded-lg bg-gray-300 hidden" />
            <a className="[text-decoration:none] relative text-5xl tracking-[-0.01em] font-semibold font-roboto text-snow text-left inline-block min-w-[98px] whitespace-nowrap z-[1]">
              Overview
            </a>
          </button>
        </div>
        <div className="w-[336px] flex flex-row items-start justify-start gap-8 max-w-full">
          <Search />
          <div className="w-36 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <div className="rounded-boundvariablesdata10 flex flex-row items-center justify-center">
                <img
                  className="h-boundvariablesdata15 w-boundvariablesdata15 relative"
                  loading="lazy"
                  alt=""
                  src="/sun.svg"
                />
              </div>
              <div className="rounded-boundvariablesdata10 flex flex-row items-center justify-center">
                <img
                  className="h-boundvariablesdata15 w-boundvariablesdata15 relative"
                  loading="lazy"
                  alt=""
                  src="/clockcounterclockwise.svg"
                />
              </div>
              <div className="rounded-boundvariablesdata10 flex flex-row items-center justify-center">
                <img
                  className="h-boundvariablesdata15 w-boundvariablesdata15 relative"
                  loading="lazy"
                  alt=""
                  src="/bell.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[310px] flex flex-row items-start justify-start relative mq900:hidden">
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
                src="/lions-and-arobats-1@2x.png"
              />
              <div className="w-[194px] flex flex-row items-start justify-end py-0 px-[7px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[36px] font-extrabold font-inherit z-[4] mq450:text-lgi mq450:leading-[29px]">{`Lions & Acrobats`}</h3>
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
          <div className="w-[291px] flex flex-row items-start justify-start py-0 px-[33px] box-border text-lg">
            <div className="flex-1 flex flex-col items-start justify-start pt-4 px-4 pb-[246px] gap-[25px] z-[1] mq675:pt-5 mq675:pb-40 mq675:box-border">
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-0 relative gap-2">
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
                <h3 className="!m-[0] w-[151px] absolute top-[9px] left-[57px] text-5xl tracking-[-0.01em] leading-[28px] font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[22px]">
                  Dashboard
                </h3>
              </div>
              <div
                className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-[23px] relative gap-2 cursor-pointer"
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
                    src="/frame-1.svg"
                  />
                </div>
                <h3 className="!m-[0] w-[113px] absolute top-[9px] left-[57px] text-5xl tracking-[-0.01em] leading-[28px] font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[22px]">
                  Analytics
                </h3>
              </div>
              <div
                className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-0 relative gap-2 cursor-pointer"
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
                    src="/frame-2.svg"
                  />
                </div>
                <h3 className="!m-[0] w-[141px] absolute top-[8px] left-[54px] text-5xl tracking-[-0.01em] leading-[28px] font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[22px]">
                  Music
                </h3>
              </div>
              <div
                className="self-stretch h-[34px] rounded-md flex flex-row items-center justify-start py-0 pl-[3px] pr-0 box-border relative gap-2 cursor-pointer text-17xl"
                onClick={onLinkContainerClick2}
              >
                <div className="h-[] w-9 !m-[0] absolute top-[-1px] left-[3px] flex flex-row items-start justify-start py-0 pl-0 pr-[35px] box-border max-w-[36px]">
                  <h1 className="m-0 self-stretch flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-normal font-inherit mq900:text-10xl mq900:leading-[29px] mq450:text-3xl mq450:leading-[22px]">
                    {" "}
                  </h1>
                  <img
                    className="h-[30px] w-[30px] absolute !m-[0] top-[3px] left-[3px] overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-3.svg"
                  />
                </div>
                <h3 className="!m-[0] w-[141px] absolute top-[2px] left-[52px] text-5xl tracking-[-0.01em] leading-[28px] font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[22px]">
                  Members
                </h3>
              </div>
            </div>
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
      <main className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-[calc(100%_-_333px)] mq900:max-w-full">
        <section className="self-stretch flex flex-col items-end justify-start gap-[15px] max-w-full text-left text-xl text-white-100 font-roboto">
          <Group />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
            <div className="h-[899px] flex-1 relative max-w-full mq675:h-auto mq675:min-h-[899]">
              <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-300 w-[280px] flex flex-col items-start justify-start pt-6 px-6 pb-[22px] box-border gap-[72px]">
                <a className="[text-decoration:none] w-[163px] relative tracking-[-0.01em] leading-[28px] font-bold text-[inherit] inline-block overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                  Monthly Listeners
                </a>
                <b className="self-stretch absolute !m-[0] right-[-114px] bottom-[62px] text-17xl tracking-[-0.01em] leading-[40px] inline-block overflow-hidden text-ellipsis whitespace-nowrap mq900:text-10xl mq900:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                  14,195
                </b>
                <div className="w-[171.6px] flex flex-row items-start justify-start gap-2 text-base text-mediumspringgreen">
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
                      5% from last month
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[315px] rounded-lg bg-gray-300 w-[280px] flex flex-col items-start justify-start pt-6 pb-[22px] pl-6 pr-0 box-border gap-4">
                <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                  Followers
                </b>
                <b className="self-stretch relative text-17xl tracking-[-0.01em] leading-[40px] overflow-hidden text-ellipsis whitespace-nowrap mq900:text-10xl mq900:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                  32,567
                </b>
                <div className="w-[162.6px] flex flex-row items-start justify-start gap-2 text-base text-mediumspringgreen">
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
                  <div className="flex-1 flex flex-row items-start justify-start max-w-[138.63px]">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                      8% from last month
                    </div>
                  </div>
                </div>
              </div>
              <Subscribers
                subscribers="Subscribers"
                prop="10,101"
                fromLastMonth="10% from last month"
              />
              <Subscribers
                propLeft="315px"
                subscribers="Views"
                prop="14,735"
                fromLastMonth="20% from last month"
              />
              <div className="absolute top-[395px] left-[4px] rounded-lg bg-gray-300 w-[764px] flex flex-col items-start justify-start pt-6 px-[29px] pb-[29px] box-border gap-[23px] max-w-full">
                <b className="w-[432px] relative tracking-[-0.01em] leading-[28px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq450:text-base mq450:leading-[22px]">
                  Revenue on Streaming Platforms and Shows
                </b>
                <div className="w-[691px] flex flex-row items-start justify-start relative max-w-full">
                  <div className="h-[382px] w-px absolute !m-[0] top-[0px] left-[45px] border-white-100 border-r-[1px] border-solid box-border" />
                  <img
                    className="h-[2.7px] w-[623px] absolute !m-[0] right-[23px] bottom-[17.5px] object-contain"
                    loading="lazy"
                    alt=""
                  />
                  <Chart showLeftText />
                </div>
              </div>
              <div className="absolute top-[0px] left-[630px] rounded-lg bg-gray-300 w-[433px] flex flex-col items-start justify-start pt-6 pb-[60px] pl-6 pr-0 box-border gap-4 max-w-full">
                <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                  Listener Age Group
                </b>
                <div className="w-[389px] flex flex-row flex-wrap items-end justify-start gap-[3px] max-w-full">
                  <DonutChart
                    propHeight="unset"
                    propWidth="unset"
                    propMinWidth="123px"
                    propFlex="1"
                    dataPoint="/frame-8.svg"
                    dataPoint1="/frame-9.svg"
                    dataPoint2="/frame-10.svg"
                    dataPoint3="/frame-11.svg"
                    propHeight1="unset"
                    propHeight2="115.9px"
                    propHeight3="189.9px"
                    propHeight4="52.5px"
                    propWidth2="unset"
                    propWidth3="81.6px"
                    propWidth4="unset"
                    propWidth5="45px"
                    propMargin="unset"
                    propMargin1="0 !important"
                    propMargin2="unset"
                    propMargin3="0 !important"
                    propPosition="relative"
                    propPosition1="absolute"
                    propPosition2="relative"
                    propPosition3="absolute"
                    propTop="unset"
                    propTop1="unset"
                    propTop2="unset"
                    propTop3="0px"
                    propLeft="unset"
                    propLeft1="0.2px"
                    propLeft2="unset"
                    propLeft3="49.8px"
                    propPadding="20px 8px 21px"
                    propPadding1="43px 10px 46.9px"
                    propPadding2="83px 15px 80.9px"
                    propPadding3="12px 0px 14.5px 2px"
                    propAlignSelf="stretch"
                    propAlignSelf1="unset"
                    propAlignSelf2="unset"
                    propAlignSelf3="unset"
                    propFlex1="1"
                    propFlex2="unset"
                    propFlex3="1"
                    propFlex4="unset"
                    propBottom="unset"
                    propBottom1="2.8px"
                    propBottom2="unset"
                    propBottom3="unset"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border min-w-[127px]">
                    <Card />
                  </div>
                </div>
              </div>
              <div className="absolute top-[337px] left-[787px] rounded-lg bg-gray-300 w-[276px] flex flex-col items-start justify-start pt-6 px-6 pb-[9px] box-border gap-4">
                <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                  Top Music Platforms
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 text-base">
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="w-[67px] flex flex-row items-baseline justify-start py-0 px-0 box-border max-w-[66.98px]">
                      <div className="w-[95px] relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                        <ol className="m-0 font-inherit text-inherit pl-[21px]">
                          <li>Facebook</li>
                        </ol>
                      </div>
                    </div>
                    <div className="w-12 flex flex-row items-baseline justify-start max-w-[57.05px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        15,345
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="w-[105.2px] flex flex-row items-baseline justify-start max-w-[105.17px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        <ol className="m-0 font-inherit text-inherit pl-[21px]">
                          <li>Spotify</li>
                        </ol>
                      </div>
                    </div>
                    <div className="flex flex-row items-baseline justify-start py-0 px-0 box-border max-w-[48.06px]">
                      <div className="w-[54px] relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                        10,986
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="w-[126.5px] flex flex-row items-baseline justify-start max-w-[126.55px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        <ol className="m-0 font-inherit text-inherit pl-[21px]">
                          <li>Apple Music</li>
                        </ol>
                      </div>
                    </div>
                    <div className="w-[48.1px] flex flex-row items-baseline justify-start max-w-[48.06px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {" "}
                        5,670
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[521px] left-[783px] rounded-lg bg-gray-300 w-[284px] flex flex-col items-start justify-start pt-6 pb-[11px] pl-6 pr-3 box-border gap-4">
                <b className="w-[236px] relative tracking-[-0.01em] leading-[28px] inline-block overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                  Top Playlists
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 text-base">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                    <div className="w-[191px] flex flex-row items-baseline justify-start max-w-[209.2px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        1. Best of Lions and Acrobats
                      </div>
                    </div>
                    <div className="w-[57px] flex flex-row items-baseline justify-start max-w-[57.05px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        567,890
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="w-[148.2px] flex flex-row items-baseline justify-start max-w-[148.17px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        2. Acoustic Sessions
                      </div>
                    </div>
                    <div className="w-[57px] flex flex-row items-baseline justify-start max-w-[57.05px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        456,789
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-5">
                    <div className="w-[84.5px] flex flex-row items-baseline justify-start max-w-[84.45px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        3. Indie Hits
                      </div>
                    </div>
                    <div className="w-[57px] flex flex-row items-baseline justify-start max-w-[57.05px]">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                        345,678
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[729px] left-[787px] rounded-lg bg-gray-300 w-[280px] flex flex-col items-start justify-start pt-6 pb-[22px] pl-6 pr-5 box-border gap-4">
                <b className="self-stretch relative tracking-[-0.01em] leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[22px]">
                  Most Played Track
                </b>
                <h1 className="m-0 self-stretch relative text-17xl tracking-[-0.01em] leading-[40px] font-bold font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq900:text-10xl mq900:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                  Cloud
                </h1>
                <div className="w-[171.6px] flex flex-row items-start justify-start gap-2 text-base text-mediumspringgreen">
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
                  <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border max-w-[147.61px]">
                    <div className="w-[158px] relative tracking-[-0.01em] leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                      898,206 Times Played
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
