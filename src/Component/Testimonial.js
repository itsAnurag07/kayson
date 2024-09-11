import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "Assets/img/testimonials/client-testimonial.jpg",
  },
  {
    id: 2,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "Assets/img/testimonials/istockphoto-1320811419-612x612.jpg",
  },
  {
    id: 3,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "Assets/img/testimonials/testimonial-student.jpg",
  },
  {
    id: 4,
    name: "Sidak vats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro provident explicabo tempore, at placeat minus numquam! Animi, sequi accusamus.",
    img: "Assets/img/testimonials/istockphoto-1323400501-612x612.jpg",
  },
  
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Heding section  */}
        <div className="text-center  mx-auto">
          <p data-aos="fade-up" className="testimonial_text">
            What Our Customers Says
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eaque iusto recusandae corporis harum natus itaque obcaecati
            voluptatem dignissimos modi!
          </p>
        </div>
        {/* Testimonial cards section  */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div data-aos="zoom-in" data-aos-delay="100" className="my-6">
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative"
              >
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;


