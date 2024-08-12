import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright";

const Members: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white-100 overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-6 box-border gap-[34px] leading-[normal] tracking-[normal] mq900:gap-[17px] mq900:pl-6 mq900:box-border">
      <Copyright
        lionsAndArobats1="/lions-and-arobats-1@2x.png"
        onLinkContainerClick1={onLinkContainerClick}
      />
      <main className="flex-1 flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border max-w-[calc(100%_-_344px)] mq900:max-w-full">
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-x-[170px] gap-y-[84px] min-h-[910px] text-left text-5xl text-snow font-roboto mq450:gap-[21px] mq675:gap-[42px]">
          <div className="h-[365px] w-[300px] rounded-lg bg-gray-300 flex flex-col items-center justify-end py-[42px] pl-[21px] pr-5 box-border gap-2">
            <div className="relative tracking-[-0.01em] leading-[29px] font-semibold inline-block min-w-[109px] mq450:text-lgi">
              Jim Lopez
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[37px] pr-[39px] text-base">
              <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[35px]">
                Bass
              </div>
            </div>
          </div>
          <div className="h-[365px] w-[300px] rounded-lg bg-gray-300 flex flex-col items-center justify-end py-[42px] px-5 box-border gap-2">
            <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[127px] mq450:text-lgi">
              Andrew Son
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[34px] pr-[27px] text-base">
              <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[67px]">
                Keyboard
              </div>
            </div>
          </div>
          <div className="h-[365px] w-[300px] rounded-lg bg-gray-300 flex flex-col items-center justify-end py-[42px] pl-[21px] pr-5 box-border gap-[11px]">
            <div className="relative tracking-[-0.01em] leading-[29px] font-semibold inline-block min-w-[100px] mq450:text-lgi">
              Ling Lava
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[21px] pr-[23px] text-base">
              <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[57px]">
                Vocalist
              </div>
            </div>
          </div>
          <div className="h-[365px] w-[300px] rounded-lg bg-gray-300 flex flex-col items-start justify-end py-[42px] pl-[86px] pr-5 box-border gap-2">
            <div className="relative tracking-[-0.01em] leading-[29px] font-semibold inline-block min-w-[127px] mq450:text-lgi">
              Jiggy Ilagan
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[35px] text-base">
              <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[47px]">
                Drums
              </div>
            </div>
          </div>
          <div className="h-[365px] rounded-lg bg-gray-300 flex flex-col items-start justify-end py-11 pl-[53px] pr-[52px] box-border gap-1.5 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[-0.01em] leading-[29px] font-semibold mq450:text-lgi">
              Oteph Tumambing
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[47px] pr-[49px] text-base">
              <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[99px]">
                Electric Guitar
              </div>
            </div>
          </div>
          <div className="h-[365px] rounded-lg bg-gray-300 flex flex-col items-start justify-end py-[42px] px-[79px] box-border gap-[7px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[-0.01em] font-semibold mq450:text-lgi">
              Icoy Rapadas
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[42px] pr-[43px] text-base">
              <div className="relative tracking-[-0.01em] font-semibold inline-block min-w-[57px]">
                Vocalist
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Members;
