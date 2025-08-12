interface Promotion {
  name: string;
  price: string;
  saving: string;
}

interface PromotionCategory {
  name: string;
  promotions: Promotion[];
}
export interface PromotionData {
  "spa-package": PromotionCategory;
  promotion: PromotionCategory;
}

export const promotionData: PromotionData = {
  "spa-package": {
    name: "Spa Package",
    promotions: [
      {
        name: "1 Hour massage + Regular Manicure + Regular Pedicure",
        price: "188",
        saving: "10",
      },
      {
        name: "1 Hour Massage + Signature Facial",
        price: "220",
        saving: "16",
      },
      {
        name: "1 Hour Massage + Signature Facial + Shellac Manicure + Shellac Pedicure",
        price: "346",
        saving: "20",
      },
      {
        name: "Signature Facial + Regular Manicure + Regular Pedicure",
        price: "223",
        saving: "15",
      },
    ],
  },
  promotion: {
    name: "Special Promotion",
    promotions: [
        {
            name: "DPL - Buy 5 Get 1 Free",
            price: "1400",
            saving: "280",
          },
          {
            name: "Carbon Laser Peel - Buy 5 Get 1 Free",
            price: "1100",
            saving: "220",
          },
          {
            name: "Spa Pedicure - Buy 5 Get 1 Free",
            price: "375",
            saving: "75",
          },
          {
            name: "Spa Manicure - Buy 5 Get 1 Free",
            price: "250",
            saving: "49.8",
          },
    ],
  },
};
