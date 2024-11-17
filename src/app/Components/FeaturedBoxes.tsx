import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../fonts/OmegaCTRegular.ttf",
  display: "swap",
});

const FeaturedBoxes = () => {
  return (
    <div
      className={`grid h-full w-full grid-cols-12 px-5 py-14 lg:px-40 ${myFont.className}`}
    >
      <div className="flex justify-center items-center col-span-12 lg:col-span-6  bg-white mb-11 h-[370px] md:pt-24 md:h-[400px] lg:h-[450px]">
        <Image
          src="/omega.avif"
          alt="omega watch"
          height={500}
          width={600}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center col-span-12 lg:col-span-6 md:pt-7 md:pl-14 md:h-[500px]">
        <h1
          className={`text-balance text-center text-2xl font-semibold leading-normal tracking-[.25em] text-rose-700 md:text-center md:text-balance md:text-4xl md:leading-tight lg:text-left ${myFont.className}`}
        >
          OMEGA’S
          <br />
          MULTIFUNTIONAL
          <br />
          SAILING <br className=" hidden lg:block"/>WATCH
           </h1>
        <p className="pt-4 pb-7 text-center text-gray-600 text-lg sm:text-base  md:text-balance md:text-center lg:text-left lg:text-balance md:text-lg lg:text-lg">
          Discover the 46.75 mm Seamaster Regatta.<br className="hidden lg:block"/>Launched to mark the 37th
          America’s Cup,
          <br className="hidden xl:block" /> OMEGA’s instrument watch is cased in
          <br className="hidden xl:block" /> grade 5 titanium and features both
          <br className="hidden xl:block" /> analogue and digital displays.
          Explore its
          <br className="hidden xl:block" /> many invaluable tools for life at
          sea.
        </p>
        <button className="items-center justify-center border-gray-300  mt-2 lg:ml-4 ml-16 md:ml-52 border w-64 h-11 font-semibold text-base text-gray-600 tracking-[0.05em]">
          DISCOVER THE WATCH
        </button>
      </div>
    </div>
  );
};

export default FeaturedBoxes;
