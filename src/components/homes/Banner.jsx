import React from "react";
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import tim from "../../assets/image/tim.png";
import timm from "../../assets/image/tim.jpg";
import head from "../../assets/image/headline.jpg";
import TypingEffect from "./TypingEffect";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden bg-black">
      <Slider {...settings} className="rounded-xl w-full">
        {/* Slide 1 */}
        <div className="relative h-screen w-full">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            src={tim}
            alt="Nature Image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-gradient-to-r from-black/70 to-transparent z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-3/4 text-left md:w-2/4 ml-8"
            >
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-orange-500 drop-shadow-3xl">
                <TypingEffect text="Welcome to Website PPKO Ormawa HIMFA UMY" speed={100} pauseTime={1000} />
              </h1>
              <p className="mb-12 opacity-80 text-white text-lg">
                Empowering students through innovative programs and initiatives.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-screen w-full">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10 }}
            src={head}
            alt="Nature Image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-gradient-to-l from-black/70 to-transparent z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-3/4 text-right md:w-2/4 mr-8"
            >
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold font-Playwrite text-orange-600 drop-shadow-3xl"
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
            </motion.div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-screen w-full">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            src={timm}
            alt="Nature Image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-gradient-to-t from-black/70 to-transparent z-10">
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-3/4 text-center md:w-2/4"
            >
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
                className="mb-12 opacity-80 text-lg"
              >
                Join us in our mission to create a better future for all.
              </Typography>
            </motion.div>
          </div>
        </div>
      </Slider>

      <style jsx>{`
        .slick-dots {
          bottom: 20px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: white;
        }

        .slick-dots li.slick-active button:before {
          color: orange;
        }
      `}</style>
    </div>
  );
}

export default Banner;
