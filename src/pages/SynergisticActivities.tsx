import React, { useState } from 'react';
import { Users } from 'lucide-react';

const activities = {
  "Workshops Conducted": {
    "Workshops Conducted": [
      "Workshop on Applications of AI and Data Science in Transportation Engineering, 20 September 2024, IIT Patna",
      "Faculty Development Program on Basics of Transportation Engineering, Sponsored by Department of Science and Technology, Govt. of Bihar (15.93 Lakhs); Co-organizers: Dr. Sudhir Varma, Dr. Syed KK Hussaini, 14-25 July 2022", 
      "Short-Term Course on Advanced Techniques for Traffic Data Analysis, Visualization and State Estimation for Indian Cities. Sponsored by I-DAPT Hub Foundation, IIT (BHU) Varanasi; Co-organizers: Dr. Agnivesh Pani, Dr. Ankit Gupta, 20-24 Dec 2021 (Online Mode)",
      "Workshop on Intelligent Transportation Systems (ITS), 13th International Conference on COMmunication Systems & NETworkS, Bengaluru, India, 09 Jan 2021; Chair: Prof. Nagendra Velaga"
    ]
  },
  "Administrative Roles ": {
    "Institute Level": [
      "Professor In-Charge for Cultural Affairs, Jan 2024 - Jun 2024",
      "Professor In-Charge for Cultural, E-Cell and Technical Affairs, Jun 2023 - Jan 2024",
      "Professor In-Charge for Cultural Affairs, Sep 2022 - Jun 2023",
      "Professor In-Charge for NSS, Nov 2021 - Mar 2023",
      "Assoc. Professor In-Charge for 9th Convocation, Dec 2022",
      "Professor In-Charge for Landscaping, Aug 2019 - Aug 2021",
      "Institute Representative, GATE-2022, Feb 2022",
      "Institute Representative, JEE (Adv.)-2022, Aug 2022",
      "Institute Representative, JEE (Adv.)-2021, Sep 2021",
      "Institute Representative, JEE (Adv.)-2020, Sep 2020",
      "JoSAA Document Verification Committee, 2021, 2022, and 2023"
    ],
    "Department Level": [
      "Faculty Advisor for B.Tech in CE 2024-28 batch",
      "Lab In-Charge, Transportation Engineering Specialization, Mar 2023 - till date",
      "Member, Department Academic Programme Committee, Sep 2020 - till date",
      "Faculty In-Charge, ASCE Student Chapter IIT Patna, Sep 2022 - till date",
      "Faculty Selection Committee, Dec 2021 - Jun 2022",
      "Shortlisting Committee for Staff Recruitment (JTS and JM), Aug 2023",
      "Faculty In-Charge, Association of Civil Engineers (ACE), Nov 2020 - Feb 2023",
      "In-Charge for Faculty Meeting, Mar 2021 - Feb 2023",
      "PhD Coordinator, Jul 2022 - Jan 2023",
      "Faculty Advisor for M. Tech in CE, 2020-22 batch",
      "Member, Department Purchase Committee, May 2020 - May 2022"
    ],
    "Others": [
      "Post Graduate level department coordinator in CEA Research Expo, Civil Engineering Association, Department of Civil Engineering, IIT Madras, Jul 2014-Jul 2016",
      "Post Graduate level department coordinator in Mentoring for Individual TRansformation (MITR), Department of Civil Engineering, IIT Madras, Jul 2015-Jul 2016",
      "Technical Affairs Secretary for Cauvery Hostel, IIT Madras, Jul 2015-Jul 2016",
      "Volunteer in Civil Engineering Association, Department of Civil Engineering, IIT Madras, March 2014"
      ]
  },
  "Editorial Boards": {
    "Editorial Board Member": [
      "Scientific Reports, Nature Publishing Group",
      "Discover Civil Engineering, Springer Nature"
    ],
    "Review & Peer Review Activities": [
      "Reviewer - IEEE Transactions on Intelligent Transportation Systems; Journal of Intelligent Transportation Systems; IEEE Access; IEEE/CAA Journal of Automatica Sinica; IET Intelligent Transport Systems; Journal of Urban Planning and Development; Sustainable Cities and Society; Transportation Letters: The International Journal of Transportation Research; Transportation Research Record; Transportation in Developing Economies; Journal of Transport Geography; Journal of The Institution of Engineers (India): Series A.",
      "Reviewer (Conferences) - IEEE Conference on Intelligent Transportation Systems (ITSC); Conference of the Transportation Research Group of India (CTRG); Transportation Planning and Implementation Methodologies for Developing Countries (TPMDC); Transportation Research Board"
    ]
  },
  "Invited Talks": {
    "Guest Lectures & Webinars": [
      "Invited Speaker - Dynamic Bus Scheduling Strategies for Indian Cities 2nd Jan 2023, CBIT, Hyderabad",
      "Invited Speaker - Dynamic Bus scheduling based on Real time demand and travel time, Recent advancements leading to safe, sustainable and efficient transportation systems, Thiagarajar College of Engineering, Nov 24-26, 2021, Madurai.",
      "Invited Speaker: Applications of Machine Learning for Efficient Public Transit Systems in Online Faculty Development Programme On Emerging Transportation Technologies For Sustainable Smart Cities, Thiagarajar College of Engineering, Madurai, Nov 24-26, 2021",
      "Invited Speaker: AI & ML for Efficient Public Transit Systems in Faculty Development Program on Artificial Intelligence in REAL LIFE, PESITM, Shivamogga, Aug 30 - Sep 06, 2021",
      "Invited Speaker: Empirical to Theory based Modelling of Indian Traffic in International Conference on Contemporary and Sustainable Infrastructure, SJB Institute of Technology, Bengaluru, India. 22 May 2021.",
      "Invited Speaker: Public Transit and its Role in Urban Mobility in Faculty Development Program on Urban Mobility: Challenges & Opportunities, TKM College of Engineering, Kollam, Kerala, India. 08-14 September 2020",
      "Webinar: Deep Learning – Just Data or Domain Knowledge adds Value?in Webinar Series of Transportation Research Group of India. 22 May 2020",
      "Invited Speaker: Macroscopic Modeling Concepts and Applications”, AICTE Short Term Training Programme (STTP) on Modeling and Control of Traffic under Mixed Conditions, IIT Madras, Chennai, India. 01-07 December 2019"
    ],
    "Panel Discussions": [
      "Panel Member-Workshop on Naturalistic Driving Studies: Progress and Prospects, IIT Jammu, 30-31 Aug 2024.",
      "Panel Member- IPCC AR6 WGIII Report: Highlights & Implications for India and Bihar, 4th May 2022."
    ]
  },
  "Organizing/Technical Committees": {
    "Workshops & Conferences": [
      "Technical Advisory Committee: 1st International Conference on Innovations and Sustainability in Civil Engineering: Shaping Tomorrow’s Infrastructure (ISCESTI’25), NIT Patna, May 2025",
      "Organizing committee: International Conference on Advances in Structural and Geotechnical Engineering (ASAGE’25), IIT Patna, Feb 2025", 
      "Technical Committee in CTSEM 2025, MANIT Bhopal, Jul 2025",
      "Program Committee - 17th COMSNETS: ADVnet Workshop, Bengaluru, India, 06 Jan 2025",
      "Program Committee - CTRG 2023",
      "Co-Chair for Technical Committees of TRG (TCT-H01): Emerging travel technologies (ITS and IOT), 2022-2026",
      "Advisory Committee - International Web Conference in Civil Engineering for a Sustainable Planet (ICCESP-2021), TKM College of Engineering, Kerala.",
      "Program Committee - 12th COMSNETS: ITS Workshop, Bengaluru, India, 2020",
      "Program Committee - 11th COMSNETS: ITS Workshop, Bengaluru, India, 2019"
    ]
  }
};

function SynergisticActivities() {
  const categories = Object.keys(activities);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to first category

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
            <Users className="h-8 w-8 mr-2 text-indigo-600" /> Synergistic Activities
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-semibold rounded ${
                activeCategory === category ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Activity List */}
        <div className="mt-12 text-left">
          {Object.keys(activities[activeCategory]).map((section) => (
            <div key={section} className="mt-6">
              <h3 className="text-xl font-semibold text-indigo-700">{section}</h3>
              <ol className="list-decimal pl-6 text-gray-800 text-lg">
                {activities[activeCategory][section].map((activity, index) => (
                  <li key={index} className="mt-2 pl-2">
                    {activity}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SynergisticActivities;
