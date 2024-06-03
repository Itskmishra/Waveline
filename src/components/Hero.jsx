import React from "react";
import TopLeftEffect from "./reusable-ui/top-left-effect";
import BottomRightEffect from "./reusable-ui/bottom-right-effect";
import { Button } from "./reusable-ui/button";
import { ArrowLeft, ArrowRight, Heading } from "lucide-react";
import Link from "next/link";

const HeroContent = ({ headline, subheadline, ctaBtn }) => {
  return (
    <div className="mx-auto max-w-2xl py-24 sm:py-28 lg:py-32">
      {/* Banner  */}
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next big update.{" "}
          <Link href="#" className="font-semibold text-indigo-600">
            <span className="" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      {/* Conntent */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">{subheadline}</p>
        {/* Action button's */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {ctaBtn?.map((btn) => (
            <Button size={"sm"} variant={btn.variant} key={btn.text}>
              {btn.text}
            </Button>
          ))}

          {/* <Button
            size={"sm"}
            variant={"outline"}
            className={"flex items-center justify-center gap-1"}
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

const HeroImage = ({ image }) => {
  return (
    <div className="relative w-96 h-96">
      <img src={image} alt="img" className="w-full h-full object-contain" />
    </div>
  );
};

const Hero = ({ data }) => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <TopLeftEffect />
      <div className="mx-auto w-full max-w-6xl flex flex-wrap items-center justify-center">
        <HeroContent
          headline={data.headline}
          subheadline={data.subheadline}
          ctaBtn={data.ctaButtons}
        />
        <HeroImage image={data.image} />
      </div>
      <BottomRightEffect />
    </div>
  );
};

export default Hero;
