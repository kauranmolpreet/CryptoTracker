import React from "react";

const teamMembers = [
  {
    name: "Komalpreet Kaur",
    className: "BCA",
    RollNumber: "2224903",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Tania",
    className: "BCA",
    RollNumber: "2224947",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Preeti",
    className: "BCA",
    RollNumber: "2224924",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Shivani",
    className: "BCA",
    RollNumber: "2224941",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen  text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#448557] mb-8">
          About Our Project
        </h1>

        {/* Project Info */}
        <div className="bg-gray-300 p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-[#448557] mb-4">
            Project Overview
          </h2>
          <p className="text-black leading-relaxed">
            Crypto Tracker is a student-built web application designed to
            provide real-time updates on cryptocurrency market trends. The goal
            of this project is to enhance our understanding of frontend
            development using React and Tailwind CSS, and to integrate APIs like
            CoinGecko for real-world data. This application is part of our
            academic learning journey, aimed at building real-time, interactive
            web solutions.
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold text-[#448557] mb-6 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=" p-5 rounded-xl text-center hover:shadow-[#448557] hover:scale-[1.02] transition-all duration-300 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-[#448557]"
              />
              <h3 className="text-xl font-bold text-[#448557]">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.className}</p>
              <p className="text-gray-400">{member.branch}</p>
              <p className="text-gray-400">Roll No. {member.RollNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
