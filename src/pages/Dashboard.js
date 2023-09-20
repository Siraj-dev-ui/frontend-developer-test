import React from "react";
import NftListing from "../components/NftListing";
import nft_illustration from "../assets/images/nft_illustration.jpg";
import nft_illustration1 from "../assets/images/nft_illustration-1.jpg";
import nft_illustration3 from "../assets/images/nft_illustration3.jpg";

const Dashboard = () => {
  /* const data = [
    "../assets/images/nft_illustration.jpg",
    "../assets/images/nft_illustration-1.jpg",
    "../assets/images/nft_illustration3.jpg",
  ]; */
  const data = [nft_illustration, nft_illustration1, nft_illustration3];
  return (
    <div className="flex h-screen">
      {/* <div className="flex flex-col justify-between items-center fixed p-[24px] bg-background h-screen"> */}
      <div className="flex flex-col justify-between items-center fixed w-[70px] bg-background h-screen">
        <img src={require("../assets/images/Asset 3-8 1.png")} />
        <div>
          <img className="py-5" src={require("../assets/icons/iconHome.png")} />
          <img className="py-5" src={require("../assets/icons/iconNfts.png")} />
          <img
            className="py-5"
            src={require("../assets/icons/iconSetting.png")}
          />
        </div>
        <div className="relative">
          <img src={require("../assets/icons/iconBell.png")} />
          <img
            className="absolute top-0 right-0"
            src={require("../assets/icons/active notification.png")}
          />
        </div>
      </div>
      <div className="bg-background w-full ml-[70px]">
        {/* contenct */}
        <div className="bg-contentbackground w-full h-full rounded-l-[32px] px-7">
          <div className="">
            {/* row one  header*/}
            <div className="flex w-full justify-between pt-5">
              {/* content one */}
              <div className="flex bg-greylevel2_3 py-2 px-3 rounded-[14px]">
                <img
                  className="w-[24px] h-[24px]"
                  width={"24px"}
                  height={"24px"}
                  src={require("../assets/icons/iconVector.png")}
                />
                <div className="text-primarytext_selection mx-3">ETH/USDT</div>
                <div className="text-success w-full">1137.62 +2.62%↑</div>
              </div>
              {/* content two */}
              <div className="flex bg-greylevel2_3 py-2 px-3 rounded-[14px]">
                <img
                  className="w-[24px] h-[24px] rounded-[12px]"
                  src={require("../assets/images/avatar image.png")}
                />
                <div className="text-primarytext_selection mx-3">zash</div>
                <div className="text-primarytext_selection opacity-20">|</div>
                <div className="text-success ml-3">User ID: 11026666</div>
                {/* <span>+2.62%↑ </span> */}
              </div>
            </div>
            {/* row two */}
            <div className="flex w-full justify-between items-center pt-5">
              {/* content one */}
              <div className="text-primarytext_selection text-xl">
                Dashboard
              </div>
              {/* content two */}
              <div className="flex bg-greylevel2_3 py-2 px-3 rounded-[14px]">
                <img
                  className="w-[24px] h-[24px] rounded-[12px]"
                  src={require("../assets/icons/iconRefresh.png")}
                />
              </div>
            </div>
            {/* row three */}
            <div className="flex flex-row w-full justify-evenly items-center">
              <NftListing image={nft_illustration} />
              <NftListing image={nft_illustration1} />
              <NftListing image={nft_illustration3} />
            </div>
            {/* row four */}
            <div className="w-full flex flex-row mt-2 justify-center items-center">
              <div className="w-[180px] flex justify-between bg-background p-2 rounded-full">
                <img src={require("../assets/icons/back icon.png")} />
                <img src={require("../assets/icons/forward icon.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
