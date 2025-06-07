import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Calendar, Facebook, Instagram, Clock } from 'lucide-react';

function Contact() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-3 text-lg text-gray-600">
            Feel free to reach out for research collaborations, academic inquiries, or discussions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-700 font-medium">anilkumar@iitp.ac.in</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600" />
                <span className="ml-3 text-gray-700 font-medium">+91-6115-233-785</span>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <span className="ml-3 text-gray-700 font-medium">
                  Room No. 217, Block 6<br />
                  Department of Civil and Environmental Engineering<br />
                  Indian Institute of Technology Patna<br />
                  Bihta, Patna - 801106, Bihar, India
                </span>
              </div>

              <div className="mt-4">
                <a 
                  href="https://www.google.com/maps/place/Department+Of+Civil+Engineering,+IITP/@25.5339059,84.8509266,20.75z/data=!4m6!3m5!1s0x398d567bcdf9491d:0xfcfac8945a5344cf!8m2!3d25.5337825!4d84.8509127!16s%2Fg%2F11dzd3d3z7?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 font-medium hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/anilkumar-bachu/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Linkedin className="h-7 w-7" />
                </a>
                <a href="https://github.com/anil5472" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Github className="h-7 w-7" />
                </a>
                <a href="https://x.com/anilkumar08689" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Twitter className="h-7 w-7" />
                </a>
                <a href="https://www.facebook.com/anilkumar.bachu.547" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="https://www.instagram.com/anilbachuk/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Instagram className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Meet Me Section with Google Calendar */}
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl shadow-md p-8 border border-gray-200 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-indigo-600 mr-2" /> Meet Me
            </h3>

            <p className="text-gray-700 text-center text-md mb-6">
              I am happy to connect! Let's discuss ideas, research, and collaborations.
              Check my calendar below.
            </p>

            {/* Google Calendar Embed */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md border border-gray-300 mt-6">
              <iframe
                src="https://calendar.google.com/calendar/u/0?cid=cmFnaGF2YTU0N0BnbWFpbC5jb20"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>

            <p className="mt-4 text-gray-600 text-sm text-center">
              Let us Catchup !!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
