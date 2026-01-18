import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const journalPublications = [
  {
    "authors": "Kumar, B.A., S. Mothukuri, L. Vanajakshi and S.C. Subramanian",
    "title": "Analytical Approach to Identify the Optimum Inputs for a Bus Travel Time Prediction Method",
    "year": "2015",
    "journal": "Transportation Research Record: Journal of the Transportation Research Board",
    "volume": "2535",
    "pages": "25-34",
    "link": "https://doi.org/10.3141/2535-03"
  },
  {
    "authors": "Reddy, K.K., B.A. Kumar and L. Vanajakshi",
    "title": "Bus Travel Time Prediction under High Variability Conditions",
    "year": "2016",
    "journal": "Current Science, Indian Academy of Sciences",
    "volume": "111(4)",
    "pages": "700-711",
    "link": "https://doi.org/10.18520/cs/v111/i4/700-711"
  },
  {
    "authors": "Dhivyabharathi, B., B.A. Kumar, L. Vanajakshi and M. Panda",
    "title": "Particle Filter for Reliable Bus Travel Time Prediction under Indian Traffic Conditions",
    "year": "2017",
    "journal": "Transportation in Developing Economies: A Journal of the Transportation Research Group of India",
    "volume": "3(13)",
    "pages": "",
    "link": "https://doi.org/10.1007/s40890-017-0043-z"
  },
  {
    "authors": "Behera, R., B.A. Kumar and L. Vanajakshi",
    "title": "Real Time Identification of Inputs for a BATP Systems using Data Analytics",
    "year": "2017",
    "journal": "International Journal of Civil Engineering",
    "volume": "15(8)",
    "pages": "1173-1185",
    "link": "https://doi.org/10.1007/s40999-017-0210-y"
  },
  {
    "authors": "Kumar, B.A., V. Kumar, L. Vanajakshi and S.C. Subramanian",
    "title": "Performance Comparison of Data Driven and Less Data Demanding Techniques for Bus Travel Time Prediction",
    "year": "2017",
    "journal": "European Transport",
    "volume": "65(9)",
    "pages": "",
    "link": ""
  },
  {
    "authors": "Kumar, B.A., R. Jairam, L. Vanajakshi and S. Arkatkar",
    "title": "Real Time Bus Travel Time Prediction using k-NN Classifier",
    "year": "2017",
    "journal": "Transportation Letters: The International Journal of Transportation Research",
    "volume": "11(7)",
    "pages": "362-372",
    "link": "https://doi.org/10.1080/19427867.2017.1366120"
  },
  {
    "authors": "Kumar, B.A., L. Vanajakshi and S.C. Subramanian",
    "title": "Pattern-Based Time-Discretized Method for Bus Travel Time Prediction",
    "year": "2017",
    "journal": "Journal of Transportation Engineering, Part A: Systems, ASCE",
    "volume": "143(6)",
    "pages": "04017012:1-15",
    "link": "https://doi.org/10.1061/JTEPBS.0000029"
  },
  {
    "authors": "Kumar, B.A., L. Vanajakshi and S.C. Subramanian",
    "title": "Bus Travel Time Prediction using a Time-Space Discretization Approach",
    "year": "2017",
    "journal": "Transportation Research Part-C: Emerging Technologies",
    "volume": "79",
    "pages": "308-332",
    "link": "https://doi.org/10.1016/j.trc.2017.04.002"
  },
  {
    "authors": "Kumar, B.A., L. Vanajakshi and S.C. Subramanian",
    "title": "A Hybrid Model Based Method for Bus Travel Time Estimation",
    "year": "2018",
    "journal": "Journal of Intelligent Transportation Systems: Technology, Planning and Operations",
    "volume": "22(5)",
    "pages": "390-406",
    "link": "https://doi.org/10.1080/15472450.2017.1378102"
  },
  {
    "authors": "Jairam, R., B.A. Kumar, S. Arkatkar and L. Vanajakshi",
    "title": "Performance Comparison of Bus Travel Time Prediction Models across Indian Cities",
    "year": "2018",
    "journal": "Transportation Research Record: Journal of the Transportation Research Board",
    "volume": "2672(31)",
    "pages": "87-98",
    "link": "https://doi.org/10.1177/0361198118770175"
  },
  {
    "authors": "Achar, A., D. Bharathi, B.A. Kumar and L. Vanajakshi",
    "title": "Bus Arrival Time Prediction: A Spatial Kalman Filter Approach",
    "year": "2019",
    "journal": "IEEE Transactions on Intelligent Transportation Systems",
    "volume": "21(3)",
    "pages": "1298-1307",
    "link": "https://doi.org/10.1109/TITS.2019.2909314"
  },
  {
    "authors": "Kumar, B.A., H. Prasath and L. Vanajakshi",
    "title": "Dynamic Bus Scheduling based on Real-Time Demand and Travel Time",
    "year": "2019",
    "journal": "International Journal of Civil Engineering,",
    "volume": "",
    "pages": "1-9",
    "link": "https://doi.org/10.1007/s40999-019-00445-y"
  },
  {
    "authors": "Dhivyabharathi, B., B.A. Kumar, L. Vanajakshi and A. Achar",
    "title": "Bus Arrival Time Prediction using Log-normal Auto-Regressive (AR) Modelling",
    "year": "2020",
    "journal": "Transportmetrica A: Transport Science",
    "volume": "16(3)",
    "pages": "807-839",
    "link": "https://doi.org/10.1080/23249935.2020.1720864"
  },
  {
    "authors": "Kumar, B.A., S. Mothukuri and L. Vanajakshi",
    "title": "Numerical Stability of Conservation Equation for Bus Travel Time Prediction using Automatic Vehicle Location Data",
    "year": "2020",
    "journal": "International Journal of Intelligent Transportation Systems Research",
    "volume": "19",
    "pages": "141–154",
    "link": "https://doi.org/10.1007/s13177-020-00230-5"
  },
  {
    "authors": "Kumar, B.A., R. Gracious, C. Gangrade and L. Vanajakshi",
    "title": "City Level Route Planning with Time Dependent Networks",
    "year": "2020",
    "journal": "Current Science, Indian Academy of Sciences",
    "volume": "119(4)",
    "pages": "680-690",
    "link": "https://doi.org/10.18520/cs/v119/i4/680-690"
  },
  {
    "authors": "Gracious, R., B.A. Kumar and L. Vanajakshi",
    "title": "Characterizing Bus Travel Time using Big Data Visualization Techniques",
    "year": "2021",
    "journal": "Transportation in Developing Economies: A Journal of the Transportation Research Group of India",
    "volume": "7(1)",
    "pages": "",
    "link": "https://doi.org/10.1007/s40890-020-00109-w"
  },
  {
    "authors": "Shalayar, A.K., B.A. Kumar and L. Vanajakshi",
    "title": "Analysis of Global Positioning System based Bus Travel Time Data and its use for Advanced Public Transportation System Applications",
    "year": "2021",
    "journal": "Journal of Intelligent Transportation Systems: Technology, Planning and Operations",
    "volume": "25(1)",
    "pages": "58-76",
    "link": "https://doi.org/10.1080/15472450.2020.1754818"
  },
  {
    "authors": "Nithishwer, M.A., B.A. Kumar, and L. Vanajakshi",
    "title": "Deep Learning - Just Data or Domain Related Knowledge adds Value?: Bus Travel Time Prediction as a Case Study",
    "year": "2021",
    "journal": "Transportation Letters: The International Journal of Transportation Research",
    "volume": "14(8)",
    "pages": "863–873",
    "link": "https://doi.org/10.1080/19427867.2021.1952042"
  },
  {
    "authors": "Kumar, B.A., K.K. Reddy and L. Vanajakshi",
    "title": "Bus Travel Time Prediction using Support Vector Machines for High Variance Conditions",
    "year": "2021",
    "journal": "Transport",
    "volume": "36(3)",
    "pages": "221-234",
    "link": "https://doi.org/10.3846/transport.2021.15220"
  },
  {
    "authors": "Gracious, R., B.A. Kumar and L. Vanajakshi",
    "title": "Performance Evaluation of Passenger Information Systems",
    "year": "2022",
    "journal": "Transportation in Developing Economies: A Journal of the Transportation Research Group of India",
    "volume": "8(4)",
    "pages": "",
    "link": "https://doi.org/10.1007/s40890-021-00140-5"
  },
  {
    "authors": "Nair, G.K., B.A. Kumar and L. Vanajakshi",
    "title": "Mapping Bus and Stream Travel Time using Machine Learning Approaches",
    "year": "2022",
    "journal": "Journal of Advanced Transportation",
    "volume": "2022",
    "pages": "Article ID 9743070",
    "link": "https://doi.org/10.1155/2022/9743070"
  },
  {
    "authors": "Achar, A., A. Natarajan, R. Regikumar and B.A. Kumar",
    "title": "Predicting Public Transit Arrival: A Nonlinear Approach",
    "year": "2022",
    "journal": "Transportation Research Part-C: Emerging Technologies",
    "volume": "144",
    "pages": "103875",
    "link": "https://doi.org/10.1016/j.trc.2022.103875"
  },
  {
    "authors": "Banik, S., B.A. Kumar and L. Vanajakshi",
    "title": "Stream Travel Time Reliability using GPS Equipped Probe Vehicles",
    "year": "2022",
    "journal": "Current Science, Indian Academy of Sciences",
    "volume": "123(9)",
    "pages": "1107-1116",
    "link": "https://doi.org/10.18520/cs/v123/i9/1107-1116"
  },
  {
    "authors": "Singh, A., S. Banik, B.A. Kumar, L. Vanajakshi and L. Rilett",
    "title": "Impact of COVID-19 related Travel Restrictions on the Environment and Travel Time Reliability",
    "year": "2023",
    "journal": "ASCE Journal of Transportation Engineering, Part A: Systems",
    "volume": "149(7)",
    "pages": "05023002",
    "link": "https://doi.org/10.1061/JTEPBS.TEENG-7290"
  },
  {
    "authors": "Kushwaha, A.K. and B.A. Kumar",
    "title": "Rule Based First Principles Approach to Identify Safe/Unsafe Behavior of Two-Wheeler Drivers under Mixed Traffic Conditions",
    "year": "2023",
    "journal": "IEEE Access",
    "volume": "11",
    "pages": "31541-31548",
    "link": "https://doi.org/10.1109/ACCESS.2023.3262292"
  },
  {
    "authors": "Kushwaha, A.K., K. Shinde, and B.A. Kumar",
    "title": "Fuzzy Probabilistic Approach to Identify Driving Behaviour of Two-Wheeler Drivers under Mixed Traffic Conditions",
    "year": "2024",
    "journal": "IEEE Access",
    "volume": "12",
    "pages": "76169-76179",
    "link": "https://doi.org/10.1109/ACCESS.2024.3406195"
  },
  {
    "authors": "Kumar, B.A., G. Chandana, and L. Vanajakshi",
    "title": "Travel Time Reliability Prediction Using Quantile Random Forest Regression",
    "year": "2025",
    "journal": "Transportation in Developing Economies: A Journal of the Transportation Research Group of India (In Press)"
  },
  {
    "authors": "Kumar, B.A., R. Singh, H.E. Shaji, and L. Vanajakshi",
    "title": "Bus Arrival Time Prediction: A Comprehensive Review",
    "year": "2025",
    "journal": "Transactions on Intelligent Transportation Systems",
    "link": "https://doi.org/10.1109/TITS.2025.3545695"
  },
  {
    "authors": "Kumar, B.A., R. Singh, H.E. Shaji, and L. Vanajakshi",
    "title": "Bus Arrival Time Prediction: A Comprehensive Review",
    "year": "2025",
    "journal": "Transactions on Intelligent Transportation Systems",
    "link": "https://doi.org/10.1109/TITS.2025.3545695"
  },
  {
    "authors": "Kumar, B.A., R. Singh, H.E. Shaji, and L. Vanajakshi",
    "title": "Bus Arrival Time Prediction: A Comprehensive Review",
    "year": "2025",
    "journal": "Transactions on Intelligent Transportation Systems",
    "link": "https://doi.org/10.1109/TITS.2025.3545695"
  },
  {
    "authors": "Kumar, B.A., R. Singh, H.E. Shaji, and L. Vanajakshi",
    "title": "Bus Arrival Time Prediction: A Comprehensive Review",
    "year": "2025",
    "journal": "Transactions on Intelligent Transportation Systems",
    "link": "https://doi.org/10.1109/TITS.2025.3545695"
  },
  {
    "authors": "Kumar, B.A., R. Singh, H.E. Shaji, and L. Vanajakshi",
    "title": "Bus Arrival Time Prediction: A Comprehensive Review",
    "year": "2025",
    "journal": "Transactions on Intelligent Transportation Systems",
    "link": "https://doi.org/10.1109/TITS.2025.3545695"
  }
]


const conferenceProceedings = [
    {
    "authors": "Kumar, B.A., L. Vanajakshi and S.C. Subramanian",
    "title": "Day-Wise Travel Time Pattern Analysis under Heterogeneous Traffic Conditions",
    "conference": "2nd Conference of the Transportation Research Group of India",
    "location": "Agra, India",
    "date": "12-15 December 2013"
  },
  {
    "authors": "Kumar, B.A., L. Vanajakshi and S.C. Subramanian",
    "title": "Pattern-Based Bus Travel Time Prediction under Heterogeneous Traffic Conditions",
    "conference": "93rd Annual Meeting of Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "12-16 January 2014"
  },
  {
    "authors": "Kumar, B.A., L. Vanajakshi and S.C. Subramanian",
    "title": "Pattern-Based Spatial Formulation for Bus Travel Time Prediction under Mixed Traffic Conditions",
    "conference": "Colloquium on Transportation Systems Engineering and Management",
    "location": "National Institute of Technology Calicut, Calicut, India",
    "date": "12-13 May 2014"
  },
  {
    "authors": "Kumar, V., B.A. Kumar, L. Vanajakshi and S.C. Subramanian",
    "title": "Comparison of Model based and Machine Learning Approaches for Bus Travel Time Prediction",
    "conference": "93rd Annual Meeting of Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "12-16 January 2014"
  },
  {
    "authors": "Kumar, B.A., S. Mothukuri, L. Vanajakshi and S.C. Subramanian",
    "title": "A Spatio-Temporal Discretization Approach for Real Time Bus Travel Time Prediction Using A Linear Traffic Model",
    "conference": "11th Transportation Planning and Implementation Methodologies for Developing Countries",
    "location": "Indian Institute of Technology Bombay, Mumbai, India",
    "date": "10-12 December 2014"
  },
  {
    "authors": "Kumar, B.A., S. Mothukuri, L. Vanajakshi and S.C. Subramanian",
    "title": "Analytical Approach to Identify the Optimum Inputs for a Bus Travel Time Prediction Method",
    "conference": "94th Annual Meeting of Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "11-15 January 2015"
  },
  {
    "authors": "Dhivyabharathi, B., B.A. Kumar, L. Vanajakshi and M. Panda",
    "title": "Particle Filter for Reliable Bus Travel Time Prediction under Indian Traffic Conditions",
    "conference": "3rd Conference of the Transportation Research Group of India",
    "location": "Kolkata, India",
    "date": "17-20 December 2015"
  },
  {
    "authors": "Reddy, K.K., B.A. Kumar and L. Vanajakshi",
    "title": "Bus Travel Time Prediction using Support Vector Machines",
    "conference": "3rd Conference of the Transportation Research Group of India",
    "location": "Kolkata, India",
    "date": "17-20 December 2015"
  },
  {
    "authors": "Reddy, J.K.K., B.A. Kumar and L. Vanajakshi",
    "title": "Bus Travel Time Prediction using Support Vector Machines for High Variance Conditions",
    "conference": "95th Annual Meeting of Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "07-11 January 2016"
  },
  {
    "authors": "Kumar, B.A. and L. Vanajakshi",
    "title": "Use of Data Mining for Improved Bus Travel Time Prediction",
    "conference": "4th CEW, TU Delft",
    "location": "Delft, The Netherlands",
    "date": "29 Jun - 1 Jul 2016"
  },
   {
    "authors": "Dhivyabharathi, B., B.A. Kumar and L. Vanajakshi",
    "title": "Real Time Bus Arrival Time Prediction System under Indian Traffic Condition",
    "conference": "2016 IEEE International Conference on Intelligent Transportation Engineering (ICITE)",
    "location": "Nanyang Technological University, Singapore",
    "date": "2016",
    "doi": "10.1109/ICITE.2016.7581300"
  },
  {
    "authors": "Kumar, B.A., V. Kumar, K.K. Reddy, L. Vanajakshi and S.C. Subramanian",
    "title": "Bus Travel Time Prediction using Machine Learning Approaches",
    "conference": "Indo-US Workshop on Big Data Analysis for Transportation Engineering Systems",
    "location": "Indian Institute of Technology Madras, Chennai, India",
    "date": "05-06 December 2016"
  },
  {
    "authors": "Jairam, R., B.A. Kumar, S. Arkatkar and L. Vanajakshi",
    "title": "Performance Comparison of Bus Travel Time Prediction Models across Indian Cities",
    "conference": "97th Annual Meeting of the Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "07-11 January 2018"
  },
  {
    "authors": "Sashank, Y., A.N. Navali, A.B. Prakash, B.A. Kumar and L. Vanajakshi",
    "title": "Calibration of SUMO for Indian Heterogeneous Traffic Conditions",
    "conference": "Recent Advances in Traffic Engineering",
    "location": "Sardar Vallabhbhai National Institute of Technology, Surat, India",
    "date": "09-11 August 2018"
  },
  {
    "authors": "George, R., B.A. Kumar, L. Vanajakshi and S.C. Subramanian",
    "title": "Traffic Density Estimation under Lane Indisciplined Conditions using Strips along the Road Width",
    "conference": "11th International Conference on COMmunication Systems & NETworkS: Intelligent Transportation Systems Workshop",
    "location": "Bengaluru, India",
    "date": "07-11 January 2019"
  },
  {
    "authors": "Kumar, B.A., H. Prasath and L. Vanajakshi",
    "title": "Demand and Travel Time Responsive Real-Time Bus Scheduling",
    "conference": "98th Annual Meeting of the Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "13-17 January 2019"
  },
  {
    "authors": "Achar, A., R. Regikumar and B.A. Kumar",
    "title": "Dynamic Bus Arrival Time Prediction Exploiting Non-linear Correlations",
    "conference": "2019 International Joint Conference on Neural Networks (IJCNN)",
    "location": "Budapest, Hungary",
    "date": "14-19 July 2019",
    "doi": "10.1109/IJCNN.2019.8852358"
  },
  {
    "authors": "Narayanan, A., C. Pranesh, S. Nagavarapu, B.A. Kumar and J. Dauwles",
    "title": "Data-driven Models for Short-term Travel Time Prediction",
    "conference": "2019 22nd IEEE Intelligent Transportation Systems Conference (ITSC 2019)",
    "location": "Auckland, New Zealand",
    "date": "27-30 October 2019",
    "doi": "10.1109/ITSC.2019.8917456"
  },
  {
    "authors": "Kumar, B.A., A. Achar, Dhivyabharathi and L. Vanajakshi",
    "title": "A Seasonal Modelling Approach Capturing Spatio-Temporal Correlations for Dynamic Bus Travel Time Prediction",
    "conference": "2019 22nd IEEE Intelligent Transportation Systems Conference (ITSC 2019)",
    "location": "Auckland, New Zealand",
    "date": "27-30 October 2019",
    "doi": "10.1109/ITSC.2019.8917055"
  },
  {
    "authors": "Gracious, R., B.A. Kumar and L. Vanajakshi",
    "title": "Characterizing Bus Travel Time using Big Data Visualization Techniques",
    "conference": "5th Conference of the Transportation Research Group of India",
    "location": "Bhopal, India",
    "date": "18-21 December 2019"
  },
  {
    "authors": "Gracious, R., B.A. Kumar and L. Vanajakshi",
    "title": "Performance Evaluation of Passenger Information Systems",
    "conference": "5th Conference of the Transportation Research Group of India",
    "location": "Bhopal, India",
    "date": "18-21 December 2019"
  },
  {
    "authors": "Nithishwer, M., B.A. Kumar and L. Vanajakshi",
    "title": "Application of Deep Learning for Bus Travel Time Prediction",
    "conference": "12th International Conference on COMmunication Systems & NETworkS: Intelligent Transportation Systems Workshop",
    "location": "Bengaluru, India",
    "date": "07-11 January 2020"
  },
  {
    "authors": "Reddy, S. and B.A. Kumar",
    "title": "Travel Time Variability Analysis of Public Transit Buses using GPS Data",
    "conference": "13th International Conference on Transportation Planning and Implementation Methodologies for Developing Countries (TPMDC)",
    "location": "IIT Bombay, India",
    "date": "10-11 December 2020"
  },
  {
    "authors": "Banik, S., B.A. Kumar and L. Vanajakshi",
    "title": "Stream Travel Time Reliability using GPS Equipped Probe Vehicles",
    "conference": "100th Annual Meeting of the Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "21-29 January 2021"
  },
  {
    "authors": "Jha, M.K., N. Wanko, B.A. Kumar",
    "title": "A Machine Learning-based Active Learning Framework to Capture Risk and Uncertainty in Transportation Construction Project Scheduling",
    "conference": "Transportation Infrastructure Projects: Conception to Execution",
    "location": "IIT Roorkee, India",
    "date": "14-17 September 2022"
  },
  {
    "authors": "Pandey, P.K., H. Arora and B.A. Kumar",
    "title": "Development of Driving Cycles for Electric Buses in Patna, India",
    "conference": "8th International Conference on Models and Technologies for Intelligent Transportation Systems",
    "location": "Nice, France",
    "date": "14-16 June 2023"
  },
  {
    "authors": "Jha, M.K., D.S.K Varma, R. Jaiswal, S. Rankavat and B.A. Kumar",
    "title": "A Machine Learning Approach to Traffic Congestion Hotspot Identification and Prediction",
    "conference": "16th World Conference on Transport Research",
    "location": "Montréal, Québec, Canada",
    "date": "17-21 July 2023"
  },
  {
    "authors": "Jaiswal, R., B.A. Kumar and M.K. Jha",
    "title": "A Statistical and Machine Learning Framework for Measuring the Economic Impact of Reduced Travel due to COVID-19 in Maryland",
    "conference": "16th World Conference on Transport Research",
    "location": "Montréal, Québec, Canada",
    "date": "17-21 July 2023"
  },
  {
    "authors": "Jha, M.K., R. Jaiswal and B.A. Kumar",
    "title": "A Bi-Layered Machine Learning Model for Travel-Time Prediction along a Congested Section of I-495, USA",
    "conference": "7th Conference of Transportation Research Group of India",
    "location": "Surat, India",
    "date": "17-20 December 2023"
  },
  {
    "authors": "Jaiswal, R., M.K. Jha, and B.A. Kumar",
    "title": "Impact of COVID-19 on Roadway Travel Behavior: A Comparative Study of the States of Washington and Maryland, USA",
    "conference": "7th Conference of Transportation Research Group of India",
    "location": "Surat, India",
    "date": "17-20 December 2023"
  },
    {
    "authors": "Kushwaha, A., H. Arora, and B.A. Kumar",
    "title": "Deep Embedded Clustering Methods for Identifying Driving Safety Profiles from GPS Data",
    "conference": "103rd Annual Meeting of Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "07-11 January 2024"
  },
  {
    "authors": "Singh, A., R. Singh, A.K. Kushwaha, and B.A. Kumar",
    "title": "Detection, Classification, and Trajectory Extraction of Vehicles Under Mixed Traffic Conditions",
    "conference": "15th International Conference on Transportation Planning and Implementation Methodologies for Developing Countries (TPMDC)",
    "location": "IIT Bombay, India",
    "date": "18-20 December 2024"
  },
  {
    "authors": "Kushwaha, A., K. Prakash, and B.A. Kumar",
    "title": "Analysis of Truck Driver Behavior using Factor Analysis – A Study of Drivers from Bihar, India",
    "conference": "104th Annual Meeting of Transportation Research Board",
    "location": "Washington, D.C., USA",
    "date": "05-09 January 2025"
  },
  {
    "authors": "Kushwaha, A., M. Panchal, and B.A. Kumar",
    "title": "Driving Towards Safety: A CNN based Approach for Facial Expression Recognition and Activity Detection",
    "conference": "11th International Conference on Vehicle Technology and Intelligent Transport Systems (VEHITS)",
    "location": "Porto, Portugal",
    "date": "02-04 April 2025"
  },
  {
    "authors": "Kushwaha, A., and B.A. Kumar",
    "title": "A Systematic Approach for Identifying Unsafe Driver Behaviour in Mixed Traffic Using Rule-Based First Principles",
    "conference": "Transportation Research Symposium 2025",
    "location": "The Netherlands",
    "date": "25-28 May 2025"
  },
  {
    "authors": "Singh, R., M. Garg, B.A. Kumar",
    "title": "Self-Attention Based ConvLSTM with Deep Embedded Clustering Approach for Bus Travel Time Prediction",
    "conference": "27th Annual Conference of Euro Working Group on Transportation",
    "location": "Scotland",
    "date": "01-03 September 2025"
  }
];

const textBooks = [
  { authors: "Sashank Y., N.A. Navali, A. Bhanuprakash, B.A. Kumar and L. Vanajakshi", title: "Modern Transportation Systems", year: "2024", publisher: "Springer" },
  { authors: "Banik, S., B.A. Kumar and L. Vanajakshi", title: "Calibration of SUMO for Indian Heterogeneous Traffic Conditions. In: Arkatkar S., Velmurugan S., Verma A.(eds) Recent Advances in Traffic Engineering. Lecture Notes in Civil Engineering", year: "2020", publisher: "Springer Singapore" }
];

const patents = [
  {
    "authors": "Kumar, B.A., A. Achar, D. Bharathi, L. Vanajakshi, and R. Jayaprakash",
    "title": "A Seasonal Modelling Approach Capturing Spatio-Temporal Correlations for Dynamic Bus Travel Time Prediction",
    "patentNumber": "442700"
  },
  {
    "authors": "Vanajakshi, L., B.A. Kumar, and M.A. Nithishwer",
    "title": "A Method and System for Predicting a Vehicle Travel Time",
    "patentNumber": "501967"
  },
  {
    "authors": "Achar, A., B.A. Kumar, B. Dhibyabharathi, L. Vanajakshi, and R. Jayaprakash",
    "title": "Prediction of Travel Time of Vehicles",
    "patentNumber": "510184"
  },
  {
    "authors": "Achar, A., R. Rohith, B.A. Kumar, L. Vanajakshi, and R. Jayaprakash",
    "title": "Bus Travel Time Prediction Capturing Non-linear Spatial Correlations using Support Vector Machines",
    "patentNumber": "515541"
  },
  {
    "authors": "Vanajakshi, L., B. Dhibyabharathi, B.A. Kumar, A. Achar, and R. Jayaprakash",
    "title": "Time Series Model based Prediction of Travel Time",
    "patentNumber": "541168"
  },
  {
    "authors": "Achar, A., R. Rohith, B.A. Kumar, L. Vanajakshi and R. Jayaprakash",
    "title": "Bus Travel Time Prediction exploiting Non-linear Correlations",
    "patentNumber": "(Filed)"
  }
];

const technicalReports = [
  { authors: "Vanajakshi, L., S.C. Subramanian, A.Koppineni, K. Chaitanya, K. Siddharth, R. Behera, R.P.S. Padmanabhan, S.V. Kumar and B.A. Kumar", title: "Development of a Real Time Bus Arrival Time Prediction System under Indian Traffic Conditions", institution: "Center of Excellence in Urban Transport, The Ministry of Urban Development, Govt. of India", year: "2016" },
  { authors: "Vanajakshi, L., B.A. Kumar, B.R. Muthurajan", title: "Use of Global Positioning System (GPS) Data from MTC Bus Routes to Develop APTS/ATIS Applications", institution: "Center of Excel- lence in Urban Transport, The Ministry of Urban Development, Govt. of India", year: "2018" }
];

const categories = {
  journals: { name: "Journals", data: journalPublications },
  conferenceProceedings: { name: "Conference Proceedings", data: conferenceProceedings },
  textBooks: { name: "Text Books", data: textBooks },
  patents: { name: "Patents", data: patents },
  technicalReports: { name: "Technical Reports", data: technicalReports },
};

function Publications() {
  const [activeCategory, setActiveCategory] = useState("journals");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (categories[hash]) {
      setActiveCategory(hash);
    }
  }, []);

  const renderPublications = (publications, categoryName, id) => {
    const reversedPublications = [...publications].reverse(); // Reverse the order for numbering

    return (
      <div id={id} className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{categoryName}</h3>
        <ol className="list-decimal pl-5 space-y-2" style={{ counterReset: "list-counter", listStyleType: "none" }}>
          {reversedPublications.map((pub, index) => (
            <li key={index} className="text-gray-800" style={{ counterIncrement: "list-counter", position: "relative" }}>
              <span style={{ position: "absolute", left: "-30px" }}>{reversedPublications.length - index}.</span>

              {/* Author and year */}
              {pub.authors}. 
              {pub.year && <>{` (${pub.year})`}. </>}

              {/* Title and Journal details */}
              <span className="font-semibold"> {pub.title}</span>. 

              {/* Journal Publication */}
              {pub.journal && (
                <em> {pub.journal}{pub.volume && `, vol. ${pub.volume},`} {pub.pages && `pp. ${pub.pages}`} {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">[Link]</a>}</em>
              )}

              {/* Conference Proceedings */}
              {pub.conference && (
                <em> {pub.conference}, {pub.location}, {pub.date}.</em>
              )}

              {/* Textbooks */}
              {pub.publisher && <em> {pub.publisher}.</em>}

              {/* Patents */}
              {pub.patentNumber && <em>  {pub.patentNumber}.</em>}

              {/* Technical Reports */}
              {pub.institution && <em> {pub.institution}.</em>}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <FileText className="h-8 w-8 mr-2 text-indigo-600" /> Publications
          </h2>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key);
                window.location.hash = key;
              }}
              className={`px-4 py-2 font-semibold ${activeCategory === key ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"} rounded`}
              aria-label={`View ${categories[key].name}`}
            >
              {categories[key].name}
            </button>
          ))}
        </div>
        {renderPublications(categories[activeCategory].data, categories[activeCategory].name, activeCategory)}
      </div>
    </section>
  );
}

export default Publications;

