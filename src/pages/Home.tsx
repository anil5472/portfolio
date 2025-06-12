import React from "react";
import { Book } from "lucide-react";
import biet from "../assets/biet.png";
import iitp from "../assets/iitp-logo.png";
import ntu from "../assets/NTU.jpg";
import iitm from "../assets/iitm.jpg";
import anil from "../assets/anil.jpeg";
import anil1 from "../assets/anil1.png";
import rg from "../assets/rg.png";
import google from "../assets/google.png";
import orcid from "../assets/orcid.png"; // fixed typo
import wos from "../assets/wos.png";

const profile = {
  name: "Dr. Anilkumar Bachu",
  title: "Assistant Professor",
  department: "Department of Civil and Environmental Engineering",
  department1: "Indian Institute of Technology Patna",
  about: `I am an Assistant Professor at the Indian Institute of Technology Patna, specializing in Transportation Engineering. My research focuses on traffic flow modeling, intelligent transportation systems, and urban mobility analytics. I am passionate about leveraging data-driven approaches to solve complex transportation challenges and improve mobility for all.`,
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
    institution:
      "Centre of Excellence for Testing & Research of Autonomous Vehicles NTU (CETRAN)",
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
    title: "Pre-Doctoral Fellow", // fixed typo
    institution: "Indian Institute of Technology Madras",
    year: "Dec 2016 - Jun 2017",
    logo: iitm,
  },
];

const education = [
  {
    degree: "M.S. (by Research) & Ph.D",
    thesis: "Specialization: Transportation Engineering", // fixed typo
    university: "Indian Institute of Technology Madras",
    year: "Jul 2012 - Jul 2017",
    logo: iitm,
  },
  {
    degree: "B.Tech in Civil Engineering",
    university:
      "Bharat Institute of Engineering and Technology Hyderabad (affiliated to JNTU Hyderabad)",
    year: "Sep 2008 - Jun 2012",
    logo: biet,
  },
];

const skills = [
  "Traffic Flow Modeling",
  "Intelligent Transportation Systems",
  "Simulation and Data Analytics",
  "Transportation Planning",
  "Machine Learning in Transportation",
  "Urban Mobility Analytics",
  "Big Data Analysis",
  "Sustainable Transportation",
];

function Home() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <img
            src={anil1}
            alt="Profile of Dr. Anilkumar Bachu"
            className="w-48 h-56 rounded-lg mb-8 md:mb-0 md:mr-8 object-cover shadow-lg transition-transform duration-200 hover:scale-105"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-bold text-2xl text-gray-500 dark:text-gray-300">
              {profile.title}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-600 dark:text-gray-300">
              {profile.department}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-600 dark:text-gray-300">
              {profile.department1}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="https://scholar.google.com/citations?user=mrw1V7YAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src={google} alt="Google Scholar" className="w-8 h-8" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Anilkumar-Bachu?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src={rg} alt="ResearchGate" className="w-8 h-8" />
              </a>
              <a
                href="https://orcid.org/my-orcid?orcid=0000-0001-5933-8362"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src={orcid} alt="ORCID" className="w-8 h-8" />
              </a>
              <a
                href="https://www.webofscience.com/wos/author/record/ABF-9870-2021"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src={wos} alt="Scopus" className="w-8 h-8" />
              </a>
            </div>
            {/* Download CV Button */}
            <a
              href="/cv.pdf" // Update with the actual path to your CV
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* About Section */}
        <Section title="About">
          <p className="text-lg text-gray-600 dark:text-gray-300">{profile.about}</p>
        </Section>

        {/* Skills & Research Interests */}
        <Section title="Skills & Research Interests">
          <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Section>

        {/* Appointments Section */}
        <Section
          title="Appointments"
          icon={<Book className="h-6 w-6 mr-2 text-indigo-600" />}
        >
          <GridList items={appointments} />
        </Section>

        {/* Education Section */}
        <Section
          title="Education"
          icon={<Book className="h-6 w-6 mr-2 text-indigo-600" />}
        >
          <GridList items={education} />
        </Section>

        {/* Awards and Honours Section */}
        <Section title="Awards and Honours">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-lg hover:ring-2 hover:ring-indigo-300">
              <h3 className="text-lg font-semibold">Scholarships</h3>
              <ul className="mt-2 text-gray-500 dark:text-gray-300 list-disc list-inside">
                <li>Best PhD Student, IIT Madras (2016)</li>
                <li>Gold Medal for BTech Performance (2012)</li>
                <li>Pre-Doc Fellowship, IIT Madras (2016)</li>
                <li>MHRD Fellowship, IIT Madras (2012-2016)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-lg hover:ring-2 hover:ring-indigo-300">
              <h3 className="text-lg font-semibold">Research Awards</h3>
              <ul className="mt-2 text-gray-500 dark:text-gray-300 list-disc list-inside">
                <li>Institute Research Award, IIT Madras</li>
                <li>Best Paper - 3rd CTRG, Kolakata (2015)</li>
                <li>Best Paper, IEEE ICITE (2016)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-lg hover:ring-2 hover:ring-indigo-300">
              <h3 className="text-lg font-semibold">Travel Grants</h3>
              <ul className="mt-2 text-gray-500 dark:text-gray-300 list-disc list-inside">
                <li>ITS Grant, ANRF (2023)</li>
                <li>ITS Grant, SERB (2018)</li>
                <li>Student Travel Grant, IIT Madras (2014)</li>
                <li>Student Travel Grant, IIT Madras (2016)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-lg hover:ring-2 hover:ring-indigo-300">
              <h3 className="text-lg font-semibold">Memberships</h3>
              <ul className="mt-2 text-gray-500 dark:text-gray-300 list-disc list-inside">
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

// Section component
const Section = ({ title, icon, children }) => (
  <div className="mt-10 max-w-7xl mx-auto text-left fade-in-section">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
      {icon} {title}
    </h2>
    <div className="mt-8">{children}</div>
  </div>
);

// GridList component
const GridList = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm flex items-center transition-shadow hover:shadow-lg hover:ring-2 hover:ring-indigo-300"
      >
        <img
          src={item.logo}
          alt={`${item.institution || item.university} logo`}
          className="h-[5rem] w-[5rem] mr-4 rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title || item.degree}</h3>
          {item.thesis && (
            <p className="text-gray-500 dark:text-gray-300 text-sm">{item.thesis}</p>
          )}
          <p className="text-gray-600 dark:text-gray-300">{item.institution || item.university}</p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{item.year}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Home;
