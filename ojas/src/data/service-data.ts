interface Service {
  name: string;
  description?: string;
  img_url: string;
  pressure?: string;
  price_range: string;
  benefits?: string[];
}

interface Category {
  name: string;
  description?: string;
  services: Service[];
  img_url: string;
}

export interface ServiceData {
  massage: Category;
  facial: Category;
  laser: Category;
  nail: Category;
  brow: Category;
  lashes: Category;
  waxing: Category;
  others: Category;
}

export const serviceData: ServiceData = {
  massage: {
    name: "Massage",
    description:
      "Feel deeply relaxed and rejuvenated as stress and tension melt from the body. Your mind will be calmer and sense awakened, restoring feelings of wellbeing.",
    img_url: "/home/massage.png",
    services: [
      {
        name: "Deep Tissue Massage",
        description:
          "Indulge in the ultimate relaxation experience with our deep tissue massage. Our skilled therapists specialize in providing therapeutic relief by targeting the deeper layers of muscle and connective tissue. During your session, you'll feel tension and knots dissolve as our expert practitioners use firm pressure and slow strokes to alleviate chronic aches and pains. Whether you're suffering from muscle tension, sports injuries, or simply seeking profound relaxation, our deep tissue massage will leave you feeling revitalized and renewed. Experience the profound benefits of deep tissue massage and reclaim your sense of well-being today. Book your session now and discover the transformative power of therapeutic touch.",
        img_url: "/placeholder.png",
        pressure: "Firm",
        price_range: "60 - 190",
      },
      {
        name: "Relaxation Massage",
        description:
          "Escape the hustle and bustle of daily life and surrender to pure bliss with our relaxation massage at our spa. Our skilled therapists specialize in creating a serene sanctuary where you can unwind, de-stress, and rejuvenate your body and mind. During your session, you'll experience the soothing touch of expert practitioners as they gently knead away tension and promote deep relaxation. Using a combination of long, flowing strokes and gentle pressure, our relaxation massage melts away stress, eases muscle tension, and restores harmony to your entire being. Experience the ultimate in relaxation and book your massage today. Let us help you reconnect with your inner calm and embark on a journey to total relaxation and well-being.",
        img_url: "/placeholder.png",
        pressure: "Light - Medium",
        price_range: "60 - 190",
      },
      {
        name: "Acupressure Massage (RMT)",
        description:
          "Experience the rejuvenating power of acupressure massage. Our skilled therapists apply pressure to specific points on your body, stimulating energy flow and promoting holistic healing. During your session, you'll feel tension melt away as our expert practitioners target key acupressure points, releasing blocked energy and restoring balance to your body and mind. Whether you're seeking relief from stress, pain, or simply want to enhance your overall well-being, our acupressure massage will leave you feeling relaxed, revitalized, and ready to take on the world. Discover the benefits of this ancient healing art and book your acupressure massage today.",
        img_url: "/placeholder.png",
        pressure: "Medium - Firm",
        price_range: "95 - 190",
      },
      {
        name: "Deep Detox Massage (RMT)",
        description:
          "Rebalance your body and rejuvenate your spirit with our deep detox massage. Our skilled therapists specialize in the art of detoxification, using a combination of techniques to cleanse and purify your body from within.Includes full body therapeutic massage, Cupping, Gua Sha and Infrared Treatment (heat lamp). The heat from the Infrared lamp will enhance blood circulation, detox and slow down the inflammation, warm up your tissues in preparation for a deep tissue massage accompanied by cupping, and Gua Sha. The therapist will incorporate all of the modalities in a deeply relaxing and therapeutic treatment 90 minute session. Anyone who is suffering from severe Stress, Tension, Muscle Aches and Pain, Hyperactivity, Sleep Disorders, Chronic stiffness or pain, will greatly benefit from this treatment. Experience the transformative power of detoxification and book your deep detox massage today.",
        img_url: "/placeholder.png",
        pressure: "Light - Firm",
        price_range: "165",
      },
      {
        name: "Cupping Massage (RMT)",
        description:
          "Are you seeking a holistic approach to relaxation and wellness? Discover the rejuvenating benefits of cupping massage at our spa. Cupping massage combines the ancient art of cupping therapy with the therapeutic techniques of massage. During a cupping massage session, cups are placed on specific areas of the body to create suction, which helps to increase blood flow, release muscle tension, and promote lymphatic drainage. Whether you're looking to alleviate muscle pain, improve circulation, or simply unwind and de-stress, our skilled therapists will customize the treatment to address your individual needs and preferences. Experience the healing power of cupping massage and embark on a journey to greater relaxation, vitality, and balance. Book your appointment today and indulge in a transformative spa experience like no other.",
        img_url: "/placeholder.png",
        pressure: "Medium - Firm",
        price_range: "115 - 210",
      },
      {
        name: "Face and Body Rejuvenation Massage (RMT)",
        description:
          "Indulge in ultimate relaxation with our combined full body massage and special  face massage. Let our skilled therapists melt away tension with a soothing massage tailored to your needs, followed by a rejuvenating massage to refresh and nourish your body and skin. Experience the perfect blend of relaxation and MyoGlow in one luxurious session. Book now to elevate your self-care routine to new heights.",
        img_url: "/placeholder.png",
        pressure: "Light - Medium",
        price_range: "155",
      },
      {
        name: "Face Rejuvenation Massage",
        description:
          "Our signature face rejuvenation massage begins with a thorough cleansing to remove impurities and prepare your skin for maximum absorption of nourishing oils and serums. Using a combination of soothing strokes, gentle kneading, and targeted acupressure, our therapists work to stimulate circulation, promote lymphatic drainage, and reduce tension in the facial muscles. As you drift into a state of deep relaxation, feel the stress and fatigue melt away, leaving behind a renewed sense of vitality and youthfulness. Whether you're looking to combat the signs of aging, improve skin tone and texture, or simply indulge in some self-care, our face rejuvenation massage is the perfect solution for achieving a radiant and refreshed complexion.",
        img_url: "/placeholder.png",
        pressure: "Light - Medium",
        price_range: "80",
        benefits: [
          "Brighten skin",
          "Minimize the appearance of scars",
          "fine lines",
          "and wrinkles",
          "Tone chin",
          "jawline",
          "neck and décolletage",
          "Balances mood",
        ],
      },
      {
        name: "Prenatal Massage (RMT)",
        description:
          "Experience the nurturing care you deserve with our prenatal massage. Specifically designed for expecting mothers, this gentle yet effective massage focuses on relieving the unique discomforts associated with pregnancy. Our certified therapists provide expert support, using techniques that promote relaxation and alleviate tension in areas such as the lower back, hips, and legs. Feel a sense of relief as you enjoy this safe and soothing experience, tailored to address your changing needs throughout each trimester. Enhance your well-being and bond with your baby in a tranquil environment dedicated to your comfort and relaxation.",
        img_url: "/placeholder.png",
        price_range: "100",
      },
      {
        name: "Infrared Light Massage (RMT)",
        description:
          "Indulge in the soothing warmth of our infrared light massage therapy. Our advanced technology combines gentle infrared light with targeted massage to relieve tension, promote relaxation, and rejuvenate your body from within. Experience the perfect blend of comfort and healing as our specialized treatments help ease muscle aches and joint pain, reduce inflammation, improve circulation, and melt away stress. Discover the ultimate relaxation experience with our infrared light massage therapy today.",
        img_url: "/placeholder.png",
        pressure: "Medium - Firm",
        price_range: "115",
      },
      {
        name: "GuaSha Massage (RMT)",
        description:
          "Experience the ancient art of Gua Sha massage, a revitalizing therapy that promotes holistic wellness and radiant skin. Our skilled therapists use smooth, specialized tools to gently scrape the skin, stimulating circulation and promoting lymphatic drainage. This centuries-old technique helps release tension, reduce inflammation, and enhance the natural detoxification process of the body. Feel rejuvenated and refreshed as you enjoy the deep relaxation and revitalization of Gua Sha massage. Treat yourself to this traditional healing practice and unlock a new level of balance and vitality.",
        img_url: "/placeholder.png",
        pressure: "Medium - Firm",
        price_range: "115",
      },
      {
        name: "Couples Massage-each",
        description:
          "Experience the ultimate in relaxation together with our Couples Massage. To ensure a harmonious and rejuvenating experience for both individuals, we provide two skilled massage therapists who will work simultaneously. Whether you’re celebrating a special occasion or simply enjoying some quality time together, our couples massage is designed to provide a deeply relaxing experience tailored to your individual needs. Please note that when booking a couples massage, two therapists will be scheduled to ensure a seamless and synchronized session. Book your appointment today and unwind in perfect harmony.",
        img_url: "/placeholder.png",
        price_range: "95 - 143",
      },
    ],
  },
  facial: {
    name: "Facial",
    description:
      "We only use top brands for our clients. All of our Facials are customized and suited to your skin’s needs at each appointment.",
    img_url: "/placeholder.png",
    services: [
      {
        name: "RF Microneedling",
        description:
          "Discover the transformative power of microneedling – a cutting-edge skincare treatment designed to rejuvenate your skin from within. Our microneedling procedure involves using fine needles to create controlled micro-injuries to the skin, stimulating collagen and elastin production. This results in smoother, firmer, and more radiant skin, reducing the appearance of wrinkles, acne scars, and hyperpigmentation. Experience the ultimate skincare solution with our expertly performed microneedling treatment, tailored to your unique skin needs.",
        img_url: "/placeholder.png",
        price_range: "480 - 580",
        benefits: [
          "fine lines and wrinkles",
          "reduced skin elasticity",
          "dark spots (hyperpigmentation)",
          "stretch marks",
          "sun damage",
          "large pores",
          "acne scars",
          "scars from injury or surgery",
        ],
      },

      {
        name: "Micro-Sponge Seaweed Skin Renewal Facial",
        description:
          "Experience the next level of skincare renewal with our Micro-Sponge Seaweed Skin Renewal Facial. This is a cell renewal accelerating treatment that the Marine Sponges are refined to micro needle between 100 – 200 microns in length and 10 in diameter forming a natural delivery system. They are enriched with a variety of precious natural seaweeds, minerals and herbal extracts, which penetrated our thick epithelium to reach into dermis to accelerate blood circulation and boost Epidermal Cell proliferation. This treatment will help remove dead keratinocytes and eventually renew skin to look more healthy, re-densified, lifted, glowing and youthful with even complexion.",
        img_url: "/placeholder.png",
        price_range: "210",
        benefits: [
          "Minimizing pores",
          "Smoothening wrinkles",
          "Combating acnes and scars",
          "Enhancing lifting and firming",
          "Improving skin complexion",
        ],
      },
      {
        name: "Anti Aging Peel",
        description:
          "Experience the ultimate in skin rejuvenation with our Signature Anti-Aging Peel, a transformative treatment designed to turn back the hands of time and reveal a more youthful complexion. Our skilled estheticians begin by thoroughly cleansing your skin to remove impurities and prepare it for the peel. Indulge in the power of our signature anti-aging peel, expertly formulated with potent ingredients to stimulate collagen production, reduce the appearance of fine lines and wrinkles, and improve overall skin texture and tone. This customizable peel targets specific signs of aging, such as dullness, uneven skin tone, and loss of elasticity, delivering visible results with minimal downtime.  After the peel, luxuriate in the soothing benefits of a hydrating mask and nourishing serums to replenish and rejuvenate your skin. Rediscover a youthful glow with our Signature Facial Peel, and embrace the confidence that comes with healthier, more luminous skin.",
        img_url: "/placeholder.png",
        price_range: "160",
      },
      {
        name: "Acne Peel",
        description:
          "Introducing our Signature Acne Peel, a targeted solution to combat breakouts, reduce acne scars, and promote clearer, healthier skin. Our skilled estheticians begin by thoroughly cleansing your skin to remove impurities and excess oil, preparing it for the peel. Experience the power of our signature acne peel, formulated with potent ingredients to exfoliate the skin, unclog pores, and reduce acne-causing bacteria. This specialized peel helps to diminish the appearance of acne scars, hyperpigmentation, and uneven texture, revealing a smoother, more even complexion. During your treatment, our estheticians carefully apply the peel, ensuring precise coverage and maximum effectiveness. After the peel, enjoy the soothing benefits of a calming mask and hydrating serums to replenish and nourish your skin. Transform your skin with our Signature Acne Peel and regain confidence with a clearer, healthier complexion.",
        img_url: "/placeholder.png",
        price_range: "160",
      },
      {
        name: "Glow Peel",
        description:
          "Experience the transformative power of our signature glow peel, formulated with potent brightening agents to gently exfoliate the skin, reduce the appearance of dark spots, and promote a more radiant complexion. This customized peel targets specific areas of concern, such as sun damage, age spots, and discolouration, delivering visible results with minimal downtime. Our skilled estheticians begin by thoroughly cleansing your skin to remove impurities and prepare it for the peel.  Then our estheticians carefully apply the glow peel, ensuring even coverage and maximum efficacy. After the peel, indulge in the soothing benefits of a calming mask and hydrating serums to replenish and nourish your skin, leaving it feeling refreshed and revitalized. Unveil a luminous, radiant complexion with our Signature Glow Peel and embrace the confidence that comes with brighter, more even-toned skin.",
        img_url: "/placeholder.png",
        price_range: "160",
      },
      {
        name: "Signature Peel",
        description:
          "Elevate your skincare routine with our Signature Facial Peel, a transformative treatment designed to reveal smoother, brighter, and more youthful-looking skin. Our skilled estheticians begin by thoroughly cleansing your skin to remove impurities and prepare it for the peel. Experience the power of our signature peel, formulated with potent yet gentle exfoliating agents to resurface the skin, diminish the appearance of fine lines, wrinkles, and uneven texture. This customizable peel targets specific skin concerns, such as hyperpigmentation, acne scars, and dullness, delivering visible results with minimal downtime. Relax and unwind as our estheticians apply the peel with precision, ensuring maximum efficacy and comfort. After the peel, enjoy the soothing benefits of a hydrating mask and calming serums to replenish and nourish your skin. Reveal a radiant, revitalized complexion with our Signature Facial Peel, and embrace the confidence that comes with healthier, more luminous skin.",
        img_url: "/placeholder.png",
        price_range: "175",
      },
      {
        name: "Hydrating Facial",
        description:
          "Indulge your skin with our Hydrating Signature Facial, a luxurious treatment designed to replenish moisture and revitalize your complexion. This facial begins with a gentle cleanse, followed by a hydrating mask tailored to your skin's needs. Relax as our skilled estheticians massage in rich, nourishing serums, leaving your skin radiant and hydrated. Perfect for all skin types, this treatment will leave you feeling refreshed and hydrated.",
        img_url: "/placeholder.png",
        price_range: "120",
      },
      {
        name: "Anti Aging",
        description:
          "Experience the ultimate in rejuvenation with our Anti-Aging Signature Facial. This luxurious treatment is specially crafted to combat the signs of aging and restore youthful vitality to your skin. Our skilled estheticians begin by cleansing and exfoliating to remove impurities and stimulate cell turnover. Relax as our expert therapists massage in potent serums and moisturizers, delivering intensive hydration and firming benefits. Next, indulge in a customized mask infused with powerful anti-aging ingredients to target fine lines, wrinkles, and uneven texture. Pamper yourself with this indulgent facial, and reveal a smoother, more radiant complexion that defies the hands of time.",
        img_url: "/placeholder.png",
        price_range: "130",
      },
      {
        name: "Acne treatment",
        description:
          "Say goodbye to blemishes with our Acne Treatment Signature Facial, a targeted solution to combat breakouts and promote clear, healthy skin. Our skilled estheticians begin with a thorough cleanse to remove impurities and unclog pores, preparing your skin for treatment. Experience the innovative Bubble Masque, which utilizes gentle bubbling action to penetrate deep into pores, effectively dissolving impurities and unclogging congested skin. Our extractions help to remove impurities and prevent future breakouts. Relax as we apply soothing serums and moisturizers to hydrate and calm your skin, leaving you with a renewed sense of confidence. Finally, indulge in a relaxing massage using soothing serums and moisturizers, leaving your skin feeling refreshed, revitalized, and free from acne-related concerns.",
        img_url: "/placeholder.png",
        price_range: "130",
      },
      {
        name: "Glow Facial",
        description:
          "Illuminate your complexion with our Glow Signature Facial, a luxurious treatment designed to enhance your skin's natural radiance. This transformative facial starts with a thorough cleanse to remove impurities and prepare your skin for rejuvenation. Next, indulge in a gentle exfoliation to reveal a brighter, smoother texture. Our skilled estheticians will then massage in hydrating serums and moisturizers, leaving your skin with a luminous, dewy finish. Experience the luxurious glow with our signature mask, infused with potent ingredients to nourish and revitalize your skin from within. Treat yourself to this rejuvenating facial and unveil a radiant glow that lasts.",
        img_url: "/placeholder.png",
        price_range: "130",
      },
      {
        name: "Total Care Facial",
        description:
          "Elevate your skincare routine with our Total Care Signature Facial, a comprehensive solution tailored to address all your skin concerns in one luxurious experience. Our skilled estheticians begin by assessing your skin's unique needs, customizing each step of the treatment to deliver maximum results. Starting with a thorough cleanse, we remove impurities and prepare your skin for deep nourishment. Next, indulge in a gentle exfoliation to reveal a smoother, more radiant complexion. Our signature mask, infused with potent ingredients, targets specific concerns such as hydration, firmness, and brightening, providing instant rejuvenation.  Relax and unwind as we perform gentle extractions to clear pores and remove impurities, promoting clearer, healthier skin. Enjoy a luxurious massage using rich serums and moisturizers, deeply hydrating and revitalizing your skin from within. Whether you're looking to combat aging, acne, or simply rejuvenate your complexion, our Total Care Treat.",
        img_url: "/placeholder.png",
        price_range: "145",
      },
      {
        name: "Back Facial",
        description:
          "Treat your back to the ultimate pampering experience with our Signature Back Facial. Designed to address the unique needs of this hard-to-reach area, our skilled estheticians begin by deeply cleansing the skin to remove impurities, excess oil, and dead skin cells. Next, indulge in a luxurious exfoliation to reveal smoother, softer skin. Enjoy a relaxing massage as we apply hydrating serums and moisturizers, leaving your skin feeling nourished and rejuvenated. Our signature mask, tailored specifically for the back, works to purify pores, detoxify the skin, and promote a clearer complexion. Whether you're seeking to address back acne, congestion, or simply want to indulge in a spa-like experience, our Signature Back Facial is the perfect solution for achieving radiant, healthy skin from head to toe.",
        img_url: "/placeholder.png",
        price_range: "145",
      },
    ],
  },
  laser: {
    name: "Laser",
    img_url: "/placeholder.png",
    services: [
      {
        name: "DPL Photo Facial",
        description:
          "Our DPL Photo facial, a cutting-edge skincare treatment designed to revitalize your skin. Using advanced Dynamic Pulsed Lighty to restore collagen and elastin in the deep skin. By stimulating collagen production and promoting cellular renewal, it delivers long-lasting results, revealing smoother, firmer, and more youthful-looking skin. Say goodbye to imperfections and hello to a luminous, even-toned complexion with our DPL Photo Facial.",
        img_url: "/placeholder.png",
        price_range: "280 - 320",
        benefits: [
          "Sun damage",
          "Rosacea",
          "Acne and scars",
          "Spider veins",
          "Pigmentation",
          "Anti aging",
          "Reduce pore size",
          "Hydrating",
          "Fine lines",
        ],
      },
      {
        name: "Carbon Laser Peel",
        description:
          "Indulge in the ultimate skincare treatment with our Carbon Laser Peel. This innovative procedure deeply cleanses, exfoliates, and revitalizes your skin, leaving it radiant and rejuvenated. By utilizing the power of carbon particles and laser technology, this treatment effectively targets imperfections, reduces pore size, and promotes collagen production for a smoother, more youthful complexion. Say goodbye to dull, tired skin and hello to a luminous glow with our Carbon Laser Peel.",
        img_url: "/placeholder.png",
        price_range: "220 - 260",
        benefits: [
          "Acne",
          "Acne pigmentation",
          "Acne scarring",
          "Enlarged and clogged pores",
          "Melasma",
          "Photoaging",
          "Fine lines and wrinkles",
        ],
      },
      {
        name: "Laser Freckles Removal/Fading",
        img_url: "/placeholder.png",
        price_range: "30 - 220",
      },
      {
        name: "Laser Hair Removal",
        img_url: "/placeholder.png",
        price_range: "95 - 260",
      },
    ],
  },

  nail: {
    name: "Nail",
    description:
      "The highest quality, the latest colors, the most beautiful styles, for the most beautiful you.",
    img_url: "/placeholder.png",
    services: [
      {
        name: "Manicure",
        img_url: "/placeholder.png",
        price_range: "25 - 70",
      },
      {
        name: "Pedicure",
        img_url: "/placeholder.png",
        price_range: "15 - 90",
      },
      {
        name: "Add-ons (Nail Art, Polish etc.)",
        img_url: "/placeholder.png",
        price_range: "5 - 25",
      },
    ],
  },
  brow: {
    name: "Brow",
    img_url: "/placeholder.png",
    services: [
      {
        name: "Brow Lamination",
        img_url: "/placeholder.png",
        price_range: "80",
      },
      {
        name: "Brow Tint",
        img_url: "/placeholder.png",
        price_range: "25",
      },
      {
        name: "Brow Lamination & Tint",
        img_url: "/placeholder.png",
        price_range: "100",
      },
      {
        name: "Brow Waxing & Shape",
        img_url: "/placeholder.png",
        price_range: "20",
      },
      {
        name: "Brow Tint, Waxing & Shape",
        img_url: "/placeholder.png",
        price_range: "38",
      },
    ],
  },
  lashes: {
    name: "Lashes",
    img_url: "/placeholder.png",
    services: [
      {
        name: "Lash Lift",
        img_url: "/placeholder.png",
        price_range: "65",
      },
      {
        name: "Lash Tint",
        img_url: "/placeholder.png",
        price_range: "25",
      },
      {
        name: "Lash Lift & Tint",
        img_url: "/placeholder.png",
        price_range: "75",
      },
    ],
  },
  waxing: {
    name: "Waxing",
    img_url: "/placeholder.png",
    services: [
      {
        name: "Face Waxing",
        img_url: "/placeholder.png",
        price_range: "10 - 20",
      },
      {
        name: "Arms",
        img_url: "/placeholder.png",
        price_range: "18 - 35",
      },
      {
        name: "Legs",
        img_url: "/placeholder.png",
        price_range: "35 - 52",
      },
      {
        name: "Bikini",
        img_url: "/placeholder.png",
        price_range: "30",
      },
      {
        name: "Brazilian",
        img_url: "/placeholder.png",
        price_range: "70",
      },
    ],
  },

  others: {
    name: "Others",
    img_url: "/placeholder.png",
    description: "Discover our exclusive range of transformative services that offer unique solutions for body contouring, rejuvenation, and wellness. These high-end treatments utilize cutting-edge technology and innovative methods to deliver exceptional, targeted results. Whether you're seeking muscle sculpting, relaxation, or revitalization, these services cater to your every need with an emphasis on luxurious care and advanced techniques.",
    services: [
      {
        name: "Body Sculpting",
        img_url: "/placeholder.png",
        price_range: "100",
        description:
          "Using HI-EMT (High-Intensity Focused Electro-Magnetic Technology) technology can continuously expand and contract your muscles, which is equivalently to extreme training, which can deeply reshape the internal structure of the muscles, and the myofibrils grow (the muscles will grow). Produce new protein chains and muscle fibers (muscle hyperplasia), thereby increasing muscle density and volume.",
        benefits: [
          "Reduce fat",
          "Build muscles",
          "Vest line",
          "Abdominal muscles",
          "Shaping peach hips",
          "Postpartum women's abdomen, improving rectus abdominis separation",
        ],
      },

      {
        name: "Alpha Oxylight LED Pod",
        img_url: "/placeholder.png",
        price_range: "100",
        description: `Pure oxygen LED pod creates a new category of holistic body treatments and improves targeted results by 50% - 200% via the various combinations of LED light, oxygen, and heat energies for: chronic fatigue syndrome, fibromyalgia, sleep/insomnia, seasonal affective disorder, pain relief - chronic or acute, increased circulation, vitamin d, detoxification/cellulite, cleansing/balancing, relaxation/stress reduction, meditation/calming, energy/revitalize, skin care, weight loss/metabolism, weight management, immune system boost, full body oxygenation, color therapy, aromatherapy, body wrap, clarity/harmony.`,
      },
    ],
  },
};
