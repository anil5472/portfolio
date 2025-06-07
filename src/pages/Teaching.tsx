import React, { useState } from 'react';
import { Users } from 'lucide-react';

const ugCourses = [
  {
    code: "CE324",
    name: "Transportation Engineering",
    syllabus: "https://example.com/cs101-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs101-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs101-lec2" }
    ]
  },
  {
    code: "CE318",
    name: "Construction Planning and Management",
    syllabus: "https://example.com/cs102-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs102-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs102-lec2" }
    ]
  },
  {
    code: "CE491",
    name: "Design Studio",
    syllabus: "https://example.com/cs103-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs103-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs103-lec2" }
    ]
  },
  {
    code: "CE213",
    name: "Fluid Mechanics",
    syllabus: "https://example.com/cs104-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs104-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs104-lec2" }
    ]
  },
  {
    code: "CE292",
    name: "Transportation Engineering Laboratory",
    syllabus: "https://example.com/cs104-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs104-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs104-lec2" }
    ]
  }
];

const pgCourses = [
  {
    code: "CE543",
    name: "Traffic Engineering and Highway Safety",
    syllabus: "https://example.com/cs501-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs501-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs501-lec2" }
    ]
  },
  {
    code: "CE554",
    name: "Traffic Flow Theory",
    syllabus: "https://example.com/cs502-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs502-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs502-lec2" }
    ]
  },
  {
    code: "CE507",
    name: "Civil Engineering Design - I",
    syllabus: "https://example.com/cs502-syllabus",
    materials: [
      { title: "Lecture 1", link: "https://example.com/cs502-lec1" },
      { title: "Lecture 2", link: "https://example.com/cs502-lec2" }
    ]
  }
];

function Teaching() {
  const [activeCourse, setActiveCourse] = useState(null);
  const [showUGCourses, setShowUGCourses] = useState(true); // State for toggling between UG and PG courses

  const toggleCourse = (course) => {
    setActiveCourse(activeCourse === course ? null : course);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
            <Users className="h-8 w-8 mr-2 text-indigo-600" /> Teaching
          </h2>
        </div>

        {/* Buttons for toggling between UG and PG courses */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => setShowUGCourses(true)}
            className={`px-6 py-2 font-semibold text-white ${showUGCourses ? 'bg-indigo-600' : 'bg-gray-400'} rounded`}
          >
            UG Courses
          </button>
          <button
            onClick={() => setShowUGCourses(false)}
            className={`px-6 py-2 font-semibold text-white ${!showUGCourses ? 'bg-indigo-600' : 'bg-gray-400'} rounded`}
          >
            PG Courses
          </button>
        </div>

        {/* Displaying courses based on the selected section */}
        <div className="mt-12">
          {showUGCourses ? (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Undergraduate Courses</h3>
              <div className="space-y-8">
                {ugCourses.map((course, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                    <h4 className="text-xl font-semibold">
                      <button
                        onClick={() => toggleCourse(course)}
                        className="text-indigo-600 hover:underline focus:outline-none"
                      >
                        {course.code}: {course.name}
                      </button>
                    </h4>
                    <p className="text-gray-600 mt-2">
                      <a href={course.syllabus} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        Course Syllabus
                      </a>
                    </p>
                    {activeCourse === course && (
                      <div className="mt-4 p-4 border rounded bg-gray-100">
                        <h5 className="font-medium text-gray-700">Course Materials:</h5>
                        <ol className="mt-2 list-decimal list-inside text-gray-600">
                          {course.materials.map((material, idx) => (
                            <li key={idx}>
                              <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                {material.title}
                              </a>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Postgraduate Courses</h3>
              <div className="space-y-8">
                {pgCourses.map((course, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                    <h4 className="text-xl font-semibold">
                      <button
                        onClick={() => toggleCourse(course)}
                        className="text-indigo-600 hover:underline focus:outline-none"
                      >
                        {course.code}: {course.name}
                      </button>
                    </h4>
                    <p className="text-gray-600 mt-2">
                      <a href={course.syllabus} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        Course Syllabus
                      </a>
                    </p>
                    {activeCourse === course && (
                      <div className="mt-4 p-4 border rounded bg-gray-100">
                        <h5 className="font-medium text-gray-700">Course Materials:</h5>
                        <ol className="mt-2 list-decimal list-inside text-gray-600">
                          {course.materials.map((material, idx) => (
                            <li key={idx}>
                              <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                {material.title}
                              </a>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Teaching;
