import Image from 'next/image';

export default function Welcome() {
  return (
    <div className="bg-white font-averia relative min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-10 items-center justify-start">
          <div className="relative w-full min-h-screen">
            {/* Image */}
            <Image
              src="/home/spa4.jpg"
              alt="A display image in the spa home page with green leaf, essential oil and linen towel"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />

            {/* Text directly on the image */}
            <div className="mt-20  absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="font-averia text-5xl sm:text-7xl font-bold drop-shadow-xl">
                SPA OJAS
              </h1>
              <p className="font-light font-noto text-md sm:text-2xl mt-2 drop-shadow-md">
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
