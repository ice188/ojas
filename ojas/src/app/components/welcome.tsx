export default function Welcome() {
    return (
      <div className="bg-white py-16 relative mt-[121px]">
        <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
          <div className="w-full justify-start items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Welcome To Ojas Message and Spa!
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center max-w-7xl mx-auto">
                  At Ojas Message and Spa, we are committed to providing a space of relaxation and rejuvenation, where you can unwind and revitalize your mind and body. Our mission is to ensure that every visitor leaves feeling refreshed, balanced, and renewed.
                </p>
              </div>
              {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Get Started
                </span>
              </button> */}
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="/home/welcome_img.jpg"
              alt="spa"
            />
          </div>
        </div>
      </div>
    );
  }
  