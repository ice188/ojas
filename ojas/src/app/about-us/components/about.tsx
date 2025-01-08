export default function About() {
  return (
    <div className="bg-white pt-16 pb-16 relative pt-[98px] ">
      <div className="w-full max-w-7xl px-8 md:px-16 mx-auto pt-8 md:pt-16">
        <div className="sm:items-start w-full justify-start items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
          <img
            className="lg:order-none order-2 lg:mx-0 mx-auto h-auto rounded-3xl object-cover"
            src="/home/welcome_img.jpg"
            alt="spa"
          />
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-[#66785F] text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                Meet Olivia: The Heart Behind Ojas Spa
              </h2>
              <p className="mt-8 sm:mt-0 text-[#91AC8F] text-base font-normal leading-relaxed lg:text-start max-w-7xl mx-auto">
                At Ojas Spa, our name is inspired by the ancient wisdom of
                Ayurveda, where “Ojas” represents the essence of life and
                vitality. In Sanskrit, Ojas is often described as the subtle
                energy that sustains the body, mind, and spirit, providing
                resilience, radiance, and inner strength.
                <br />
                <br />
                Ojas is the foundation of wellness—nourishing our immune system,
                balancing our emotions, and bringing a glow to our skin and
                life. When your Ojas is strong, you feel vibrant, peaceful, and
                deeply connected to yourself and the world around you.
                <br />
                <br />
                At Ojas Spa, we embrace this philosophy to guide everything we
                do. From therapeutic massages and acupuncture to facials and
                beauty treatments, each service is thoughtfully designed to
                nurture your vitality and promote balance. We aim to help you
                rediscover your natural energy and leave feeling renewed in body
                and mind.
                <br />
                <br />
                <span className="font-bold">
                  Ojas Spa is more than a place—it’s a sanctuary where your
                  journey to inner harmony begins.
                </span>
              </p>
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Get Started
                  </span>
                </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
