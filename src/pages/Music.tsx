import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Streams1 from "../components/Streams1";
import Streams from "../components/Streams";

const Music: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLinkContainerClick1 = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onLinkContainerClick2 = useCallback(() => {
    navigate("/members");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-[30px] box-border gap-[18px] leading-[normal] tracking-[normal] text-center text-xs text-lavenderblush font-roboto mq1000:pl-[30px] mq1000:box-border">
      <div className="w-[310px] flex flex-row items-start justify-start relative mq1000:hidden">
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
                  <div className="relative tracking-[-0.01em] leading-[36px] font-extrabold z-[4] mq450:text-lgi mq450:leading-[29px]">{`Lions & Acrobats`}</div>
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
            <div className="flex-1 flex flex-col items-start justify-start pt-4 px-4 pb-[246px] gap-[25px] z-[1] mq725:pt-5 mq725:pb-40 mq725:box-border">
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
                <div className="w-[151px] absolute !m-[0] top-[9px] left-[57px] text-5xl tracking-[-0.01em] leading-[28px] font-medium inline-block mq450:text-lgi mq450:leading-[22px]">
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
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-2 pl-2 pr-0 relative gap-2">
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
                className="self-stretch h-[34px] rounded-md flex flex-row items-center justify-start py-0 pl-[3px] pr-0 box-border relative gap-2 cursor-pointer text-17xl"
                onClick={onLinkContainerClick2}
              >
                <div className="h-[] w-9 !m-[0] absolute top-[-1px] left-[3px] flex flex-row items-start justify-start py-0 pl-0 pr-[35px] box-border max-w-[36px]">
                  <h3 className="m-0 self-stretch flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-normal font-inherit mq1000:text-10xl mq1000:leading-[29px] mq450:text-3xl mq450:leading-[22px]">
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
      <main className="flex-1 flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-[calc(100%_-_328px)] mq1000:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-5xl text-snow font-roboto">
          <header className="w-[100%] flex flex-row items-start justify-between gap-5 max-w-full text-left text-5xl text-snow font-roboto">
            <button className="cursor-pointer [border:none] py-[5px] px-[45px] bg-gray-300 w-[187px] rounded-lg flex flex-row items-start justify-start box-border hover:bg-darkslategray-100">
              <div className="h-[38px] w-[187px] relative rounded-lg bg-gray-300 hidden" />
              <a className="[text-decoration:none] relative text-5xl tracking-[-0.01em] font-semibold font-roboto text-snow text-left inline-block min-w-[81px] z-[1]">
                Albums
              </a>
            </button>
            <div className=" items-start justify-start   whitespace-nowrap">
              <div className=" rounded-lg bg-gray-300 ml-[-700px] py-[5px] pl-2 pr-1.5 flex flex-row  w-fit">
                <a className=" [text-decoration:none]  relative tracking-[-0.01em] leading-[29px] font-semibold text-[inherit] z-[1]">
                  Popular Singles
                </a>
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-32 max-w-full mq450:gap-4 mq725:gap-8 mq1050:gap-16">
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[310px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-24 mq725:gap-12">
                <div className="self-stretch rounded-lg bg-gray-300 flex flex-col items-start justify-start pt-[65px] px-[30px] pb-16 gap-1 mq450:pt-[42px] mq450:pb-[42px] mq450:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 gap-[49.8px] mq450:gap-[25px] mq725:flex-wrap">
                    <img
                      className="h-[187px] w-[209.2px] relative rounded-corner-small object-cover mq725:flex-1"
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <div className="w-[153px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[153px] mq725:flex-1">
                      <Streams1 streams="80,087 Streams" />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[55px]">
                    <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[99px] mq450:text-lgi">
                      Mundane
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-11 text-base">
                    <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[121px]">
                      Released in 2017
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-start pt-[67px] px-[25px] pb-[59px] gap-[11px] mq450:pt-11 mq450:pb-[38px] mq450:box-border mq725:flex-wrap">
                  <div className="flex flex-col items-end justify-start gap-[19px] min-w-[253px] mq725:flex-1">
                    <div className="flex flex-row items-start justify-end py-0 pl-[33px] pr-8">
                      <img
                        className="h-[187px] w-[187.4px] relative rounded-lg object-cover"
                        loading="lazy"
                        alt=""
                        src="/pp@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[-0.01em] leading-[29px] font-semibold mq450:text-lgi">
                        Points and Perspectives
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[66px] text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
                        <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[121px]">
                          Released in 2014
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[153px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[153px] mq725:flex-1">
                    <Streams1
                      propPadding="unset"
                      streams="40,698 Streams"
                      propWidth="unset"
                      propDisplay="unset"
                      propFlex="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[45px] min-w-[310px] max-w-full mq725:gap-[22px]">
              <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-start pt-10 pb-[38px] pl-10 pr-[39px] gap-[52px] mq725:flex-wrap mq725:gap-[26px]">
                <img
                  className="h-[187px] w-[187px] relative rounded-lg object-cover mq725:flex-1"
                  loading="lazy"
                  alt=""
                  src="/tropic-thunder@2x.png"
                />
                <div className="w-[159px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[159px] mq725:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                    <div className="flex flex-col items-start justify-start">
                      <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[29px] font-semibold text-[inherit] whitespace-nowrap mq450:text-lgi">
                        Tropic Thunder
                      </a>
                      <div className="flex flex-row items-start justify-start py-0 px-[19px] text-base">
                        <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[121px]">
                          Released in 2024
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
                      <Streams1
                        propPadding="unset"
                        streams="11,457 Streams"
                        propWidth="unset"
                        propDisplay="unset"
                        propFlex="1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[39px] mq725:gap-[19px]">
                <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-start pt-10 px-10 pb-[43px] gap-[49px] mq725:flex-wrap mq725:gap-6">
                  <img
                    className="h-[187px] w-[187px] relative rounded-lg object-cover mq725:flex-1"
                    loading="lazy"
                    alt=""
                    src="/patch-adams@2x.png"
                  />
                  <div className="w-[153px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[153px] mq725:flex-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                      <div className="flex flex-row items-start justify-start py-0 px-1.5">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative tracking-[-0.01em] leading-[29px] font-semibold whitespace-nowrap mq450:text-lgi">
                            Patch Adams
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-2.5 text-base">
                            <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[121px]">
                              Released in 2020
                            </div>
                          </div>
                        </div>
                      </div>
                      <Streams cahrt="/chart.svg" streams="69,878 Streams" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-start justify-start p-10 gap-[50px] mq725:flex-wrap mq725:gap-[25px]">
                  <img
                    className="h-[187px] w-[187px] relative rounded-lg object-cover mq725:flex-1"
                    loading="lazy"
                    alt=""
                    src="/warrior@2x.png"
                  />
                  <div className="w-[153px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[153px] mq725:flex-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-5">
                      <div className="flex flex-row items-start justify-start py-0 px-4">
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-0 pl-[22px] pr-[21px]">
                            <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[78px] mq450:text-lgi">
                              Warrior
                            </div>
                          </div>
                          <div className="relative text-base tracking-[-0.01em] font-semibold inline-block min-w-[121px]">
                            Released in 2019
                          </div>
                        </div>
                      </div>
                      <Streams cahrt="/chart.svg" streams="30,897 Streams" />
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

export default Music;
