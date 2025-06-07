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
import gopi from "../assets/gopi.jpg";
import pawan from "../assets/pawan.jpg";

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
      ],
      MTech: [
        {
          name: "Vibhuti Bhushan Singh",
          year: "2025-2026",
          position: "IIT Patna",
          caption: "Trying to finish my thesis before AI takes my job.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/sophiajohnson",
          },
        },
      ],
      BTech: [
        {
          name: "Abhay Pratap",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/danielbrown",
          },
        },
        {
          name: "Satvik Singh Chauhan",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/danielbrown",
          },
        },
        {
          name: "Rohit Kumawat",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/danielbrown",
          },
        },
        {
          name: "Kushboo Kumari",
          year: "2025-26",
          position: "IIT Patna",
          caption: "Dreaming in algorithms and debugging in reality.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/oliviawilson",
          },
        },
      ],
    },
    Graduated: {
      PhD: [],
      MTech: [
        {
          name: "Priyanka Kumari",
          year: "2024-2026",
          position: "IIT Patna",
          caption: "Trying to finish my thesis before AI takes my job.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/sophiajohnson",
          },
        },
        {
          name: "Krishanu Prakash",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/liammartinez",
          },
        },
        {
          name: "Anuj Kumar",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/liammartinez",
          },
        },
        {
          name: "Rishav Jaiswal",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/liammartinez",
          },
        },
        {
          name: "Piyush Kumar Pandey",
          year: "2021-22",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/liammartinez",
          },
        },
        {
          name: "Brajesh Kumar Dubey",
          year: "2020-21",
          position: "IIT Patna",
          caption: "Turning ideas into reality with code.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/liammartinez",
          },
        },
        {
          name: "Chaitra Pranesh",
          year: "2018-19",
          position: "NTU Singapore",
          caption: "Turning ideas into reality with code.",
          image: chaitra,
          social: {
            linkedin: "https://linkedin.com/in/liammartinez",
          },
        },
        {
          name: "Aakash Kumar Narayanan",
          year: "2018-19",
          position: "NTU Singapore",
          caption: "Making sense of data, one model at a time.",
          image: aakash,
          social: {
            linkedin: "https://linkedin.com/in/emmadavis",
          },
        },
      ],
      BTech: [
        {
          name: "Shriyansh Sinha",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/danielbrown",
          },
        },
        {
          name: "Devansh Rai",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/danielbrown",
          },
        },
        {
          name: "Pranav Shajan Chandhirathil",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Building the future one line of code at a time.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/danielbrown",
          },
        },
        {
          name: "Prince Kumar Singh",
          year: "2024-25",
          position: "IIT Patna",
          caption: "Dreaming in algorithms and debugging in reality.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/oliviawilson",
          },
        },
        {
          name: "Abhinav Singh",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Mukul",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Madhur Garg",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Dhangar Neha Rani",
          year: "2023-24",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: sample,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Hardik Arora",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: hardik,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Gaurav Chaudhary",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: gaurav,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Kartik Shinde",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: kartik,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Abhilash Reddy",
          year: "2022-23",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: abhilash,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Kamal Kaushik",
          year: "2021-22",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: kamal,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Ananya Singh",
          year: "2021-22",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: kamal,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Gopikrishnan Nair",
          year: "2020-21",
          position: "IIT Patna",
          caption: "Passionate about AI and machine learning.",
          image: gopi,
          social: {
            linkedin: "https://linkedin.com/in/noahgarcia",
          },
        },
        {
          name: "Pawan Tiwari",
          year: "2020-21",
          position: "IIT Patna",
          caption: "Coding my way to success, one bug at a time.",
          image: pawan,
          social: {
            linkedin: "https://linkedin.com/in/avarodriguez",
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
                    className="w-24 h-24 rounded-lg mx-auto object-cover"
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
