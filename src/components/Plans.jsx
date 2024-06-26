import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./reusable-ui/button";
import DottedEffect from "./reusable-ui/dotted-effect";

const Plans = ({ data }) => {
  return (
    <div className="container py-10" id="pricing">
      {/* header */}
      <div className="flex flex-wrap items-center justify-center -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-5 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Pricing Table
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              Our Pricing Plan
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
        </div>
      </div>
      {/* pricing */}
      <div className="flex flex-wrap justify-center -mx-4">
        {data.map((plan) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-4 h-full hover:scale-105 transition-all duration-300 delay-100"
            key={plan.plan}
          >
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
              flex flex-col
              h-[550px] 
               "
            >
              <div className="">
                <span className="text-primary font-semibold text-lg block mb-4">
                  {plan.plan}
                </span>
                <h2 className="font-bold text-dark mb-5 text-[32px]">
                  {plan.price}
                </h2>
                <p
                  className="
                text-base text-body-color
                pb-8
                mb-8
                border-b border-[#F2F2F2]
                "
                >
                  Perfect for using in a personal website or a client project.
                </p>
              </div>
              <div className="">
                {plan.features.map((feature) => (
                  <p
                    className="text-base text-body-color leading-loose mb-1"
                    key={feature}
                  >
                    {feature}
                  </p>
                ))}
              </div>
              {/* button */}
              <div className="flex items-center justify-center mt-auto">
                <Button variant={"outline"} size={"lg"}>
                  Choose Personal
                </Button>
              </div>

              {/* botted svg */}
              <DottedEffect />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
