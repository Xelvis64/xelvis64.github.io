import React from "react";
import {BiFileFind} from "react-icons/bi";
import {FaLaptopCode} from "react-icons/fa";
import {MdEmojiPeople} from "react-icons/md";
import {useInView} from "react-intersection-observer";
const Main = () => {
  const {ref, inView} = useInView({
    threshold: 0,
  });
  const MissionsContent = () => {
    return (
      <div className="px-8 py-12 flex flex-col">
        <h2 className="text-primary font-bold text-2xl my-3">Our missions</h2>
        <h2 className="font-bold text-3xl">Develop technologies, enhance knowledge.</h2>
        <h2 className="font-bold text-3xl">Quality product is number one priority.</h2>
        <div className="flex flex-col md:flex-row mt-12 justify-evenly items-center px-8 ">
          <div
            className={`flex flex-col w-full md:w-1/4 my-2 lg:w-1/5 justify-center items-center p-4 border-2 border-secondary rounded-[24px] min-w-[260px] ${
              inView && "animate-l_join"
            }`}
          >
            <div className="text-xl font-medium text-secondary">Research</div>
            <BiFileFind className="text-4xl text-secondary my-1" />
            <div className="text-primary text-center font-medium">
              Scientific research are conducted in various fields
            </div>
          </div>
          <div
            className={`flex flex-col w-full md:w-1/4 my-2 lg:w-1/5 justify-center items-center p-4 border-2 border-secondary rounded-[24px] min-w-[260px] ${
              inView && "animate-b_join"
            }`}
          >
            <div className="text-xl font-medium text-secondary">Develop</div>
            <FaLaptopCode className="text-4xl text-secondary my-1" />
            <div className="text-primary text-center font-medium">
              Products of many types are always being developed
            </div>
          </div>
          <div
            className={`flex flex-col w-full md:w-1/4 my-2 lg:w-1/5 justify-center items-center p-4 border-2 border-secondary rounded-[24px] min-w-[260px] ${
              inView && "animate-r_join"
            }`}
          >
            <div className="text-xl font-medium text-secondary">Growth</div>
            <MdEmojiPeople className="text-4xl text-secondary my-1" />
            <div className="text-primary text-center font-medium">
              Personal growth can be made here through different means
            </div>
          </div>
        </div>
      </div>
    );
  };
  const BlogsContent = () => {
    return (
      <div className="px-8 flex flex-col">
        <h2 className="text-primary font-bold text-2xl my-4">Read our blogs</h2>
        <div className="flex flex-col md:flex-row mb-12 p-4 justify-evenly items-center px-8 text-left">
          <div
            className={`flex flex-col min-h-[330px] w-full md:w-1/4 my-2 lg:w-1/5 overflow-hidden items-center bg-white drop-shadow-lg rounded-[24px] min-w-[260px] ${
              inView && "animate-t_join"
            }`}
          >
            <div className="h-1/3 w-full">
              <img src={"../../images/blog1.jfif"} height={"100%"} width={"100%"} alt="blog"></img>
            </div>
            <div className="p-4">
              <div className="text-xl font-bold text-primary break-all">Research</div>
              <div className="text-xs my-1">09:00 AM | 03/02/2023</div>
              <div className="text-sm">
                Through many difficult challenges, team Xelvis64 found themselves struggling at
                first but in the end...
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col min-h-[330px] w-full md:w-1/4 my-2 lg:w-1/5 overflow-hidden items-center bg-white drop-shadow-lg rounded-[24px] min-w-[260px] ${
              inView && "animate-t_join"
            }`}
          >
            <div className="h-1/3 w-full">
              <img src={"../../images/blog1.jfif"} height={"100%"} width={"100%"} alt="blog"></img>
            </div>
            <div className="p-4">
              <div className="text-xl font-bold text-primary break-all">Research</div>
              <div className="text-xs my-1">09:00 AM | 03/02/2023</div>
              <div className="text-sm">
                Through many difficult challenges, team Xelvis64 found themselves struggling at
                first but in the end...
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col min-h-[330px] w-full md:w-1/4 my-2 lg:w-1/5 overflow-hidden items-center bg-white drop-shadow-lg rounded-[24px] min-w-[260px] ${
              inView && "animate-t_join"
            }`}
          >
            <div className="h-1/3 w-full">
              <img src={"../../images/blog1.jfif"} height={"100%"} width={"100%"} alt="blog"></img>
            </div>
            <div className="p-4">
              <div className="text-xl font-bold text-primary break-all">Research</div>
              <div className="text-xs my-1">09:00 AM | 03/02/2023</div>
              <div className="text-sm">
                Through many difficult challenges, team Xelvis64 found themselves struggling at
                first but in the end...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div ref={ref}>
      <div className="mx-auto">
        <MissionsContent />
        <BlogsContent />
      </div>
    </div>
  );
};

export default Main;
