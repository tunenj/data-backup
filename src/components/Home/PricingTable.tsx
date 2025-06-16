import vector from '../../../public/icons/Vector.png';
import vectorWhite from '../../../public/icons/VectorWhite.png';
import Image from 'next/image';
import { colors } from '@/utils/colors';

type PricingPlan = {
  name: string;
  description: string;
  price: string;
  isFeatured?: boolean;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "Pro Version. Unlock Advanced Features for Enhanced Data Protection.",
    price: "₦19,000",
    features: ["Pro Benefit", "Pro Benefit", "Pro Benefit", "Pro Benefit", "Pro Benefit"],
  },
  {
    name: "Pro",
    description: "Pro Version. Unlock Advanced Features for Enhanced Data Protection.",
    price: "₦19,000",
    features: ["Pro Benefit", "Pro Benefit", "Pro Benefit", "Pro Benefit", "Pro Benefit"],
  },
  {
    name: "Enterprise",
    description: "Pro Version. Unlock Advanced Features for Enhanced Data Protection.",
    price: "₦19,000",
    features: ["Pro Benefit", "Pro Benefit", "Pro Benefit", "Pro Benefit", "Pro Benefit"],
    isFeatured: true,
  },
];

export default function PricingTable() {
  return (
   <section className="bg-[#fff8f7] py-12 px-2 md:px-0 rounded-t-2xl -mt-20 overflow-hidden border border-gray-200">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#6F0C15] mb-2">
          Simple, affordable Pricing
        </h2>
        <p className="text-[#5A5A5A] font-poppins font-semibold text-lg sm:text-xl mt-3">
          Start Securing your data and pay as you grow
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl shadow-sm flex flex-col ${
              plan.isFeatured ? "bg-[#7c1d1d] text-white" : "bg-white border"
            } w-full sm:w-[20rem] md:w-[25rem] h-auto md:h-[35rem]`}
          >
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <h3 className={`font-poppins font-bold text-2xl sm:text-3xl mb-1 ${
                plan.isFeatured ? "text-white" : "text-[#7c1d1d]"
              }`}>
                {plan.name}
              </h3>
              <p className={`mb-3 text-sm sm:text-base ${
                !plan.isFeatured ? "text-[#7c1d1d]" : ""
              }`}>
                {plan.description}
              </p>
              <div className={`font-bold text-xl sm:text-2xl md:text-3xl mb-2 ${
                !plan.isFeatured ? "text-[#7c1d1d]" : ""
              }`}>
                {plan.price}
                <span className="text-sm font-normal">/mo</span>
              </div>
              <div className="text-xs mb-4" style={!plan.isFeatured ? { color: colors.primary } : undefined}>
                Billed Annually.
              </div>
              <div className="w-full h-px bg-gray-300 mb-4" />
              <ul className={`mb-4 space-y-2 text-left text-sm ${
                !plan.isFeatured ? "text-[#6F0C15]" : ""
              }`}>
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image
                      src={plan.isFeatured ? vectorWhite : vector}
                      alt="Check"
                      width={16}
                      height={12}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`underline text-xs mb-4 block ${
                  !plan.isFeatured ? "text-[#7c1d1d]" : ""
                }`}
              >
                See all features
              </a>
            </div>
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <button
                className={`w-full font-semibold py-3 rounded-xl transition ${
                  plan.isFeatured
                    ? "bg-white text-[#6F0C15]"
                    : "bg-[#6F0C15] text-white"
                }`}
              >
                Choose plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
