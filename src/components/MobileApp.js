export default function MobileApp() {
  return (
    <div>
      <div className="container mx-auto bg-purple-700 flex flex-col sm:flex-row items-center sm:pl-12 justify-between bg-mobile-app md:rounded-lg">
        <div className="text-white p-5 sm:p-0 text-center sm:text-left">
          <h3 className="text-3xl	tracking-tighter font-bold mt-3">
            Getir'i indirin!
          </h3>
          <p className="font-semibold text-xs sm:text-base mt-3">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
          </p>
          <div className="grid grid-cols-3 gap-2 flex justify-start mt-4 sm:mt-8 mb-4">
            <a href="#" className="transition-all transform hover:scale-105">
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                className="md-h-8 lg:h-auto"
              />
            </a>
            <a href="#" className="transition-all transform hover:scale-105">
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                className="md-h-8 lg:h-auto"
              />
            </a>
            <a href="#" className="transition-all transform hover:scale-105">
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                className="md-h-8 lg:h-auto"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:block self-end mt-4">
          <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
        </div>
      </div>
    </div>
  );
}
