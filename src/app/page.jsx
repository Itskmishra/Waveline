import React from "react";

import fs from "fs";
import path from "path";

// importing components
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";


export const getData = async () => {
  // Read the data from data.json
  const dataFilePath = path.join(process.cwd(), "/src/lib/data.json");
  const jsonData = fs.readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(jsonData);
  // Return the data as props
  return data;
};

const Home = async () => {
  const data = await getData();
  return (
    <div className="w-full h-full px-6 py-2 md:px-12 md:py-4">
      <Navbar />
      <Hero data={data.hero} />
      <Features data={data.features} />
      <Gallery />
      <Testimonials data={data.testimonials} />
      <Plans data={data.pricing} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
