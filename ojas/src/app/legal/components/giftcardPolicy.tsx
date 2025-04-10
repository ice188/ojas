export default function GiftCardPolicy() {
    return (
      <div className="bg-white py-16 relative mt-[98px]">
        <div className="w-full max-w-7xl px-8 md:px-16 mx-auto">
          <div className="w-full justify-start items-center gap-10 grid grid-cols-1">
            <div className="w-full flex-col justify-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start gap-4 flex">
                <h1 className="font-salsa text-[#2a5136] text-4xl font-bold font-manrope leading-normal text-start mb-4">
                  Gift Card Policy
                </h1>
                <div className="text-gray-700 font-noto">
                  At SPA OJAS, we want to ensure that our gift cards are easy to
                  use, flexible, and fully compliant with Manitoba’s Consumer
                  Protection Act. Please review the following terms and conditions
                  regarding usage for our physical and digital gift cards:
                  <ul className="list-disc pl-6 my-4 mt-8">
                    <li className="mb-4">
                      <strong>No Expiry on Dollar-Value Gift Cards:</strong>
                      <ul className="list-inside">
                        <li>Gift cards purchased for a specific dollar amount (e.g., $100) do not expire.</li>
                        <li>They can be used toward any service or product offered at SPA OJAS.</li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <strong>Service-Specific Gift Cards:</strong>
                      <ul className="list-inside">
                        <li>Gift cards purchased for a specific service (e.g., a massage session or facial) may have an expiration date, which will be clearly indicated at the time of purchase.</li>
                        <li>After the expiration date, the card will retain its original dollar value, which can be applied to any service or product.</li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <strong>Promotional and Discounted Gift Cards:</strong>
                      <ul className="list-inside">
                        <li>Gift cards issued as part of a promotion (e.g., “Buy $100, get $20 free”) may have an expiration date for the promotional value.</li>
                        <li>The original paid value will never expire and can be used after the promotional portion expires.</li>
                      </ul>
                    </li>
                    <li className="mb-4">
                      <strong>Lost or Stolen Cards:</strong>
                      <ul className="list-inside">
                        <li>SPA OJAS is not responsible for lost, stolen, or damaged gift cards.</li>
                        <li>Please treat them like cash, as they cannot be replaced.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Non-Refundable and Non-Transferable:</strong>
                      <ul className="list-inside">
                        <li>Gift cards are non-refundable and cannot be redeemed for cash.</li>
                        <li>They are transferable and can be used by anyone in possession of the card.</li>
                      </ul>
                    </li>
                  </ul>
                  We look forward to welcoming you or your loved ones to SPA OJAS for a rejuvenating experience. If you have any questions about our gift card policy, please feel free to contact us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  