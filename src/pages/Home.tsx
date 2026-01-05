import React, { useState } from "react";
import { Book } from "lucide-react";
import biet from "../assets/biet.png";
import iitp from "../assets/iitp-logo.png";
import ntu from "../assets/NTU.jpg";
import iitm from "../assets/iitm.jpg";
import anil1 from "../assets/anil1.png";
import rg from "../assets/rg.png";
import google from "../assets/google.png";
import orchid from "../assets/orcid.png";
import wos from "../assets/wos.png";

const profile = {
  name: "Dr. Anilkumar Bachu",
  title: "Assistant Professor",
  department: "Department of Civil and Environmental Engineering",
  department1: "Indian Institute of Technology Patna",
  about: `I am an Assistant Professor at the Indian Institute of Technology Patna, specializing in Transportation Engineering. My research focuses on traffic flow modeling, intelligent transportation systems, and sustainable mobility.`
};

const appointments = [
  {
    title: "Assistant Professor",
    institution: "Indian Institute of Technology Patna",
    year: "Jun 2019 - Present",
    logo: iitp,
  },
  {
    title: "Research Fellow",
    institution: "Centre of Excellence for Testing & Research of Autonomous Vehicles NTU (CETRAN)",
    year: "Jul 2018 - May 2019",
    logo: ntu,
  },
  {
    title: "Senior Project Officer",
    institution: "Indian Institute of Technology Madras",
    year: "Jul 2017 - Jun 2018",
    logo: iitm,
  },
  {
    title: "Pre-Dcotoral Fellow",
    institution: "Indian Institute of Technology Madras",
    year: "Dec 2016 - Jun 2017",
    logo: iitm,
  },
];

const education = [
  {
    degree: "M.S. (by Research) & Ph.D",
    thesis: "Specilization: Transportation Engineering",
    university: "Indian Institute of Technology Madras",
    year: "Jul 2012 - Jul 2017",
    logo: iitm,
  },
  {
    degree: "B.Tech in Civil Engineering",
    university: "Bharat Institute of Engineering and Technology Hyderabad (affiliated to JNTU Hyderabad)",
    year: "Sep 2008 - Jun 2012",
    logo: biet,
  },
];

const researchInterests = [
  "Public Transportation",
  "Naturalistic Driving Studies",
  "Road Safety",
  "AI/ML for Transportation",
  "Traffic Flow Modelling",
];

// CV link (use your actual asset or OneDrive link as needed)
const cvLink = "https://1drv.ms/b/c/5c97037dc0b009f1/EYdIdHas4cpHqdPEMrsCeZcBnKnb26bR0DoRa9o_h_OCNQ?e=2IqyoD";

function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER CARD */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="relative">
            <img
              src={anil1}
              alt="Profile of Dr. Anilkumar Bachu"
              className="w-48 h-56 rounded-lg mb-8 md:mb-0 md:mr-8 object-cover transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            />
            {showTooltip && (
              <div
                className="absolute left-1/2 z-10 -bottom-10 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
                style={{ whiteSpace: "nowrap" }}
              >
                👋 Hi! This is Dr. Anilkumar Bachu
              </div>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-bold text-2xl text-gray-500">
              {profile.title}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-600">
              {profile.department}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-600">
              {profile.department1}
            </p>
            {/* Logos and Download CV in the same row, IMMEDIATELY AFTER department1 */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
              <a
                href="https://scholar.google.com/citations?user=mrw1V7YAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img src={google} alt="Google Scholar" className="w-8 h-8" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Anilkumar-Bachu?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img src={rg} alt="ResearchGate" className="w-8 h-8" />
              </a>
              <a
                href="https://orcid.org/my-orcid?orcid=0000-0001-5933-8362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img src={orchid} alt="ORCID" className="w-8 h-8" />
              </a>
              <a
                href="https://www.webofscience.com/wos/author/record/ABF-9870-2021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img src={wos} alt="Scopus" className="w-8 h-8" />
              </a>
              {/* Download CV Button at the end of the row */}
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <button
                  className="ml-3 px-5 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition-all"
                  style={{ minWidth: "120px" }}
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>

        <Section title="About">
  {/* About text */}
  <div>
    <p className="text-lg text-gray-600">
      {profile.about}
    </p>
  </div>

  {/* Research Interests as badges */}
  <div className="flex flex-wrap gap-2 mt-4">
    {researchInterests.map((interest, idx) => (
      <span
        key={idx}
        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold shadow"
      >
        {interest}
      </span>
    ))}
  </div>
</Section>


        <Section
          title="Appointments"
          icon={<Book className="h-6 w-6 mr-2 text-indigo-600" />}
        >
          <GridList items={appointments} />
        </Section>

        <Section
          title="Education"
          icon={<Book className="h-6 w-6 mr-2 text-indigo-600" />}
        >
          <GridList items={education} />
        </Section>

        <Section title="Awards and Honours">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Scholarships</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Best PhD Student, IIT Madras (2016)</li>
                <li>Gold Medal for BTech Performance (2012)</li>
                <li>Pre-Doc Fellowship, IIT Madras (2016)</li>
                <li>MHRD Fellowship, IIT Madras (2012-2016)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Research Awards</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Institute Research Award, IIT Madras</li>
                <li>Best Paper - 3rd CTRG, Kolakata (2015)</li>
                <li>Best Paper, IEEE ICITE (2016)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Travel Grants</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>ITS Grant, ANRF (2023)</li>
                <li>ITS Grant, SERB (2018)</li>
                <li>Student Travel Grant, IIT Madras (2014)</li>
                <li>Student Travel Grant, IIT Madras (2016)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Memberships</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>IRC</li>
                <li>IEEE</li>
                <li>TRG</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}

const Section = ({ title, icon, children }) => (
  <div className="mt-10 max-w-7xl mx-auto text-left">
    <h2 className="text-3xl font-bold text-gray-900 flex items-center">
      {icon} {title}
    </h2>
    <div className="mt-8">{children}</div>
  </div>
);

const GridList = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg p-6 shadow-sm flex items-center"
      >
        <img
          src={item.logo}
          alt={`${item.institution || item.university} logo`}
          className="h-[5rem] w-[5rem] mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title || item.degree}</h3>
          {item.thesis && (
            <p className="text-gray-500 text-sm">{item.thesis}</p>
          )}
          <p className="text-gray-600">{item.institution || item.university}</p>
          <p className="mt-2 text-gray-500">{item.year}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Home;



