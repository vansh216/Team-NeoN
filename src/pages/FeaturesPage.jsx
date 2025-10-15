import React from "react";
import { User,  HandHeart, Settings, BarChart2, Target } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Peer to Peer learning",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <User size={40} className="text-white" />,
  },
  {
    id: "02",
    title: "Spreading culture",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    icon: <HandHeart size={40} className="text-white" />,
  },
  {
    id: "03",
    title: "Community supports",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: <Settings size={40} className="text-white" />,
  },
  {
    id: "04",
    title: "Learning through Quizes",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    icon: <BarChart2 size={40} className="text-white" />,
  },
  {
    id: "05",
    title: "Cultural Events",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Target size={40} className="text-white" />,
  },
];

const FeaturesPage = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-16 px-6">
      <div>
        <h1 className="text-7xl font-semibold bg-gradient-to-b from-purple-500 to-gray-100 bg-clip-text text-transparent underline-offset-4 ">Features</h1>
      </div>
      <div className="max-w-5xl w-full space-y-12 mt-15">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-8 border-b-1 border-purple-500 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-shrink-0 bg-black rounded-full shadow-xl w-28 h-28 flex items-center justify-center border-4 border-purple-600">
              {feature.icon}
            </div>


            <div className="flex-1 text-center md:text-left ">
              <h2 className="text-4xl font-extrabold bg-gradient-to-b from-purple-500 to-gray-100 bg-clip-text text-transparent flex items-center gap-4">
                <span className="bg-gradient-to-b from-purple-500 to-gray-100 bg-clip-text text-transparent">{feature.id}</span>{" "}
                {feature.title}
              </h2>
              <p className="mt-2 text-lg text-gray-100">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
