import React from "react";
import Image from "next/image";

const CardPin2 = ({ theme }) => {
  return (
    <div
      className={`relative top-1/2 -translate-y-1/2 md:left-5 ${
        theme === "white" ? `text-${theme}` : "text-[#FFFF00]"
      }`}
    >
      <div
        className={`w-[314px] h-[489px] ${
          theme === "white" ? "bg-black/75" : "bg-black"
        } flex gap-2 rounded-xl md:rounded-3xl rounded-ee-3xl relative border-0 ml-[10px] sm:ml-[20px] md:ml-[30px] lg:ml-[50px] 2xl:ml-[108px] cardPin2`}
      >
        <div className="absolute top-[25px] -right-[10px] w-[45px] h-[240.43px] overflow-auto">
          {/* <div className="flex absolute top-[21px] w-full"></div> */}
          <div className="relative flex overflow-visible w-full h-full">
            <div className="flex-1">
              {theme === "black" ? (
                <Image
                  src="/images/lockY.png"
                  width={12.18}
                  height={15.5}
                  alt="lock"
                />
              ) : (
                <Image
                  src="/images/lockw.png"
                  width={12.18}
                  height={15.5}
                  alt="lock"
                />
              )}
            </div>
            <div
              className={`origin-top-left absolute top-0 left-full rotate-90 flex-1 text-[7px] w-[240.43px] tracking-[1.5px] ${
                theme === "black" ? "text-black" : "text-white"
              }`}
            >
              Advance Encryption standard (AES) 256-BIT
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start gap-2 w-full">
          <div
            className={`${
              theme === "black" ? "bg-[#FFFF00]" : ""
            } -translate-y-[1px] -translate-x-[1px] w-[80px] xl:w-[110px] h-[92px] relative add-file`}
          >
            <label htmlFor="fileInput" className="cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Image
                src="/images/Add.png"
                width={67.56}
                height={67.56}
                alt="add"
                className={`${theme === "white" ? "invert" : ""} z-10 `}
              />
            </label>
          </div>
          <div className="flex flex-col justify-start items-start mt-[20px] text-[10px] md:text-[14px] uppercase select-folder">  
            <span className=" md:tracking-[2px]">Upload Files</span>
            <span className="font-normal md:text-[20px] lg:text-[30px] xl:text-[40px]">OR</span>
            <span className="text-end self-end md:tracking-[2px] ml-[25px] whitespace-nowrap">
            SELECT A FOLDER
            </span>
          </div>
          <div className="text-center absolute top-[32%] -right-2 sm:-right-[79px] -translate-1/2 translate-x-10 md:translate-x-0 flex flex-col uppercase upto-text">
            <div className="flex gap-3 lg:gap-5 text-bold text-[25px] sm:text-[40px] ">
              <span className="font-normal relative">
                up{" "}
              </span>
              <span className="font-normal  relative">
                to{" "}
              </span>
              <span
                className={
                  theme === "black"
                    ? "text-black relative"
                    : "relative flex gap-5"
                }
              >
                <span>1tb</span>
              </span>
            </div>
            <div>
              <span className="font-normal text-[12px] md:text-[20px] block">
                free
              </span>
            </div>
          </div>
          {theme === "black" ? (
            <div className="absolute left-0 bottom-[50.5px] sm:bottom-[70.5px] right-0 flex flex-col gap-6 px-5 uppercase text-[12px] mx-[5px] md:mx-[15px] xl:mx-[25.5px] inputs-fields">
              <input
                type="text"
                className="text-[#FFFF00] placeholder:text-[#FFFF00] bg-transparent ring-0 border-b-2 border-[#FFFF00] outline-none pb-2 placeholder:uppercase"
                placeholder="Title"
              />
              <textarea
                rows={3}
                className="text-[#FFFF00] placeholder:text-[#FFFF00] bg-transparent ring-0 border-b-2 border-[#FFFF00] outline-none placeholder:uppercase"
                placeholder="Note"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          ) : (
            <div className="absolute left-0 bottom-[50.5px] sm:bottom-[70.5px] right-0 flex flex-col gap-5 uppercase text-[12px] mx-[5px] md:mx-[15px] xl:mx-[25.5px] inputs-fields">
              <input
                type="text"
                className=" placeholder:text-white bg-transparent ring-0 border-b-2 border-white outline-none pb-2 placeholder:uppercase"
                placeholder="Title"
              />
              <textarea
                rows={3}
                className=" placeholder:text-white bg-transparent ring-0 border-b-2 border-white outline-none placeholder:uppercase"
                placeholder="Note"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          )}
        </div>
        <button className="absolute bottom-3 right-3">
          {theme === "black" ? (
            <Image src="/images/Menu.png" width={6.71} height={25} alt="menu" />
          ) : (
            <Image
              src="/images/Menuw.png"
              className="invert"
              width={6.71}
              height={25}
              alt="menu"
            />
          )}
        </button>
        <input type="file" name="" id="fileInput" className="hidden" />
      </div>
    </div>
  );
};

export default CardPin2;
