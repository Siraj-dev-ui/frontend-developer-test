import React from "react";
import nft_illustration from "../assets/images/nft_illustration.jpg";
import nft_illustration1 from "../assets/images/nft_illustration-1.jpg";
import nft_illustration3 from "../assets/images/nft_illustration3.jpg";

const NftListing = (props) => {
  const { image } = props;
  console.log(props);
  return (
    <div className="w-1/5 flex flex-col items-center rounded-[20px] bg-background text-[12px]">
      <div className="flex flex-col justify-center w-full p-2">
        <div className="w-full flex justify-between text-primarytext_selection my-1">
          <div>zombies # 7919</div>
          <div className="bg-black">
            <div className="w-full">
              <img
                className="bg-black w-full"
                src={require("../assets/icons/more options.png")}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={image}
            /*  height={"364px"}
          width={"364px"} */
            alt="abc"
            className="rounded-xl w-[160px] h-160px"
          />
        </div>

        <div className="  w-[200px] mx-auto bg-greylevel2_3 mt-2 py-1 px-2 rounded-[12px]">
          <div className="flex justify-between items-center my-1 bg-greylevel1 text-primarytext_selection px-1 py-1 rounded-[8px]">
            <div className="text-primarytext_selection">Owner</div>
            <div className="flex opacity-50">
              <div className="mr-3 ">|</div>
              <div>72UGr...YdD</div>
            </div>
          </div>
          <div className="flex justify-between items-center my-2 bg-greylevel1 text-primarytext_selection px-2 pt-3 pb-[10px] rounded-[8px]">
            <div className="text-primarytext_selection">Owner</div>
            <div className="flex opacity-50">
              <div className="mr-3 ">|</div>
              <div>72UGr...YdD</div>
            </div>
          </div>
          <div className="flex justify-between items-center my-2 bg-greylevel1 text-primarytext_selection px-2 pt-3 pb-[10px] rounded-[8px]">
            <div className="text-primarytext_selection">Owner</div>
            <div className="flex opacity-50">
              <div className="mr-3 ">|</div>
              <div>72UGr...YdD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftListing;
