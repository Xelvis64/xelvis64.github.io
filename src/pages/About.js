import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {membersInfo} from "../data/memberInfo";

const About = () => {
  return (
    <Layout>
      <Banner />
      <div className="px-8 py-12 flex flex-col">
        <h2 className="text-primary font-bold text-2xl my-3">Our team</h2>
        <h2 className="font-bold text-3xl">
          Coming from all backgrounds, we formed an excellent team.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-[32px] flex-wrap">
          {membersInfo.map((member, index) => {
            return (
              <Popover
                key={index}
                animate={{
                  mount: {scale: 1, y: 0},
                  unmount: {scale: 0, y: 25},
                }}
              >
                <PopoverHandler>
                  <div className="flex flex-col items-center justify-center p-4 m-4 border-2 border-secondary rounded-[24px] min-w-[150px] max-w-[300px] h-[200px] w-full md:w-1/4">
                    <h2 className="font-medium text-primary">{member.name}</h2>
                    <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full">
                      <img
                        src={member.img}
                        width={"100%"}
                        height={"100%"}
                        alt={"profile-img"}
                        className="rounded-full"
                      />
                    </div>
                    <h2 className="font-medium text-primary my-3">{member.role}</h2>
                  </div>
                </PopoverHandler>
                <PopoverContent className="max-w-[24rem] ">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Avatar size="md" variant="circular" src={member.img} alt={member.name} />
                    <Button
                      variant="gradient"
                      color="blue"
                      size="sm"
                      className="font-medium capitalize"
                    >
                      Follow in LinkedIn
                    </Button>
                  </div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 flex items-center gap-2 font-medium"
                  >
                    <span>{member.name}</span> •{" "}
                    <a href="#123" className="text-sm text-blue-gray-700">
                      @HungLe
                    </a>
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    {member.description}
                  </Typography>
                </PopoverContent>
              </Popover>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
