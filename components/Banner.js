import Image from "next/image";
import BannerImage from "../public/airbnbBanner.jpg";
function Banner() {
  return (
    <div className="relative h-[40vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[80vh]">
      <Image
        className="  h-[40vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[80vh] "
        src={BannerImage}
        width={1000}
        style={{
          layout: "fill",

          width: "100vw",
          objectFit: "cover",
          overflow: "hidden",
        }}
        alt="Banner Image"
      />
      <div className="absolute top-1/2 w-full text-center ">
        <p className="text-lg sm:text-2xl text-white font-bold  ">
          Not sure where to go? Perfect .
        </p>
        <button className=" text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3  hover:shadow-xl active:scale-90 transition duration-200">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
