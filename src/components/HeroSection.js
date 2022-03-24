import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";

export default function HeroSection() {
  const windowWidth = useWindowWidth();

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "*15"
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] overflow-x-hidden object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] overflow-x-hidden"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="relative flex-1 group">
                <input
                  required
                  className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"
                />
                <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
