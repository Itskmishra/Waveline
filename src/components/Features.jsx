import { Dot } from "lucide-react";
import TopLeftEffect from "./reusable-ui/top-left-effect";

export default function Features({ data }) {
  return (
    <div className="overflow-hidden py-24 sm:py-44" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* features div */}
          <div className="lg:pr-8 lg:pt-4 relative">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Better features
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {data.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-9 flex items-center"
                  >
                    <Dot className="w-12 h-12 text-red-500" />
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <TopLeftEffect />
          </div>
          {/* image div */}
          <img
            src="image2.png"
            alt="Product screenshot"
            className="sm:w-[40rem] sm:max-h-[40rem] w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
