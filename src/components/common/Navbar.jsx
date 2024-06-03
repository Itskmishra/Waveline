import React from "react";
import { Button } from "../reusable-ui/button";
import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    {
      id: 2,
      label: "Features",
      link: "#features",
    },
    {
      id: 3,
      label: "Gallery",
      link: "#gallery",
    },
    {
      id: 4,
      label: "Pricing",
      link: "#pricing",
    },
    {
      id: 5,
      label: "Contact",
      link: "#contact",
    },
    {
      id: 1,
      label: "Testimonials",
      link: "#testimonials",
    },
  ];

  return (
    <nav
      className="relative flex items-center justify-between md:py-3 md:px-8 py-2 px-3 z-50"
      aria-label="Global"
    >
      <div className="flex items-center justify-center gap-12">
        {/* Logo */}
        <div className="flex md:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 flex items-center justify-center gap-1"
          >
            <img className="h-8 w-8" src="icon.png" alt="logo" />
            <span className="text-xlf font-bold">Waveline</span>
          </Link>
        </div>
        <div className="hidden md:flex md:gap-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 md:justify-end">
        <Button
          className={"flex items-center justify-center gap-1"}
          size={"sm"}
          variant={"outline"}
        >
          Download <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
