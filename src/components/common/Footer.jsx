import React from "react";
import { Button } from "../reusable-ui/button";
import Link from "next/link";
import {
  Dribbble,
  Facebook,
  GithubIcon,
  Instagram,
  Twitter,
} from "lucide-react";
import TopLeftEffect from "../reusable-ui/top-left-effect";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      label: "Facebook",
      icon: Facebook,
      link: "#",
    },
    {
      id: 2,
      label: "Instagram",
      icon: Instagram,
      link: "#",
    },
    {
      id: 3,
      label: "Github",
      icon: GithubIcon,
      link: "#",
    },
    {
      id: 4,
      label: "Twitter",
      icon: Twitter,
      link: "#",
    },
    {
      id: 5,
      label: "Dribble",
      icon: Dribbble,
      link: "#",
    },
  ];

  const usefulLinks = {
    Company: [
      {
        id: 1,
        label: "About",
        link: "#",
      },
      {
        id: 2,
        label: "History",
        link: "#",
      },
      {
        id: 3,
        label: "Career",
        link: "#",
      },
      {
        id: 4,
        label: "Place",
        link: "#",
      },
    ],
    HelpfulLinks: [
      {
        id: 1,
        label: "Contact",
        link: "#",
      },
      {
        id: 2,
        label: "Testimonials",
        link: "#",
      },
      {
        id: 3,
        label: "Connect",
        link: "#",
      },
      {
        id: 4,
        label: "FAQ",
        link: "#",
      },
    ],
    Legal: [
      {
        id: 1,
        label: "Privacy Policy",
        link: "#",
      },

      {
        id: 2,
        label: "Terms & Conditions",
        link: "#",
      },
      {
        id: 3,
        label: "Returns Policy",
        link: "#",
      },
      {
        id: 4,
        label: " Accessibility ",
        link: "#",
      },
    ],
    Support: [
      {
        id: 1,
        label: "Pricing",
        link: "#",
      },

      {
        id: 2,
        label: "Documentation",
        link: "#",
      },
      {
        id: 3,
        label: "Guides",
        link: "#",
      },
      {
        id: 4,
        label: " API Status ",
        link: "#",
      },
    ],
  };
  return (
    <footer className="relative">
      <TopLeftEffect />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* Logo and description */}
            <div className="flex md:flex-1">
              <Link
                href="/"
                className="-m-1.5 p-1.5 flex items-center justify-center gap-1"
              >
                <img className="h-8 w-8" src="icon.png" alt="logo" />
                <span className="text-xlf font-bold">Waveline</span>
              </Link>
            </div>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>

            {/* SOcial */}
            <div className="flex mt-8 space-x-6 text-gray-600">
              {socialLinks.map((link) => (
                <Link href={link.link} key={link.id}>
                  <link.icon className=" text-zinc-700 hover:fill-red-500" />
                </Link>
              ))}
            </div>
            {/* news letter form */}
            <div className="max-w-xl lg:max-w-lg col-span-2 mt-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-xl">
                Subscribe to our newsletter.
              </h2>
              <p className="text-sm text-zinc-500 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, accusantium.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-zinc/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Usefull links */}
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Compnay</p>
              <div className="flex flex-col gap-2 mt-5">
                {usefulLinks.Company.map((link) => (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="text-sm text-zinc-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <div className="flex flex-col gap-2 mt-5">
                {usefulLinks.HelpfulLinks.map((link) => (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="text-sm text-zinc-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <div className="flex flex-col gap-2 mt-5">
                {usefulLinks.Legal.map((link) => (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="text-sm text-zinc-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium">Support</p>
              <div className="flex flex-col gap-2 mt-5">
                {usefulLinks.Support.map((link) => (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="text-sm text-zinc-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-400 my-12"></div>
        <p className="mt-8 text-xs text-gray-800">© 2024 Financio</p>
      </div>
    </footer>
  );
};

export default Footer;
