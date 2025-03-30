import React from "react";
import { Users, Scale, Network } from "lucide-react"; // ✅ Import Lucide Icons
import wealth from "../assets/wealth.svg";
import law from "../assets/law.svg";
import diversity from "../assets/diversity.svg";

const features = [
  {
    icon: wealth,
    title: "For Wealth Advisors & Professionals",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor, nec sodales viverra.",
  },
  {
    icon: law,
    title: "For Law Students",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor, nec sodales viverra.",
  },
  {
    icon: diversity,
    title: "Diversity Resources",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor, nec sodales viverra.",
  },
];

export default function FeatureList() {
  return (
    <div className="features-con max-w-3xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="features-box flex items-center gap-4 relative mb-16">

          {/* Icon */}
          <div className="feature-icon">
            <img src={feature.icon} alt={feature.title} className="" />
          </div>

          {/* Content */}
          <div>
            <h4 className="text-lg ">
              {feature.title}
            </h4>
            <p className="">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}