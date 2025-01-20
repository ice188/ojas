export default function About() {
  return (
    <div className="bg-white pt-16 pb-16 relative pt-[98px] ">
      <div className="w-full max-w-7xl px-8 md:px-16 mx-auto pt-8 md:pt-16">
        <div className="sm:items-start w-full justify-start items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
          <img
            className="lg:order-none order-2 lg:mx-0 mx-auto h-auto rounded-3xl object-cover"
            src="/home/team.jpeg"
            alt="spa"
          />
          <div className="w-full justify-center items-center gap-8 grid grid-cols-1 ">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                className="w-full text-white bg-[#91AC8F] px-4 text-3xl font-bold font-manrope leading-normal text-center pt-3 pb-3 -mb-8"
              >
                Meet Olivia: The Heart Behind Spa Ojas
              </h2>
              <p className="mt-8 sm:mt-16 text-[#66785F] text-base font-normal leading-relaxed lg:text-start max-w-7xl mx-auto">
                Olivia is someone who has always been deeply connected to nature
                and its healing power. Her journey began with a simple love for
                the natural world—savoring the delicate notes of tea, nurturing
                lush green plants, and exploring the ancient wisdom of
                traditional Chinese medicine through self-study.
                <br />
                <br />
                For Olivia, health is life’s most precious gift. She firmly
                believes that true wellness begins with balance—between mind,
                body, and the natural world. This belief became the cornerstone
                of her vision for Spa Ojas.
                <br />
                <br />
                When Olivia created Spa Ojas, she envisioned a sanctuary where
                everyone could experience profound relaxation and healing
                through natural, physical therapies. Drawing inspiration from
                the Ayurvedic concept of “Spa Ojas,” the vital energy that
                sustains life, she wanted every guest to feel rejuvenated,
                energized, and whole.
                <br />
                <br />
                At Spa Ojas, Olivia combines her passion for holistic wellness
                with thoughtful, personalized care. From therapeutic massage and
                acupuncture to medical facials and natural beauty treatments,
                each service reflects her dedication to helping others find
                harmony and vitality.
                <br />
                <br />
                Olivia welcomes you to Spa Ojas, a space where the essence of
                nature meets the art of healing. Here, you’ll discover not just
                a moment of relaxation but a pathway to renewed energy, balance,
                and inner peace.
                <br />
                <br />
                <span className="font-bold">
                  “Wellness is not just a luxury—it is the foundation of a
                  fulfilling life. I created Spa Ojas to share this belief with
                  everyone who walks through our doors.” – Olivia
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
