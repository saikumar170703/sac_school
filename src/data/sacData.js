// Data repository for SAC English Medium School (Andhra Pradesh, India)

export const SAC_INFO = {
  name: "SAC English Medium School",
  fullName: "SAC English Medium High School & Junior College",
  subTitle: "Recognized by Govt. of Andhra Pradesh & Affiliated to CBSE",
  motto: "Vidya Dadati Vinayam (Knowledge Bestows Humility & Innovation)",
  established: 1984,
  location: "Vijayawada, Andhra Pradesh",
  accreditation: ["CBSE Affiliated", "AP Govt. Recognized", "ISO 9001:2015 Certified", "National STEM Alliance"],
  stats: [
    { label: "Board Exam Pass Rate", value: "99.8%", description: "Top ranks in AP State & CBSE" },
    { label: "IIT-JEE & NEET Ranks", value: "142+", description: "Selections in Class of 2025-26" },
    { label: "Student-Teacher Ratio", value: "15:1", description: "Personalized mentorship" },
    { label: "Science & AI Labs", value: "25+", description: "State-of-the-art facilities" },
  ]
};

export const ACADEMIC_PROGRAMS = [
  {
    id: "mpc-iit",
    category: "STEM & IIT-JEE",
    title: "Class 11 & 12 MPC (IIT-JEE Main & Advanced Integrated)",
    level: "Classes 11 - 12",
    duration: "2 Years",
    tagline: "Rigorous Mathematics, Physics & Chemistry with top-tier IIT-JEE coaching",
    description: "Integrated dual curriculum covering CBSE/AP Board syllabus along with intensive problem solving for IIT-JEE Main, Advanced, BITSAT, and EAPCET.",
    features: ["Daily IIT-JEE Mock Exams", "Expert Kota & Hyderabad Faculty", "3D Physics & Chemistry Labs", "Personalized Doubt Clearing Sessions"],
    careerPaths: ["Computer Science Engineer", "Robotics Specialist", "Aerospace Engineer", "Data Scientist"],
    tuitionEstimate: 65000,
    badge: "Top Ranker Track"
  },
  {
    id: "bipc-neet",
    category: "Pre-Med & Bio",
    title: "Class 11 & 12 BiPC (NEET Medical & Bio-Tech Integrated)",
    level: "Classes 11 - 12",
    duration: "2 Years",
    tagline: "Specialized Biology, Physics & Chemistry for AIIMS & NEET Medical entrance",
    description: "Designed for aspiring doctors and medical researchers. Includes extensive Botany, Zoology, and Chemistry drills with national mock ranks.",
    features: ["NEET All-India Test Series", "Digital Human Anatomy Models", "Botany & Micro-Biology Labs", "Hospital Internship Exposure"],
    careerPaths: ["MBBS / Surgeon", "Biotechnology Researcher", "Pharmacy Specialist", "Genomics Engineer"],
    tuitionEstimate: 62000,
    badge: "Medical Excellence"
  },
  {
    id: "foundation-stem",
    category: "Middle & High School",
    title: "Class 6 to 10 CBSE Foundation & Olympiad Academy",
    level: "Classes 6 - 10",
    duration: "1 - 5 Years",
    tagline: "Strong foundation in Science, Mathematics, English & Coding",
    description: "Comprehensive English medium schooling with specialized Olympiad training (NTSE, NSTSE, Mathematics Olympiad) and practical science experiments.",
    features: ["National Olympiad Coaching", "Python & Robotics Fundamentals", "Spoken English & Communication", "Abacus & Mental Math"],
    careerPaths: ["STEM Foundation", "Competitive Scholar", "Future Engineer/Doctor"],
    tuitionEstimate: 42000,
    badge: "Strong Foundation"
  },
  {
    id: "mec-cec",
    category: "Commerce & CA",
    title: "Class 11 & 12 MEC / CEC (Commerce, Economics & CA Foundation)",
    level: "Classes 11 - 12",
    duration: "2 Years",
    tagline: "Building future Chartered Accountants, Financial Analysts & Business Leaders",
    description: "Comprehensive study of Accountancy, Commerce, Economics, and Business Math integrated with CA Foundation and IPMAT entrance prep.",
    features: ["CA Foundation Integrated Prep", "Stock Market & Tally Lab", "Business Plan Competitions", "Guest Lectures by CAs"],
    careerPaths: ["Chartered Accountant (CA)", "Investment Banker", "Civil Services (IAS/IPS)", "Corporate Lawyer"],
    tuitionEstimate: 48000,
    badge: "Commerce Hub"
  },
  {
    id: "robotics-ai",
    category: "STEM & IIT-JEE",
    title: "SAC Junior Robotics, AI & Space Science Lab",
    level: "Classes 6 - 12",
    duration: "1 Year Elective",
    tagline: "Hands-on microcontrollers, IoT, AI models & drone designing",
    description: "State-of-the-art tech incubator where students build autonomous rovers, IoT smart systems, and participate in national robotics expos.",
    features: ["Arduino & Raspberry Pi Kits", "3D Printer Access", "Drone Flight Simulator", "State Science Fair Mentorship"],
    careerPaths: ["AI Engineer", "Mechatronics Specialist", "Drone Designer"],
    tuitionEstimate: 38000,
    badge: "Tech Innovator"
  },
  {
    id: "arts-sports",
    category: "Arts & Sports",
    title: "SAC Fine Arts, Classical Music & Sports Academy",
    level: "Classes 1 - 12",
    duration: "Flexible",
    tagline: "Kuchipudi Dance, Carnatic Vocal, Yoga, Cricket & Badminton Academy",
    description: "Preserving rich Indian heritage while promoting sports excellence. Professional coaching in cricket, shuttle badminton, chess, and classical arts.",
    features: ["Professional Cricket Nets", "Indoor Badminton Courts", "Kuchipudi & Classical Music Studio", "Annual Cultural Mahotsav"],
    careerPaths: ["State Level Athlete", "Performing Artist", "Sports Administrator"],
    tuitionEstimate: 35000,
    badge: "Cultural Heritage"
  }
];

export const CAMPUS_HOTSPOTS = [
  {
    id: "hotspot-ramanujan",
    name: "SAC Srinivasa Ramanujan Math & AI Wing",
    tagline: "Advanced Mathematics & High-Speed Computing Center",
    x: "32%",
    y: "45%",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    specs: ["Mathematical Model Studio", "AI & Python Computer Lab", "Olympiad Study Lounges", "Interactive Smart Boards"],
    description: "Equipped with 60 high-performance computer terminals for coding, statistical analysis, and Olympiad problem-solving sessions."
  },
  {
    id: "hotspot-raman",
    name: "SAC Sir C.V. Raman Science Complex",
    tagline: "State-of-the-Art Physics, Chemistry & Biology Labs",
    x: "65%",
    y: "35%",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    specs: ["Physics Optics & Circuit Lab", "Chemistry Organic Analysis Suite", "Biology Microscopic Studio", "Safety Cleanrooms"],
    description: "Allows students to conduct hands-on experiments for board practical exams and national science fair research projects."
  },
  {
    id: "hotspot-sports",
    name: "SAC Sports & Athletics Complex",
    tagline: "Cricket Nets, Badminton Courts & Swimming Pool",
    x: "78%",
    y: "65%",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    specs: ["Professional Turf Cricket Nets", "Wooden Floor Badminton Courts", "25m Swimming Pool", "Yoga & Karate Hall"],
    description: "Home to SAC Champions who represent Andhra Pradesh in District, State, and National level school games."
  },
  {
    id: "hotspot-kalam",
    name: "SAC Dr. A.P.J. Abdul Kalam Digital Library",
    tagline: "Knowledge Hub with over 40,000 Books & E-Journals",
    x: "48%",
    y: "55%",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    specs: ["40,000+ Physical Books", "Competitive Exam Archives (IIT/NEET)", "Digital E-Reader Station", "Quiet Reading Zones"],
    description: "A peaceful sanctuary dedicated to Former President Dr. APJ Abdul Kalam, fostering a deep passion for reading and learning."
  },
  {
    id: "hotspot-kalpana",
    name: "SAC Kalpana Chawla Space Observatory",
    tagline: "Roof Dome Astronomy Telescope & Space Club",
    x: "20%",
    y: "28%",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80",
    specs: ["Automated Refractor Telescope", "Lunar & Planetary Tracking", "ISRO Satellite Feed Sync", "Stargazing Deck"],
    description: "Students learn observational astronomy, track planetary movements, and participate in ISRO space awareness programs."
  }
];

export const EVENTS_CALENDAR = [
  {
    id: "evt-1",
    title: "SAC Annual Admissions Open House & Career Counseling 2026",
    category: "Admissions",
    date: "OCT 24, 2026",
    time: "09:00 AM - 01:00 PM IST",
    location: "SAC Auditorium, Vijayawada Campus",
    description: "Meet Correspondent Sri K. Venkateswara Rao & Principal Dr. K. Satyanarayana. Campus tour, IIT-JEE/NEET guidance, and spot scholarship test.",
    status: "Registration Open",
    speakers: ["Dr. K. Satyanarayana (Principal)", "Sri M. Venkateswara Rao (Director)"]
  },
  {
    id: "evt-2",
    title: "SAC State Level Science & Innovation Expo 2026",
    category: "STEM & Tech",
    date: "NOV 08, 2026",
    time: "09:30 AM - 04:30 PM IST",
    location: "Sir C.V. Raman Science Complex",
    description: "Over 80 student models on solar energy, autonomous agricultural drones, water purification, and AI robotics on live display.",
    status: "Featured Event",
    speakers: ["Prof. P. Ramachandra Rao (Guest Scientist)", "SAC Science Club"]
  },
  {
    id: "evt-3",
    title: "SAC Sankranti Sambaralu & Cultural Mahotsav",
    category: "Arts & Culture",
    date: "JAN 12, 2027",
    time: "05:00 PM IST",
    location: "SAC Main Quadrangle",
    description: "Traditional Telugu cultural celebration featuring Kuchipudi dance recitals, Rangoli competitions, and classical music performances.",
    status: "Cultural Fest",
    speakers: ["Smt. P. Vijayalakshmi (Vice Principal)", "SAC Cultural Troupe"]
  },
  {
    id: "evt-4",
    title: "SAC Annual Inter-School Sports Meet & Pratibha Awards",
    category: "Athletics",
    date: "DEC 05, 2026",
    time: "08:00 AM IST",
    location: "SAC Athletic Grounds",
    description: "Track & field events, cricket finals, badminton championships, and distribution of State Pratibha Awards to top rankers.",
    status: "Sports Meet",
    speakers: ["Sri V. Nageswara Rao (Physical Director)", "District Sports Officer"]
  }
];

export const ALUMNI_SPOTLIGHT = [
  {
    id: "alum-1",
    name: "K. Ananya Reddy ('19)",
    university: "IIT Bombay (B.Tech Computer Science - AIR 42)",
    currentRole: "AI Systems Researcher at Google Research India",
    quote: "SAC English Medium School provided the perfect foundation. The teachers here mentored me for IIT-JEE right from Class 8 without stress.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    achievement: "IIT-JEE AIR 42 Ranker"
  },
  {
    id: "alum-2",
    name: "Dr. M. Sai Teja Varma ('21)",
    university: "AIIMS New Delhi (MBBS - NEET State Rank 1)",
    currentRole: "Medical Resident Surgeon at AIIMS New Delhi",
    quote: "The BiPC integrated coaching at SAC was top notch. The daily test series gave me total confidence to score top rank in NEET.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    achievement: "NEET AP State Rank 1"
  },
  {
    id: "alum-3",
    name: "P. Divya Chowdary ('20)",
    university: "SRCC Delhi & Civil Services (IAS 2025)",
    currentRole: "Assistant Collector (Indian Administrative Service)",
    quote: "SAC instilled strong values, leadership skills, and public speaking confidence that helped me clear UPSC Civil Services in my first attempt.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    achievement: "IAS Officer (Rank 18)"
  }
];

export const SAC_NEWS = [
  {
    id: "news-1",
    date: "October 1, 2026",
    category: "Academic Rank",
    title: "142 SAC Students Qualify for IIT-JEE Advanced & NEET 2026",
    readTime: "3 min read",
    summary: "SAC English Medium School scores record achievements in national competitive examinations with top state percentile scores.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-2",
    date: "September 20, 2026",
    category: "State Award",
    title: "SAC Awarded Best English Medium School in Andhra Pradesh 2026",
    readTime: "4 min read",
    summary: "Recognized by AP State Education Excellence Committee for academic distinction, sports infrastructure, and digital classrooms.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-3",
    date: "September 10, 2026",
    category: "STEM Innovation",
    title: "SAC Students Win 1st Place at State Level Robotics & Science Expo",
    readTime: "3 min read",
    summary: "SAC Titan Robotics Team designed an automated smart irrigation rover for farmers, winning top honors in Vijayawada.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  }
];

export const AI_BOT_FAQS = [
  {
    keywords: ["apply", "admissions", "admission", "deadline", "how to apply"],
    answer: "Admissions for 2026-2027 at SAC English Medium School are open for Classes 1 through 12 (MPC, BiPC, MEC & CBSE Foundation). You can click 'Apply 2026-27' to register online or visit our Vijayawada campus office."
  },
  {
    keywords: ["fee", "fees", "cost", "tuition", "scholarship", "pratibha"],
    answer: "SAC tuition fees range from ₹35,000 to ₹65,000 per academic year depending on the class & integrated coaching (IIT-JEE / NEET). Merit scholarships are awarded based on our SAC Talent Search Exam!"
  },
  {
    keywords: ["jee", "iit", "neet", "mpc", "bipc", "coaching"],
    answer: "SAC offers top-grade integrated IIT-JEE (MPC) and NEET (BiPC) coaching with experienced faculty from Kota & Hyderabad, daily mock tests, and personalized doubt sessions."
  },
  {
    keywords: ["bus", "transport", "hostel", "boarding", "vijayawada"],
    answer: "SAC provides safe GPS-enabled school bus transportation across Vijayawada, Guntur, and surrounding areas. We also offer separate AC/Non-AC residential hostel facilities for boys and girls."
  },
  {
    keywords: ["sports", "cricket", "badminton", "games"],
    answer: "SAC has professional turf cricket nets, wooden badminton courts, a 25m swimming pool, and coaches for chess, yoga, and martial arts."
  }
];
