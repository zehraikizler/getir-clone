import Menu from "components/ui/Menu";
import menus from "api/menus.json";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-white py-4 sm:pt-10 sm:pb-6">
      <div className="container mx-auto grid gap-y-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4 mx-6 md:mx-0">
          <section>
            <nav className="grid grid-cols-1 gap-y-3">
              <h6 className="text-lg text-purple-700 mb-2">Getir'i indirin!</h6>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
          <div className="w-16">
            <a href="https://github.com/zehraikizler" target="_blank">
              <img
                src={require("../img/quick-response.png")}
                size={16}
                className="transition-all transform hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-0 md:mt-6 pt-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2021 Getir
            <a
              href="#"
              className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-2 items-center">
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
