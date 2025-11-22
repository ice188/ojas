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
  img_width: number;
  img_height: number;
}

export interface ServiceData {
  massage: Category;
  facial: Category;
  laser: Category;
  nail: Category;
  brow: Category;
  lashes: Category;
  waxing: Category;
  acunpuncture: Category;
  others: Category;
}

export const serviceData: ServiceData = {
  massage: {
    name: "Massage Therapy",
    description:
      "Feel deeply relaxed and rejuvenated as stress and tension melt from the body. Your mind will be calmer and sense awakened, restoring feelings of wellbeing.",
    img_url: "/service/massage/massage-place.jpg",
    img_width: 626,
    img_height: 351,
    services: [
      {
        name: "Deep Tissue Massage",
        description:
          "Experience ultimate relaxation with our deep tissue massage. Our skilled therapists use firm pressure and slow strokes to target deeper muscle layers, relieving tension, knots, and chronic aches. Whether you're dealing with muscle pain or just need to unwind, our massage will leave you feeling refreshed. Book now and feel the difference.",
        img_url: "/service/massage/deep-tissue.jpg",
        pressure: "Firm",
        price_range: "$68 - $196",
      },
      {
        name: "Relaxation Massage",
        description:
          "Escape stress with our relaxation massage. Our skilled therapists use soothing strokes to ease tension and promote deep relaxation, restoring balance to your body and mind.",
        img_url: "/service/massage/relaxation.jpeg",
        pressure: "Light - Medium",
        price_range: "$68 - $196",
      },
      {
        name: "Acupressure Massage",
        description:
          "Experience the healing power of acupressure massage. Our skilled therapists target specific points to stimulate energy flow, relieve tension, and restore balance. Feel revitalized and ready to take on the world.",
        img_url: "/service/massage/accupressure.jpg",
        pressure: "Medium - Firm",
        price_range: "$98 - $196",
      },
      {
        name: "Deep Detox Massage",
        description:
          "Rebalance and rejuvenate with our deep detox massage. Our therapists combine therapeutic massage, cupping, Gua Sha, and infrared heat to cleanse your body, boost circulation, and reduce inflammation. This 90-minute treatment helps relieve stress, muscle pain, sleep disorders, and chronic tension. Experience the benefits of detoxification and relaxation today.",
        img_url: "/service/massage/deep-detox.jpeg",
        pressure: "Light - Firm",
        price_range: "$175 | 90 min",
      },
      {
        name: "Cupping Massage",
        description:
          "Experience the rejuvenating benefits of cupping massage. This ancient therapy, combined with massage techniques, increases blood flow, relieves muscle tension, and promotes lymphatic drainage. Whether you want to ease pain, improve circulation, or simply relax, our skilled therapists will tailor the treatment to your needs. Discover the healing power of cupping and restore balance to your body and mind.",
        img_url: "/service/massage/cupping.jpg",
        pressure: "Medium - Firm",
        price_range: "$118 - 216",
      },
      {
        name: "Face and Body Rejuvenation Massage",
        description:
          "Indulge in ultimate relaxation with our full body and face massage. Our skilled therapists will melt away tension and refresh your skin, combining soothing massage with MyoGlow for a rejuvenating experience. Elevate your self-care routine today.",
        img_url: "/service/massage/face-body-re.jpeg",
        pressure: "Light - Medium",
        price_range: "$155 | 90 min",
      },
      {
        name: "Face Rejuvenation Massage",
        description:
          "Our face rejuvenation massage begins with a cleansing to remove impurities, followed by nourishing oils and serums. Gentle strokes, kneading, and acupressure boost circulation, ease tension, and promote lymphatic drainage. Unwind as stress melts away, leaving your skin radiant and refreshed—perfect for combating aging or enjoying self-care.",
        img_url: "/service/massage/face-massage.jpeg",
        pressure: "Light - Medium",
        price_range: "$90 | 45 min",
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
        name: "Prenatal Massage",
        description:
          "Experience the care you deserve with our prenatal massage, designed for expecting mothers. Our certified therapists use gentle techniques to relieve tension in the lower back, hips, and legs, promoting relaxation and comfort through every trimester. Enjoy a soothing, safe treatment tailored to your needs in a serene environment.",
        img_url: "/service/massage/prenatal.jpeg",
        price_range: "$100 | 1h",
      },
      {
        name: "GuaSha Massage",
        description:
          "Experience the ancient art of Gua Sha massage, a therapeutic practice that enhances circulation, promotes lymphatic drainage, and reduces tension. Using smooth tools, our skilled therapists help detoxify, reduce inflammation, and restore balance. Rejuvenate your body and mind with this traditional healing therapy.",
        img_url: "/service/massage/guasha.jpeg",
        pressure: "Medium - Firm",
        price_range: "$118 | 1h",
      },
      {
        name: "Couples Massage - each",
        description:
          "Share the ultimate relaxation with our Couples Massage. Enjoy a synchronized session with two skilled therapists providing tailored treatments for both individuals. Perfect for special occasions or quality time together, this experience ensures harmony and rejuvenation.",
        img_url: "/service/massage/couples.jpeg",
        price_range: "$98 - $147",
      },
    ],
  },
  facial: {
    name: "Facial",
    description:
      "We only use top brands for our clients. All of our Facials are customized and suited to your skin’s needs at each appointment.",
    img_url: "/service/facial/category.jpeg",
    img_width: 626,
    img_height: 417,
    services: [
      {
        name: "Hydrating Facial",
        description:
          "Pamper your skin with our Hydrating Signature Facial, designed to restore moisture and revitalize your complexion. After a gentle cleanse, enjoy a customized hydrating mask and nourishing serums, leaving your skin radiant and deeply hydrated. Perfect for all skin types, this treatment leaves you feeling refreshed and glowing.",
        img_url: "/service/facial/hydrate.jpeg",
        price_range: "$138 | 75 min",
      },
      {
        name: "Anti Aging",
        description:
          "Rejuvenate your skin with our Anti-Aging Signature Facial, designed to combat signs of aging and restore youthful vitality. After cleansing and exfoliating, our estheticians apply potent serums and moisturizers for hydration and firming. A customized anti-aging mask targets fine lines, wrinkles, and uneven texture, leaving your skin smoother, firmer, and more radiant.",
        img_url: "/service/facial/anti-aging.jpeg",
        price_range: "$145 | 75 min",
      },
      {
        name: "Acne treatment",
        description:
          "Our Acne Treatment Signature Facial is a targeted solution to combat breakouts and promote clear, healthy skin. The treatment begins with a thorough cleanse to remove impurities and unclog pores, preparing your skin for the innovative Bubble Masque. This masque utilizes gentle bubbling action to penetrate deep into pores, effectively dissolving impurities and unclogging congested skin. Extractions are performed to remove impurities and prevent future breakouts. The session concludes with soothing serums and moisturizers to hydrate and calm your skin, leaving you with a renewed sense of confidence. This comprehensive approach addresses the root causes of acne, promoting clearer and healthier skin.",
        img_url: "/service/facial/acne.jpeg",
        price_range: "$138 | 75 min",
      },
      {
        name: "Glow Facial",
        description:
          "Illuminate your complexion with our Glow Signature Facial, designed to enhance your skin's natural radiance. The treatment begins with a thorough cleanse to remove impurities and prepare your skin for rejuvenation. Next, indulge in a gentle exfoliation to reveal a brighter, smoother texture. Our skilled estheticians will massage in hydrating serums and moisturizers, leaving your skin with a luminous, dewy finish. Finally, enjoy our signature mask, infused with potent ingredients to nourish and revitalize your skin from within. Treat yourself to this rejuvenating facial and unveil a radiant glow that lasts.",
        img_url: "/service/facial/glow-facial.jpeg",
        price_range: "$138 | 75 min",
      },
      {
        name: "Total Care Facial",
        description:
          "Elevate your skincare routine with our Total Care Signature Facial, a comprehensive solution tailored to address all your skin concerns in one luxurious experience. Our skilled estheticians begin by assessing your skin's unique needs, customizing each step of the treatment to deliver maximum results. Starting with a thorough cleanse, we remove impurities and prepare your skin for deep nourishment. Next, indulge in a gentle exfoliation to reveal a smoother, more radiant complexion. Our signature mask, infused with potent ingredients, targets specific concerns such as hydration, firmness, and brightening, providing instant rejuvenation.  Relax and unwind as we perform gentle extractions to clear pores and remove impurities, promoting clearer, healthier skin. Enjoy a luxurious massage using rich serums and moisturizers, deeply hydrating and revitalizing your skin from within. Whether you're looking to combat aging, acne, or simply rejuvenate your complexion, our Total Care Treatment unveils your most radiant, refreshed, and beautifully rejuvenated skin in a single luxurious session.",
        img_url: "/service/facial/total-care.jpeg",
        price_range: "$145 | 75 min",
      },
      {
        name: "Back Facial",
        description:
          "Treat your back to the ultimate pampering experience with our Signature Back Facial. Designed to address the unique needs of this hard-to-reach area, our skilled estheticians begin by deeply cleansing the skin to remove impurities, excess oil, and dead skin cells. Next, indulge in a luxurious exfoliation to reveal smoother, softer skin. Enjoy a relaxing massage as we apply hydrating serums and moisturizers, leaving your skin feeling nourished and rejuvenated. Our signature mask, tailored specifically for the back, works to purify pores, detoxify the skin, and promote a clearer complexion. Whether you're seeking to address back acne, congestion, or simply want to indulge in a spa-like experience, our Signature Back Facial is the perfect solution for achieving radiant, healthy skin from head to toe.",
        img_url: "/service/facial/back.jpeg",
        price_range: "$95 | 45 min",
      },
      {
        name: "RF Microneedling",
        description:
          "Discover microneedling, a cutting-edge treatment that rejuvenates your skin by stimulating collagen and elastin production. Using fine needles, this procedure smooths wrinkles, reduces acne scars, and evens skin tone, leaving you with firmer, radiant skin. Tailored to your unique needs, it’s the ultimate skincare solution.",
        img_url: "/service/facial/rf.jpeg",
        price_range: "$480",
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
          "Elevate your skincare with our Micro-Sponge Seaweed Skin Renewal Facial. This advanced treatment uses micro-marine sponges enriched with seaweed, minerals, and herbal extracts to penetrate deep into the skin, boosting circulation and cell renewal. It removes dead skin cells, leaving your complexion re-densified, lifted, glowing, and youthful with an even tone.",
        img_url: "/service/facial/seaweed.jpeg",
        price_range: "$210 / 1h",
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
          "Reveal youthful, radiant skin with our Signature Anti-Aging Peel. This transformative treatment stimulates collagen, smooths fine lines, and improves texture and tone. Our skilled estheticians customize the peel to target dullness, uneven tone, and loss of elasticity, followed by a hydrating mask and nourishing serums to rejuvenate your skin. Achieve a glowing, refreshed complexion with minimal downtime.",
        img_url: "/service/facial/anti-aging-peel.jpg",
        price_range: "$160 | 75 min",
      },
      {
        name: "Acne Peel",
        description:
          "Our Signature Acne Peel is your solution for clearer, healthier skin. This targeted treatment exfoliates, unclogs pores, and reduces acne-causing bacteria while diminishing scars and hyperpigmentation. After a deep cleanse, our estheticians apply the peel with precision, followed by a calming mask and hydrating serums to soothe and nourish. Reveal a smoother, more confident complexion.",
        img_url: "/service/facial/acne-peel.jpeg",
        price_range: "$160 | 75 min",
      },
      {
        name: "Glow Peel",
        description:
          "Reveal radiant, even-toned skin with our Signature Glow Peel. Formulated with brightening agents, this gentle peel reduces dark spots, sun damage, and discoloration while promoting a luminous complexion. After a thorough cleanse, our estheticians apply the peel with precision, followed by a calming mask and hydrating serums to refresh and revitalize your skin. Achieve a brighter, more confident glow.",
        img_url: "/service/facial/glow-facial.jpeg",
        price_range: "$160 | 75 min",
      },
      {
        name: "Signature Peel",
        description:
          "Transform your skin with our Signature Facial Peel. This treatment exfoliates gently, diminishing fine lines, wrinkles, and uneven texture while targeting hyperpigmentation, acne scars, and dullness. After a deep cleanse, our estheticians apply the peel with precision, followed by a hydrating mask and calming serums to nourish and revitalize. Reveal smoother, brighter, and more youthful-looking skin with minimal downtime.",
        img_url: "/service/facial/signature-peel.jpeg",
        price_range: "$175 | 75 min",
      }
    ],
  },
  laser: {
    name: "Laser",
    img_url: "/service/laser/category.jpeg",
    img_width: 626,
    img_height: 417,
    description: "Laser services offer a range of treatments including skin revitalization, acne and scar reduction, pore minimization, hair removal, and freckle fading using advanced laser technologies for smoother, clearer, and youthful skin.",
    services: [
      {
        name: "DPL Photo Facial",
        description:
          "Revitalize your skin with our DPL Photo Facial, using Dynamic Pulsed Light to stimulate collagen production and promote cellular renewal for smoother, firmer, and more youthful skin. This treatment targets sun damage, acne scars, and fine lines, leaving your complexion luminous and even-toned.",
        img_url: "/service/laser/dpl.jpeg",
        price_range: "$280 - $320",
        benefits: [
          "Sun damage",
          "Rosacea",
          "Acne and scars",
          "Spider veins",
          "Pigmentation",
          "Anti-aging",
          "Reduce pore size",
          "Hydrating",
          "Fine lines",
        ],
      },
      {
        name: "Carbon Laser Peel",
        description:
          "Our Carbon Laser Peel deeply cleanses and exfoliates your skin using carbon particles and laser technology. It targets acne, reduces pore size, and stimulates collagen production, leaving your skin radiant, youthful, and glowing.",
        img_url: "/service/laser/carbon-peel.jpeg",
        price_range: "$220 - $260",
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
        img_url: "/service/laser/freckle-removal.jpeg",
        price_range: "$30 - $220",
        description:
          "Reduce or fade freckles with targeted laser treatment for clearer, even-toned skin.",
      },
      {
        name: "Laser Hair Removal",
        img_url: "/service/laser/hair-removal.jpeg",
        price_range: "$95 - $260",
        description:
          "Enjoy smooth, hair-free skin with our effective and long-lasting laser hair removal service.",
      },
    ],
  },
  nail: {
    name: "Nails",
    description:
      "The highest quality, the latest colors, the most beautiful styles, for the most beautiful you.",
    img_url: "/service/nails/manicure.jpg",
    img_width: 750,
    img_height: 500,
    services: [
      {
        name: "Manicure",
        description:
          "Treat your hands to a relaxing manicure for neat, beautiful nails.",
        img_url: "/service/nails/manicure.jpg",
        price_range: "$25 - $70",
      },
      {
        name: "Pedicure",
        description:
          "Pamper your feet with a soothing pedicure for soft skin and polished nails.",
        img_url: "/service/nails/pedicure.jpg",
        price_range: "$15 - $90",
      },
      {
        name: "Add-ons (Nail Art, Polish etc.)",
        description:
          "Enhance your nail service with extra touches like nail polish, art, or upgrades for a personalized look.",
        img_url: "/service/nails/add-ons.jpg",
        price_range: "$5 - $25",
      },
    ],
  },
  brow: {
    name: "Brows",
    img_url: "/service/brow/category.jpeg",
    img_width: 626,
    img_height: 417,
    description: "Brow services include treatments for shaping, tinting, and laminating brows to achieve a fuller, defined, and perfectly styled look.",
    services: [
      {
        name: "Brow Lamination",
        img_url: "/service/brow/brow-lamination.jpeg",
        price_range: "$80 | 45 min",
        description:
          "Achieve perfectly styled, full brows with our brow lamination treatment.",
      },
      {
        name: "Brow Tint",
        img_url: "/service/brow/brow-tint.jpeg",
        price_range: "$25 | 30 min",
        description:
          "Darken your brows for a defined, natural look with our tinting service.",
      },
      {
        name: "Brow Lamination & Tint",
        img_url: "/service/brow/brow-lamination-tint.jpeg",
        price_range: "$100 | 1h",
        description:
          "Combine brow lamination and tinting for fuller, perfectly shaped brows.",
      },
      {
        name: "Brow Waxing & Shape",
        img_url: "/service/brow/brow-waxing.jpeg",
        price_range: "$20 | 15 min",
        description:
          "Shape and clean up your brows with a precise waxing service.",
      },
      {
        name: "Brow Tint, Waxing & Shape",
        img_url: "/service/brow/brow-wst.jpeg",
        price_range: "$38 | 30 min",
        description:
          "Get perfectly shaped, tinted brows with this all-in-one waxing and tinting service.",
      },
    ],
  },
  lashes: {
    name: "Lashes",
    img_url: "/service/lash/category.jpeg",
    img_width: 626,
    img_height: 417,
    description: "Lash services offer a variety of treatments to enhance the length, volume, and curl of your lashes for a more dramatic and eye-catching look.",
    services: [
      {
        name: "Lash Lift",
        description:
          "Give your lashes a natural lift for a bold, eye-catching look.",
        img_url: "/service/lash/lash-lift.jpeg",
        price_range: "$65 | 45 min",
      },
      {
        name: "Lash Tint",
        description:
          "Darken your lashes for a fuller, more defined appearance.",
        img_url: "/service/lash/lash-tint.jpeg",
        price_range: "$25 | 20 min",
      },
      {
        name: "Lash Lift & Tint",
        description:
          "Lift and tint your lashes for a stunning, effortless look that lasts.",
        img_url: "/service/lash/lash-lift-tint.jpeg",
        price_range: "$80 | 1h",
      },
    ],
  },
  waxing: {
    name: "Waxing",
    img_url: "/service/waxing/category.jpeg",
    img_width: 626,
    img_height: 417,
    description: "Waxing services provide effective hair removal for smooth, hair-free skin, targeting areas such as eyebrows, legs, arms, and more, with long-lasting results.",
    services: [
      {
        name: "Face Waxing",
        description:
          "Smooth and fresh skin with our gentle face waxing service.",
        img_url: "/service/waxing/face-waxing.jpeg",
        price_range: "$10 - $20",
      },
      {
        name: "Arms Waxing",
        description:
          "Say goodbye to unwanted hair and enjoy soft, smooth arms.",
        img_url: "/service/waxing/arm-waxing.jpeg",
        price_range: "$18 - $35",
      },
      {
        name: "Legs Waxing",
        description:
          "Get smooth, hair-free legs with our professional waxing service for a clean and lasting finish.",
        img_url: "/service/waxing/leg-waxing.jpeg",
        price_range: "$35 - $52",
      },
      {
        name: "Bikini Waxing",
        description:
          "Clean up your bikini line with a precise and comfortable waxing.",
        img_url: "/service/waxing/bikini-waxing.jpeg",
        price_range: "$30 | 10 min",
      },
      {
        name: "Brazilian Waxing",
        description:
          "Experience a thorough and comfortable Brazilian waxing for a smooth, long-lasting result.",
        img_url: "/service/waxing/brazillian-waxing.jpeg",
        price_range: "$70 | 20 min",
      },
    ],
  },
  acunpuncture: {
    name: "Acupuncture",
    img_url: "/service/acupuncture/category.jpeg",
    img_width: 626,
    img_height: 417,
    description: "Embark on a journey to wellness and balance with our acupuncture treatment, a time-honored practice rooted in ancient Chinese medicine. Acupuncture is based on the concept of energy flow, or Qi, within the body. ",
    services: [
      {
        name: "Acupuncture",
        img_url: "/service/acupuncture/acupuncture.jpeg",
        price_range: "$110 first visit, $100 follow up visit",
        description:"Embark on a journey to wellness and balance with our acupuncture treatment, a time-honored practice rooted in ancient Chinese medicine. Acupuncture is based on the concept of energy flow, or Qi, within the body. By stimulating specific points along the body's meridian pathways with fine needles, our experienced acupuncturists help to restore harmony and promote the body's natural healing processes. During your acupuncture session, you will be guided to a state of deep relaxation as the gentle insertion of needles triggers a cascade of physiological responses. Many of our clients report feelings of calmness, reduced pain, and improved energy levels following their treatment. Whether you seek relief from chronic pain, stress, anxiety, or a variety of other conditions, acupuncture offers a safe and effective solution. Our skilled practitioners tailor each treatment to address your unique needs and goals, ensuring a personalized and holistic approach to your wellness journey.",
      }
    ],
  },

  others: {
    name: "Others",
    img_url: "/home/yoga.jpg",
    img_width: 1019,
    img_height: 765,
    description:
      "Discover our exclusive range of transformative services that offer unique solutions for body contouring, rejuvenation, and wellness. ",
    services: [
      {
        name: "Body Sculpting",
        img_url: "/service/others/sculpting.jpeg",
        price_range: "$100 | 30 min",
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
        img_url: "/service/others/alpha.jpeg",
        price_range: "$100 | 30 min",
        description: `Pure oxygen LED pod creates a new category of holistic body treatments and improves targeted results by 50% - 200% via the various combinations of LED light, oxygen, and heat energies for: chronic fatigue syndrome, fibromyalgia, sleep/insomnia, seasonal affective disorder, pain relief - chronic or acute, increased circulation, vitamin d, detoxification/cellulite, cleansing/balancing, relaxation/stress reduction, meditation/calming, energy/revitalize, skin care, weight loss/metabolism, weight management, immune system boost, full body oxygenation, color therapy, aromatherapy, body wrap, clarity/harmony.`,
      },
    ],
  },
};
