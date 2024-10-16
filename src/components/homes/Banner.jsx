import React from "react";
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import tim from "../../assets/image/tim.png";
import timm from "../../assets/image/tim.jpg";
import head from "../../assets/image/headline.jpg";
import TypingEffect from "./TypingEffect";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Import styles for dots

function Banner() {
  // Pengaturan slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Jika kamu tidak ingin menampilkan tombol panah
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden bg-black">
      <Slider {...settings} className="rounded-xl w-full">
        {/* Slide 1 */}
        <div className="relative h-screen w-full">
          <img
            src={tim}
            alt="Nature Image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50 z-10">
            <div className="w-3/4 text-center md:w-2/4">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold font-Playwrite text-orange-500 drop-shadow-3xl">
                <TypingEffect text="Welcome to Website PPKO Ormawa HIMFA UMY" speed={100} pauseTime={1000} />
              </h1>
              <p className="mb-12 opacity-80 text-white">
                {/* You can add more content here */}
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-screen w-full">
          <img
            src={head}
            alt="Nature Image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50 z-10">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold font-Playwrite text-orange-600 drop-shadow-3xl "
              >
                Our Theme:
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 font-bold font-Montserrat text-3xl"
              >
                TEROPONG JIWA
              </Typography>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-screen w-full">
          <img
            src={timm}
            alt="Nature Image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50 z-10">
            <div className="w-3/4 text-center md:w-2/4  ">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-4xl sm:text-sm font-bold"
              >
                Empowering Communities through Mental Health and Environment
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                
              </Typography>
            </div>
          </div>
        </div>
      </Slider>

      {/* Tambahkan margin di bawah slider untuk memberikan ruang bagi dots */}
      <style jsx>{`
        .slick-dots {
          bottom: 20px; /* Atur posisi dots */
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: white; /* Warna dots */
        }

        .slick-dots li.slick-active button:before {
          color: orange; /* Warna dots saat aktif */
        }
      `}</style>
    </div>
  );
}

export default Banner;
