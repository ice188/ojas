import Image from 'next/image';

export default function Story() {
  return (
    <div className="relative px-0 md:px-16 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1">
          {/* Image on the left, fully covering the left half */}
          <div className="w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src="/home/plant.jpg"
              alt="A vibrant plant under sunshine taken in SPA OJAS"
              width={1274}
              height={1383}
              sizes="100vw"    
            />
          </div>

          {/* Text on the right */}
          <div className="bg-gray-100 w-full flex flex-col justify-center items-start gap-10 px-8 md:px-16">
            <div className="text-[#2a5136] w-full flex flex-col justify-start items-start gap-4 py-16 ">
              <h2 className="font-salsa text-3xl md:text-4xl font-bold font-manrope leading-normal lg:text-start text-center -mt-4 sm:-mt-0">
                Why Ojas?
              </h2>
              <p className="font-light font-noto  leading-relaxed text-start text-center max-w-7xl mx-auto mt-4">
                Our name is inspired by the ancient wisdom of Ayurveda, where
                “Ojas” represents the{" "}
                <span className="font-medium">
                  essence of life and vitality
                </span>
                . In Sanskrit, Ojas is often described as the subtle energy that
                sustains the body, mind, and spirit, providing resilience,
                radiance, and inner strength.
                <br />
                <br />
                At SPA OJAS, we embrace this philosophy to guide everything we
                do. From therapeutic massages and acupuncture to facials and
                beauty treatments, each service is thoughtfully designed to
                nurture your vitality and promote balance. We aim to help you
                rediscover your natural energy and leave feeling renewed in body
                and mind.
                <br />
                <br />
                <span className="font-salsa font-bold">
                  SPA OJAS is more than a place — it’s a sanctuary where your
                  journey to inner harmony begins.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
