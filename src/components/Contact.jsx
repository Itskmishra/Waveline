import { LocateIcon, Mail, PhoneCall } from "lucide-react";
import React from "react";
import TopLeftEffect from "./reusable-ui/top-left-effect";

const Contact = () => {
  return (
    <div
      className="container flex flex-col mx-auto py-32 scroll-smooth relative"
      id="contact"
    >
      <TopLeftEffect />
      {/* Header */}
      <div className="w-full draggable">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-5">Connect with us.</h1>
          <h3 className="text-xl mb-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
          </div>
        </div>
        {/* Contatc details */}
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <span>
                <Mail className="w-9 h-9 text-red-500" />
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900">Email</p>
              <p className="text-base leading-7 text-dark-grey-600">
                Contact us at
              </p>
              <a
                className="text-lg font-bold text-purple-blue-500"
                href="mailto: hello@loopple.com"
              >
                hello@loopple.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <span>
                <PhoneCall className="w-9 h-9 text-red-500" />
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900">Phone</p>
              <p className="text-base leading-7 text-dark-grey-600">
                Reach out to us by phone
              </p>
              <a
                className="text-lg font-bold text-purple-blue-500"
                href="tel:+516-486-5135"
              >
                +516-486-5135
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
              <span>
                <LocateIcon className="w-9 h-9 text-red-500" />
              </span>
              <p className="text-2xl font-extrabold text-dark-grey-900">Location</p>
              <p className="text-base leading-7 text-dark-grey-600">
                Find us at our office
              </p>
              <a
                className="text-lg font-bold text-purple-blue-500"
                target="_blank"
                href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
              >
                10924 Urna Convallis
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
