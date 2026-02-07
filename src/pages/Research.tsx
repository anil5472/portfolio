import React, { useState } from "react";
import { Microscope, Users } from "lucide-react";
import imu from "../assets/imu.png";
import gopro from "../assets/gopro.jpg";
import lidar from "../assets/lidar.jpg";
import vbox from "../assets/vbox.jpg";
import gps from "../assets/gps.png";
import controlroom from "../assets/Control Room.png";
import ins1 from "../assets/ins1.png";
import ins2 from "../assets/ins2.png";
import biet from "../assets/biet.png";
import iitp from "../assets/iitp.jpg";
import res1 from "../assets/res1.png";
import res2 from "../assets/res2.png";
import res3 from "../assets/res3.jpg";
import res4 from "../assets/res4.png";
import res5 from "../assets/res5.png";
import res6 from "../assets/res6.png";
import spon1 from "../assets/spon1.png";
import spon2 from "../assets/spon2.png";
import spon3 from "../assets/spon3.jpg";
import spon4 from "../assets/spon4.png";

const researchAreas = [
  "Transportation Engineering",
  "Urban Mobility",
  "Naturalistic Driving Studies",
  "Road Safety",
  "Traffic Operations and Management",
  "Traffic Flow Modelling",
  "Public Transportation Systems",
  "Traffic Database Management",
];

const researchImages = [res1, res2, res3, res4, res5, res6];

const sponsoredProjects = [
  {
    sNo: 1,
    title:
      "Analysis and Modelling of Driver Behavior using Naturalistic Driving Data under Indian Traffic Conditions",
    agency: "SERB, DST",
    amount: "28.54 lakhs",
    status: "2022-2024\n(completed)",
    role: "PI",
  },
  {
    sNo: 2,
    title:
      "Development of a Performance Evaluation Dashboard for Urban Arterials and Highways using NavIC GNSS Data",
    agency: "SAC, ISRO",
    amount: "25.13 lakhs",
    status: "2025-2028\n(ongoing)",
    role: "Co-PI",
  },
  {
    sNo: 3,
    title:
      "Utilisation of Mixed Waste Coal Aggregates in Rigid & Flexible Pavements",
    agency: "Hindustan Steelworks Construction Limited",
    amount: "23.94 lakhs",
    status: "2025-2028\n(ongoing)",
    role: "Co-PI",
  },
  {
    sNo: 4,
    title: "Utilizing Steel Slag Aggregates in Concrete Paver Blocks",
    agency: "Hindustan Steelworks Construction Limited",
    amount: "24.96 lakhs",
    status: "2025-2028\n(ongoing)",
    role: "Co-PI",
  },
  {
    sNo: 5,
    title: "Data-Driven Feedback for Fuel Efficiency: A Reinforcement Learning Framework Tailored to Indian Driving Behaviour",
    agency: "ANRF",
    amount: "99.58 lakhs",
    status: "2026-2029\n(ongoing)",
    role: "Co-PI",
  },
];

const studentProjects = [
  {
    title:
      "Development of Software Stack for Traffic Estimation and Intelligent Fleet Management: An Autonomous Vehicle Context",
    institution: "NTU Singapore",
    principalInvestigator: "Prof. Justin Dauwels",
  },
  {
    title: "Utilization of Virtual Singapore for Autonomous Vehicles",
    institution: "NTU Singapore",
    principalInvestigator: "Prof. Justin Dauwels",
  },
  {
    title: "Enhanced Traffic Mobility using Signal Improvements",
    institution: "IIT Madras",
    principalInvestigator: "Prof. Bhargava Chilukuri",
  },
  {
    title:
      "Development of a Dynamic Traffic Congestion Prediction System for Indian Cities",
    institution: "IIT Madras",
    principalInvestigator: "Prof. Lelitha Devi",
  },
];

const equipmentList = [
  { image: vbox, caption: "Video V-Box" },
  { image: imu, caption: "IMU" },
  { image: lidar, caption: "LiDAR" },
  { image: gopro, caption: "Go Pro Video Camera" },
  { image: gps, caption: "GPS Tracker" },
];

const labEnvironment = [
  { image: controlroom, caption: "Control Room" },
  { image: ins1, caption: "Instrumented Vehicle" },
  { image: ins2, caption: "Instrumented Vehicle" },
];

const sponsorLogos = [spon1, spon2, spon3, spon4];

const collaborators = [
  {
    name: "Dr. Lelitha Devi",
    designation: "Professor",
    institute: "IIT Madras",
    photo:
      "https://civil.iitm.ac.in/faculty/lelitha/admin/download/Lelitha_passport_bg%20-%20Lelitha%20Devi%20IITM.jpg",
    profileLink: "https://civil.iitm.ac.in/faculty/lelitha/",
  },
  {
    name: "Dr. Shankar Ram CS",
    designation: "Professor",
    institute: "IIT Madras",
    photo: "https://ed.iitm.ac.in/~shankarram/Header_files/CSS_Jan_2016.jpg",
    profileLink: "https://ed.iitm.ac.in/~shankarram/",
  },
  {
    name: "Dr. Justin Dauwels",
    designation: "Associate Professor",
    institute: "TU Delft",
    photo:
      "https://microelectronics.tudelft.nl/shared/SPS/People/Foto%20Justin%20Dauwels.jpg",
    profileLink: "https://microelectronics.tudelft.nl/People/bio.php?id=744",
  },
  {
    name: "Dr. Dhivya Bharathi",
    designation: "Assistant Professor",
    institute: "IIT Roorkee",
    photo:
      "https://channeli.in/media/kernel/display_pictures/91449ba0-8282-4b47-b5a1-bc7eb0bce17b",
    profileLink:
      "https://iitr.ac.in/Centres/Centre%20for%20Transportation%20Systems/People/Faculty/101048.html",
  },
  {
    name: "Dr. Larry Rilett",
    designation: "Professor",
    institute: "Auburn University",
    photo:
      "https://eng.auburn.edu/images/programs/civil/headshots/rilett-laurence.jpg",
    profileLink: "https://eng.auburn.edu/autri/contact",
  },
  {
    name: "Dr. Shriniwas S. Arkatkar",
    designation: "Professor",
    institute: "SVNIT Surat",
    photo: "https://shriniwasprofile.wordpress.com/wp-content/uploads/2022/10/whatsapp-image-2022-10-22-at-4.09.33-pm.jpeg",
    profileLink: "https://shriniwasprofile.wordpress.com/",
  },
  {
    name: "Dr. Manoj K. Jha",
    designation: "Director",
    institute: "The Brite Group",
    photo:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=P5t_XZIAAAAJ&citpid=1",
    profileLink: "https://mkjhaconsult.com/about-dr-jha",
  },
  {
    name: "Dr. Sarat Chandra Nagavarapu",
    designation: "Senior Scientist",
    institute: "A Star, Singapore",
    photo:
      "https://saratchandranagavarapu.rf.gd/Sarat.jpg",
    profileLink:
      "https://saratchandranagavarapu.rf.gd/",
  },
];

const collaborators = [
  {
    name: "Dr. Lelitha Devi",
    designation: "Professor",
    institute: "IIT Madras",
    photo:
      "https://civil.iitm.ac.in/faculty/lelitha/admin/download/Lelitha_passport_bg%20-%20Lelitha%20Devi%20IITM.jpg",
    profileLink: "https://civil.iitm.ac.in/faculty/lelitha/",
  },
  {
    name: "Dr. Shankar Ram CS",
    designation: "Professor",
    institute: "IIT Madras",
    photo: "https://ed.iitm.ac.in/~shankarram/Header_files/CSS_Jan_2016.jpg",
    profileLink: "https://ed.iitm.ac.in/~shankarram/",
  },
  {
    name: "Dr. Justin Dauwels",
    designation: "Associate Professor",
    institute: "TU Delft",
    photo:
      "https://microelectronics.tudelft.nl/shared/SPS/People/Foto%20Justin%20Dauwels.jpg",
    profileLink: "https://microelectronics.tudelft.nl/People/bio.php?id=744",
  },
  {
    name: "Dr. Dhivya Bharathi",
    designation: "Assistant Professor",
    institute: "IIT Roorkee",
    photo:
      "https://channeli.in/media/kernel/display_pictures/91449ba0-8282-4b47-b5a1-bc7eb0bce17b",
    profileLink:
      "https://iitr.ac.in/Centres/Centre%20for%20Transportation%20Systems/People/Faculty/101048.html",
  },
  {
    name: "Dr. Larry Rilett",
    designation: "Professor",
    institute: "Auburn University",
    photo:
      "https://eng.auburn.edu/images/programs/civil/headshots/rilett-laurence.jpg",
    profileLink: "https://eng.auburn.edu/autri/contact",
  },
  {
    name: "Dr. Shriniwas S. Arkatkar",
    designation: "Professor",
    institute: "SVNIT Surat",
    photo: "https://shriniwasprofile.wordpress.com/wp-content/uploads/2022/10/whatsapp-image-2022-10-22-at-4.09.33-pm.jpeg",
    profileLink: "https://shriniwasprofile.wordpress.com/",
  },
  {
    name: "Dr. Manoj K. Jha",
    designation: "Director",
    institute: "The Brite Group",
    photo:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=P5t_XZIAAAAJ&citpid=1",
    profileLink: "https://mkjhaconsult.com/about-dr-jha",
  },
  {
    name: "Dr. Sarat Chandra Nagavarapu",
    designation: "Senior Scientist",
    institute: "A Star, Singapore",
    photo:
      "https://saratchandranagavarapu.rf.gd/Sarat.jpg",
    profileLink:
      "https://saratchandranagavarapu.rf.gd/",
  },
];


function Research() {
  const [activeSection, setActiveSection] = useState("areasOfInterest");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
            <Microscope
              className="h-8 w-8 mr-2 text-indigo-600"
              aria-label="Research Icon"
            />
            Research
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {[
            { key: "areasOfInterest", label: "Areas of Interest" },
            { key: "projects", label: "Projects" },
            { key: "facilities", label: "Facilities" },
            { key: "collaborators", label: "Collaborators" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                window.location.hash = key;
              }}
              className={`px-4 py-2 font-semibold ${
                activeSection === key
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded`}
              aria-label={`View ${key.replace(/([A-Z])/g, " $1").trim()}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sections */}

        {/* Conditional Rendering */}
        {activeSection === "areasOfInterest" && (
          <>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Areas of Interest
              </h3>
              <div className="grid gap-2 md:grid-cols-4">
                {researchAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center"
                  >
                    <h4 className="text-lg font-semibold text-gray-900">
                      {area}
                    </h4>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {researchImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Research ${index + 1}`}
                    className="rounded-lg shadow-md border border-gray-300 w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {activeSection === "projects" && (
          <>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sponsored Research Projects
              </h3>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">S. No.</th>
                    <th className="border border-gray-300 px-4 py-2">Title</th>
                    <th className="border border-gray-300 px-4 py-2">Role</th>
                    <th className="border border-gray-300 px-4 py-2">Agency</th>
                    <th className="border border-gray-300 px-4 py-2">Amount</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Status/Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sponsoredProjects.map((project) => (
                    <tr key={project.sNo} className="text-center">
                      <td
                        className="border border-gray-300 px-4 py-2"
                        style={{ minWidth: "80px" }}
                      >
                        {project.sNo}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {project.title}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 text-ellipsis overflow-hidden whitespace-nowrap"
                        style={{ maxWidth: "150px" }}
                      >
                        {project.role}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2"
                        style={{ minWidth: "120px" }}
                      >
                        {project.agency}
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2"
                        style={{ minWidth: "120px" }}
                      >
                        {project.amount}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 whitespace-pre-wrap">
                        {project.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Projects Involved as Student and Post-Doc
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {studentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                  >
                    <h4 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h4>
                    <p className="text-gray-600">
                      Institution: {project.institution}
                    </p>
                    <p className="text-gray-600">
                      PI: {project.principalInvestigator}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-6 overflow-x-auto">
              {sponsorLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="h-32"
                />
              ))}
            </div>
          </>
        )}

       {activeSection === "facilities" && (
  <div className="mt-12">

    {/* Title */}
    <h3 className="text-3xl font-bold text-gray-900 mb-10">
      Facilities
    </h3>

    {/* Equipment */}
    <h4 className="text-2xl font-semibold text-gray-800 mb-6">
      Equipment
    </h4>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {equipmentList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition"
        >
          {/* Fixed Image Frame */}
          <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.caption}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Caption */}
          <p className="mt-4 text-gray-900 font-semibold text-sm text-center">
            {item.caption}
          </p>
        </div>
      ))}
    </div>

    {/* Lab Environment */}
    <h4 className="text-2xl font-semibold text-gray-800 mt-14 mb-6">
      Lab Environment
    </h4>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {labEnvironment.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition"
        >
          {/* Fixed Image Frame */}
          <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.caption}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Caption */}
          <p className="mt-4 text-gray-900 font-semibold text-sm text-center">
            {item.caption}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

        {activeSection === "collaborators" && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users
                className="h-6 w-6 mr-2 text-indigo-600"
                aria-label="Collaborators Icon"
              />
              Collaborators
            </h3>
            <div className="grid gap-4 md:grid-cols-4">
              {collaborators.map((collaborator, index) => (
                <div key={index} className="text-center">
                  <img
                    src={collaborator.photo}
                    alt={collaborator.name}
                    className="w-40 h-56 object-cover rounded-xl mx-auto"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mt-1">
                    <a
                      href={collaborator.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {collaborator.name}
                    </a>
                  </h4>
                  <p className="text-gray-600">{collaborator.designation}</p>
                  <p className="text-gray-500">{collaborator.institute}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Research;





