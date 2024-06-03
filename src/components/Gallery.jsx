import React from "react";

const Gallery = () => {
  return (
    <div>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-5">Gallery.</h1>
        <h3 class="text-xl mb-5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div class="text-center mb-10">
          <span class="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
          <span class="inline-block w-40 h-1 rounded-full bg-red-500"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
          <span class="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
        </div>
      </div>
      <div class="grid grid-cols-6 col-span-2 gap-2 py-10" id="gallery">
        <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
          <img
            class="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
        </div>
        <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
          <img
            class="h-full w-full object-cover  "
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
            alt=""
          />
        </div>
        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
          <img
            class="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
          <img
            class="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
          <div class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
            + 23
          </div>
          <img
            class="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
