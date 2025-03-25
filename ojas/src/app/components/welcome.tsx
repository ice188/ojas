export default function Welcome() {
  return (
    <div className="font-lora relative mt-[98px]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full justify-start items-center gap-10 grid grid-cols-1">
          <div className="relative w-full h-auto">
            <img
              className="max-h-screen lg:mx-0 mx-auto h-auto object-cover w-full"
              src="/home/spa.jpg"
              alt="spa"
            />
            {/* <div className="text-[#2a5136] absolute inset-0 flex flex-col justify-center items-center">
              <div className="bg-white bg-opacity-90 px-12 py-4 shadow-lg max-w-2xl rounded-full">
                <h1 className="text-2xl sm:text-5xl font-bold drop-shadow-xl text-center">
                  SPA OJAS
                </h1>
                <p className="font-light font-noto text-xs sm:text-2xl mt-2 drop-shadow-md text-center">
               Relax | Refresh | Rejuvenate
                </p>
              </div>
            </div> */}
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
