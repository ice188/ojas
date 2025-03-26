export default function About() {
  return (
    <div className="relative px-0 md:px-16 mt-[98px] sm:pb-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1">
          {/* Image on the left, fully covering the left half */}
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="/home/team.jpeg"
              alt="spa"
            />
          </div>

          {/* Text on the right */}
          <div className="bg-gray-100 w-full flex flex-col justify-center items-start gap-10 px-8 md:px-16">
            <div className="text-[#2a5136] w-full flex flex-col justify-start items-start gap-4 py-16 ">
              <h2 className="font-salsa text-3xl font-bold font-manrope leading-normal lg:text-start text-center -mt-4 sm:-mt-0">
                Meet Olivia and Her Team: The Heart Behind SPA OJAS
              </h2>
              <p className="font-light font-noto text-[#4B5945] text-base leading-relaxed lg:text-start max-w-7xl mx-auto">
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
                of her vision for SPA OJAS.
                <br />
                <br />
                When Olivia created SPA OJAS, she envisioned a sanctuary where
                everyone could experience profound relaxation and healing
                through natural, physical therapies. Drawing inspiration from
                the Ayurvedic concept of “SPA OJAS,” the vital energy that
                sustains life, she wanted every guest to feel rejuvenated,
                energized, and whole.
                <br />
                <br />
                At SPA OJAS, Olivia combines her passion for holistic wellness
                with thoughtful, personalized care. From therapeutic massage and
                acupuncture to medical facials and natural beauty treatments,
                each service reflects her dedication to helping others find
                harmony and vitality.
                <br />
                <br />
                Olivia welcomes you to SPA OJAS, a space where the essence of
                nature meets the art of healing. Here, you’ll discover not just
                a moment of relaxation but a pathway to renewed energy, balance,
                and inner peace.
                <br />
                <br />
                <span className="font-salsa">
                  “Wellness is not just a luxury—it is the foundation of a
                  fulfilling life. I created SPA OJAS to share this belief with
                  everyone who walks through our doors.” – Olivia
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
