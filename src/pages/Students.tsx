import React, { useState } from "react";
import { Linkedin } from "lucide-react";
import ankit from "../assets/Ankit.jpeg";
import rama from "../assets/rama.jpg";
import sample from "../assets/sample.png";
import chaitra from "../assets/chaitra.jpg";
import aakash from "../assets/aakash.jpg";
import hardik from "../assets/hardik.jpg";
import gaurav from "../assets/gaurav.jpg";
import kartik from "../assets/karthik.jpg";
import abhilash from "../assets/abhilash.jpg";
import kamal from "../assets/kamal.jpg";
import ananya from "../assets/ananya.jpg";
import ananya from "../assets/ananya.jpg";
import gopi from "../assets/gopi.jpg";
import pawan from "../assets/pawan.jpg";
import shriyan from "../assets/shriyan.jpg";
import devansh from "../assets/devansh.jpg";
import pranav from "../assets/pranav.jpg";
import prince from "../assets/prince.jpg";
import abhinav from "../assets/abhinav.jpg";
import mukul from "../assets/mukul.jpg";
import madhur from "../assets/madhur.jpg";
import brajesh from "../assets/brajesh.jpg";
import piyush from "../assets/piyush.png";
import rishav from "../assets/rishav.jpg";
import krishanu from "../assets/krishanu.jpg";
import rohit from "../assets/rohit.jpg";
import abhay from "../assets/abhay.jpg";
import satvik from "../assets/satvik.jpg";

function Students() {
  const [selectedCategory, setSelectedCategory] = useState("Ongoing");

  const studentsData = {
    Ongoing: {
      PhD: [
        {
          name: "Ankit Kumar Kushwaha",
          year: "2021 - 2025 (expected)",
          position: "IIT Patna",
          image: ankit,
          social: {
            linkedin: "https://www.linkedin.com/in/ankit-kushwaha-62784b189/",
          },
        },
        {
          name: "Ramanand Singh",
          year: "2022 - 2026 (expected)",
          position: "IIT Patna",
          image: rama,
          social: {
            linkedin: "https://www.linkedin.com/in/ramanand-s-361b761a2/",
          },
        },
        {
          name: "Aishwarya Kumari",
          year: "2025 - 2029 (expected)",
          position: "IIT Patna",
          image: sample,
          social: {
            linkedin: " ",
          },
        },
      ],
      MTech: [
        {
          name: "Jahnvi Jassi",
          year: "2026-2027",
          position: "IIT Patna",
          caption: "Trying to finish my thesis before AI takes my job.",
          image: sample,
          social: {
            linkedin: " ",
          },
        },
        {
          name: "Vibhuti Bhushan Singh",
          year: "2025-2026",
          position: "IIT Patna",
          caption: "Trying to finish my thesis before AI takes my job.",
          image: sample,
          social: {
            linkedin: " ",
          },
        },
      ],
      BTech: [
        {
          name: "Abhay Pratap",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: abhay,
          social: {
            linkedin: "https://www.linkedin.com/in/abhay-pratap-99840826b/",
          },
        },
        {
          name: "Satvik Singh Chauhan",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: satvik,
          social: {
            linkedin: "https://www.linkedin.com/in/satvik-iitp/",
          },
        },
        {
          name: "Rohit Kumawat",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: rohit,
          social: {
            linkedin: "https://www.linkedin.com/in/rohit-kumawat-787b04307/",
          },
        },
        {
          name: "Kushboo Kumari",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Dreaming in algorithms and debugging in reality.",
          image: sample,
          social: {
            linkedin: "https://www.linkedin.com/in/khushboo-kumari-b117b8254/",
          },
        },
      ],
    },
    Graduated: {
      PhD: [],
      MTech: [
        {
          name: "Priyanka Kumari",
          year: "2024-2025",
          position: "IIT Patna",
          caption: "Trying to finish my thesis before AI takes my job.",
          image: sample,
          social: {
            linkedin: " ",
          },
        },
        {
          name: "Krishanu Prakash",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: krishanu,
          social: {
            linkedin: "https://www.linkedin.com/in/krishanu-prakash-97083a178/",
          },
        },
        {
          name: "Anuj Kumar",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: sample,
          social: {
            linkedin: " ",
          },
        },
        {
          name: "Rishav Jaiswal",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: rishav,
          social: {
            linkedin: "https://www.linkedin.com/in/rishav-jai/",
          },
        },
        {
          name: "Piyush Kumar Pandey",
          year: "2021-22",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: piyush,
          social: {
            linkedin: "https://www.linkedin.com/in/pkpandeyiitp/",
          },
        },
        {
          name: " Kumar Dubey",
          year: "2020-21",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: brajesh,
          social: {
            linkedin: "https://www.linkedin.com/in/brajesh-kumar-dubey-223873233/",
          },
        },
        {
          name: "Chaitra Pranesh",
          year: "2018-19",
          position: "NTU Singapore",
          caption: "Turning ideas into reality with code.",
          image: chaitra,
          social: {
            linkedin: "https://www.linkedin.com/in/chaitra-pranesh/",
          },
        },
        {
          name: "Aakash Kumar Narayanan",
          year: "2018-19",
          position: "NTU Singapore",
          caption: "Making sense of data, one model at a time.",
          image: aakash,
          social: {
            linkedin: "https://www.linkedin.com/in/aakashkumar15/",
          },
        },
      ],
      BTech: [
        {
          name: "Shriyansh Sinha",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: shriyan,
          social: {
            linkedin: "https://www.linkedin.com/in/shriyansh-sinha-124a1922a/",
          },
        },
        {
          name: "Devansh Rai",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: devansh,
          social: {
            linkedin: "https://www.linkedin.com/in/devanshrai/",
          },
        },
        {
          name: "Pranav Shajan Chandhirathil",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: pranav,
          social: {
            linkedin: "https://www.linkedin.com/in/pranav-shajan-585ba4270/",
          },
        },
        {
          name: "Prince Kumar Singh",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Dreaming in algorithms and debugging in reality.",
          image: prince,
          social: {
            linkedin: "https://www.linkedin.com/in/prince-kumar-singh-781589298/",
          },
        },
        {
          name: "Abhinav Singh",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: abhinav,
          social: {
            linkedin: "https://www.linkedin.com/in/abhinavsingh11/",
          },
        },
        {
          name: "Mukul",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: mukul,
          social: {
            linkedin: "https://www.linkedin.com/in/mukul-panchal-64513a198/",
          },
        },
        {
          name: "Madhur Garg",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: madhur,
          social: {
            linkedin: "https://www.linkedin.com/in/madhur-garg-3409581bb/",
          },
        },
        {
          name: "Dhangar Neha Rani",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: sample,
          social: {
            linkedin: "https://www.linkedin.com/in/dhangarneharani2003/",
          },
        },
        {
          name: "Hardik Arora",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: hardik,
          social: {
            linkedin: "https://www.linkedin.com/in/hardik-arora-8b4225193/",
          },
        },
        {
          name: "Gaurav Chaudhary",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: gaurav,
          social: {
            linkedin: "https://www.linkedin.com/in/gaurav-chaudhary-2b43b5193/",
          },
        },
        {
          name: "Kartik Shinde",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: kartik,
          social: {
            linkedin: "https://www.linkedin.com/in/kartik-shinde/",
          },
        },
        {
          name: "Abhilash Reddy",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: abhilash,
          social: {
            linkedin: "https://www.linkedin.com/in/v-abhilash-reddy-8658ab186/",
          },
        },
        {
          name: "Kamal Kaushik",
          year: "2021-22",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: kamal,
          social: {
            linkedin: "https://www.linkedin.com/in/kamal-kaushik-varanasi/",
          },
        },
        {
          name: "Ananya Singh",
          year: "2021-22",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: ananya,
          social: {
            linkedin: "https://www.linkedin.com/in/ananyasingh06/",
          },
        },
        {
          name: "Gopikrishnan Nair",
          year: "2020-21",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: gopi,
          social: {
            linkedin: "https://www.linkedin.com/in/nairgk/",
          },
        },
        {
          name: "Pawan Tiwari",
          year: "2020-21",
          position: "IIT Patna",
          caption: "Coding my way to success, one bug at a time.",
          image: pawan,
          social: {
            linkedin: "https://www.linkedin.com/in/pawan-tiwari-27023b159/",
          },
        },
      ],
    },
  };
  const captions = {
    Students: "Where the struggle is real, but so are the dreams!",
    Ongoing: "One step closer to graduation... hopefully!",
    Graduated: "Officially out of the student life—now what?",
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <p className="text-gray-500 italic">{captions.Students}</p>
      </div>
      <div className="flex justify-center gap-4 my-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Ongoing"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedCategory("Ongoing")}
        >
          Ongoing
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === "Graduated"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedCategory("Graduated")}
        >
          Graduated
        </button>
      </div>
      <p className="text-center text-gray-500 italic">
        {captions[selectedCategory]}
      </p>
      {Object.entries(studentsData[selectedCategory]).map(
        ([category, students]) => (
          <div key={category} className="mt-4">
            <h3 className="text-lg font-medium">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {students.map((student, index) => (
                <div key={index} className="border p-4 rounded-lg shadow">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-36 h-36 rounded-lg mx-auto object-cover"
                  />
                  <div className="flex justify-center items-center mt-2">
                    <h4 className="text-lg font-semibold">{student.name}</h4>
                    {student.social?.linkedin && (
                      <a
                        href={student.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:underline"
                      >
                        <Linkedin className="w-5 h-5 inline" />
                      </a>
                    )}
                  </div>
                  <p className="text-center text-gray-600">
                    {student.position}
                  </p>
                  <p className="text-center text-gray-500">
                    {" "}
                    AY {student.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Students;


