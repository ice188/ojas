export default function Welcome() {
  return (
    <div className="font-salsa relative mt-[98px]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full justify-start items-center gap-10 grid grid-cols-1">
          <div className="relative w-full h-auto">
            {/* Image */}
            <img
              className="max-h-screen lg:mx-0 mx-auto h-auto object-cover w-full"
              src="/home/spa3.jpg"
              alt="spa"
            />

            {/* Text directly on the image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="font-salsa text-2xl sm:text-7xl font-bold drop-shadow-xl text-center">
                SPA OJAS
              </h1>
              <p className="font-light font-noto text-xs sm:text-2xl mt-2 drop-shadow-md text-center">
                Radiance | Balance | Vitality
              </p>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
