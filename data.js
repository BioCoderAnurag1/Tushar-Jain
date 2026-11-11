/**
 * Dr. Tushar Jain - Academic & Professional Dataset
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Dr. Tushar Jain",
    title: "Senior Tech Specialist",
    company: "Infosys Ltd, Hyderabad",
    tagline: "AI & Computer Vision Specialist | Senior Tech Specialist at Infosys | 22+ Years in AI/ML, Industry 4.0 & Research",
    experience: "22+",
    emailPrimary: "tujain04@gmail.com",
    emailSecondary: "tusharkaid@gmail.com",
    phone: "+91 7983784213",
    address: "Greater Noida 201310, UP / Hyderabad, India",
    phd: "Ph.D. in Computer Vision & AI (NIT Kurukshetra)",
    mtech1: "M.Tech (CSE - Honors, 85%) - GGSIPU Delhi",
    mtech2: "M.Tech (ME - AI Expert Systems, 9.33 CPI) - UPTU Lucknow",
    gate: "GATE CS/IT 90%tile (AIR 999) & UGC-NET Qualified"
  },

  stats: [
    { value: 22, suffix: "+", label: "Years Total Experience" },
    { value: 34, suffix: "+", label: "Peer-Reviewed Papers" },
    { value: 36, prefix: "₹", suffix: "L+", label: "Research Grants (AICTE/BIRAC)" },
    { value: 999, prefix: "AIR ", label: "GATE (90%tile) & UGC-NET" },
    { value: 15, suffix: "+", label: "Keynotes & Invited Talks" },
    { value: 20, suffix: "+", label: "Advanced FDPs & Certifications" }
  ],

  publications: [
    {
      id: "j1",
      type: "journal",
      title: "Industrial Objects Recognition in Intelligent Manufacturing for Computer Vision",
      authors: "Tushar Jain",
      venue: "International Journal of Intelligent Unmanned Systems (Emerald Publishing UK)",
      year: 2021,
      indexing: ["Web of Science", "ESCI", "SCOPUS"],
      doi: "https://doi.org/10.1108/IJIUS-04-2020-0004",
      category: "vision"
    },
    {
      id: "j2",
      type: "journal",
      title: "Transient Temperature Analysis in Inlet and Exhaust Valves of a Diesel Engine",
      authors: "Ansar Ali, Piyush Gupta, Tushar Jain",
      venue: "Transactions of the Canadian Society for Mechanical Engineering",
      year: 2021,
      indexing: ["SCI Indexed"],
      doi: "",
      category: "engineering"
    },
    {
      id: "j3",
      type: "journal",
      title: "Study in the changes on the Functional Groups Present in Biomass during Pyrolysis Process",
      authors: "S Suman, AM Yadav, Tushar Jain, A Ali SK",
      venue: "IOP Conf. Series: Materials Science and Engineering 1146, 012023, IOP Publishing",
      year: 2021,
      indexing: ["SCOPUS", "Scimago"],
      doi: "https://doi.org/10.1088/1757-899X/1146/1/012023",
      category: "engineering"
    },
    {
      id: "j4",
      type: "journal",
      title: "Quality edge extraction of mechanical CAD objects for intelligent manufacturing",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Process Management and Benchmarking, Vol. 10, No. 1 (Inderscience UK)",
      year: 2020,
      indexing: ["SCOPUS (Elsevier)"],
      doi: "",
      category: "vision"
    },
    {
      id: "j5",
      type: "journal",
      title: "Unmanned machine vision system for automated recognition of mechanical parts",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Intelligent Unmanned Systems, Vol. 6, No. 4, pp. 184-196 (Emerald Publishing UK)",
      year: 2019,
      indexing: ["Web of Science", "ESCI", "SCOPUS"],
      doi: "",
      category: "vision"
    },
    {
      id: "j6",
      type: "journal",
      title: "Mechanical CAD parts recognition for industrial automation",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Smart Innovation, Systems and Technologies, Vol. 78, pp. 341-349, Springer Singapore",
      year: 2018,
      indexing: ["SCOPUS (Springer)"],
      doi: "",
      category: "industry4"
    },
    {
      id: "j7",
      type: "journal",
      title: "Robust active vision industrial CAD parts recognition system",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Intelligent Machines and Robotics, Vol. 1, No. 1, pp. 16-33 (Inderscience UK)",
      year: 2018,
      indexing: ["Peer-Reviewed / SCOPUS"],
      doi: "",
      category: "vision"
    },
    {
      id: "j8",
      type: "journal",
      title: "Development of machine vision system for automated mechanical objects recognition",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Intelligent Machines and Robotics, Vol. 1, No. 2, pp. 140-152 (Inderscience UK)",
      year: 2017,
      indexing: ["Peer-Reviewed"],
      doi: "",
      category: "vision"
    },
    {
      id: "j9",
      type: "journal",
      title: "Robust Industrial Vision System for Mechanical Parts Recognition",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Intelligent Machines and Robotics, Vol. 1, No. 2, pp. 122-132 (Inderscience UK)",
      year: 2017,
      indexing: ["Peer-Reviewed"],
      doi: "",
      category: "vision"
    },
    {
      id: "j10",
      type: "journal",
      title: "Easily accessible machine vision automation system",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Journal of Mechatronics (American Scientific Publishers, USA)",
      year: 2017,
      indexing: ["International Journal"],
      doi: "",
      category: "industry4"
    },
    {
      id: "j11",
      type: "journal",
      title: "Industrial CAD parts boundary detection",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Journal of Computational Intelligence and Electronic Systems (American Scientific Publishers, USA)",
      year: 2016,
      indexing: ["International Journal"],
      doi: "",
      category: "vision"
    },
    {
      id: "j12",
      type: "journal",
      title: "Design of computer vision system for objects recognition in automation industries",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Global Journal of Enterprise Information System, Vol. 10, No. 1, pp. 86-90",
      year: 2018,
      indexing: ["UGC Approved"],
      doi: "",
      category: "vision"
    },
    {
      id: "j13",
      type: "journal",
      title: "Design of machine vision system for automated inspection in robotics",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Applied Engineering Research",
      year: 2018,
      indexing: ["SCOPUS Indexed"],
      doi: "",
      category: "industry4"
    },
    {
      id: "j14",
      type: "journal",
      title: "Wireless communications and information management: scalable and robust IT solutions for disaster management",
      authors: "Tushar Jain, Piyush Gupta, Ansar Ali, Ankit Sharma",
      venue: "International Journal of Applied Engineering Research, Vol. 13, No. 9, pp. 36-41",
      year: 2018,
      indexing: ["UGC Approved / SCOPUS"],
      doi: "",
      category: "cloud"
    },
    {
      id: "j15",
      type: "journal",
      title: "Laminar flow heat transfer analysis inside coiled tubes of newtonian and non newtonian fluids",
      authors: "Piyush Gupta, Tushar Jain, Ansar Ali, Ankit Sharma",
      venue: "International Journal of Applied Engineering Research, Vol. 13, No. 9, pp. 162-168",
      year: 2018,
      indexing: ["UGC Approved"],
      doi: "",
      category: "engineering"
    },
    {
      id: "j16",
      type: "journal",
      title: "Determination of the size of the coating of a homogeneous material on a hard metal cuboid",
      authors: "Piyush Gupta, Tushar Jain, Ansar Ali, Ankit Sharma",
      venue: "International Journal of Applied Engineering Research, Vol. 13, No. 9, pp. 162-168",
      year: 2018,
      indexing: ["UGC Approved"],
      doi: "",
      category: "engineering"
    },
    {
      id: "j17",
      type: "journal",
      title: "Automated recognition of mechanical parts with machine vision system",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Journal of Experimental and Applied Mechanics",
      year: 2018,
      indexing: ["UGC Approved"],
      doi: "",
      category: "vision"
    },
    {
      id: "j18",
      type: "journal",
      title: "Machine vision system for industrial parts recognition",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Journal of Engineering and Manufacturing Sciences, Vol. 7, No. 1, pp. 51-57",
      year: 2017,
      indexing: ["UGC Approved"],
      doi: "",
      category: "vision"
    },
    {
      id: "j19",
      type: "journal",
      title: "Automation and integration of industries through computer vision systems",
      authors: "Tushar Jain, Meenu",
      venue: "International Journal of Information and Computation Technology, Vol. 3, No. 9, pp. 963-970",
      year: 2013,
      indexing: ["Refereed Journal"],
      doi: "",
      category: "industry4"
    },
    {
      id: "c1",
      type: "conference",
      title: "Study in the changes on the Functional Groups Present in Biomass during Pyrolysis Process",
      authors: "S Suman, AM Yadav, Tushar Jain, A Ali SK",
      venue: "International Conference on Advances in Thermal-Fluids Engineering (ATFE-2021), PDPU Gandhinagar",
      year: 2021,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "engineering"
    },
    {
      id: "c2",
      type: "conference",
      title: "Experimental and Theoretical Investigation of Heat Transfer by Electrically Heated Square or Rectangular Surfaces",
      authors: "Tushar Jain, Piyush Gupta",
      venue: "International Conference of Advance Research and Innovation (ICARI), Jan 2020",
      year: 2020,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "engineering"
    },
    {
      id: "c3",
      type: "conference",
      title: "Wireless communications and information management: scalable and robust IT solutions for disaster management",
      authors: "Tushar Jain, Piyush Gupta, Ansar Ali, Ankit Sharma",
      venue: "International Conference on Mechanical: Innovation and Emerging Technology (ICMIET-2018), MIET Meerut",
      year: 2018,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "cloud"
    },
    {
      id: "c4",
      type: "conference",
      title: "Laminar flow heat transfer analysis inside coiled tubes of newtonian and non newtonian fluids",
      authors: "Piyush Gupta, Tushar Jain, Ansar Ali, Ankit Sharma",
      venue: "International Conference on Mechanical: Innovation and Emerging Technology (ICMIET-2018), MIET Meerut",
      year: 2018,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "engineering"
    },
    {
      id: "c5",
      type: "conference",
      title: "Determination of the Size of the coating of a homogeneous material on a hard metal cuboid",
      authors: "Piyush Gupta, Tushar Jain, Ansar Ali, Ankit Sharma",
      venue: "International Conference on Mechanical: Innovation and Emerging Technology (ICMIET-2018), MIET Meerut",
      year: 2018,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "engineering"
    },
    {
      id: "c6",
      type: "conference",
      title: "Design of machine vision system for automated inspection in robotics",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Intl Conf of Recent Trends and Innovations in Mechanical Engineering (ICRTIME-2018), KIET Ghaziabad",
      year: 2018,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "industry4"
    },
    {
      id: "c7",
      type: "conference",
      title: "Automated recognition of mechanical parts with machine vision system",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "International Conference on Advances in Business and Engineering Sustainability (ABES-2018), Ghaziabad",
      year: 2018,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "vision"
    },
    {
      id: "c8",
      type: "conference",
      title: "Machine vision system for industrial parts recognition",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "Intl Conf on Advanced Research and Innovation in Engineering (ICARIE-2017), MIT Meerut",
      year: 2017,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "vision"
    },
    {
      id: "c9",
      type: "conference",
      title: "Machine vision system with industrial automation and applications: The Mechanical perspective",
      authors: "Tushar Jain, Meenu, H. K. Sardana",
      venue: "NIET Journal of Engineering & Technology, pp. 17-21",
      year: 2015,
      indexing: ["Conference / Journal"],
      doi: "",
      category: "industry4"
    },
    {
      id: "c10",
      type: "conference",
      title: "Impact of machine vision system in industrial automation",
      authors: "Tushar Jain, Meenu",
      venue: "International Conference on Manufacturing Excellence (MANFEX-2012), Amity University Noida",
      year: 2012,
      indexing: ["Conference Proceedings"],
      doi: "",
      category: "industry4"
    },
    {
      id: "c11",
      type: "conference",
      title: "The strength and dilemmas of organizational integration through computerization",
      authors: "Tushar Jain, Meenu",
      venue: "National Conference on Manufacturing Excellence (MANFEX-2011), Amity University Noida",
      year: 2011,
      indexing: ["National Conference"],
      doi: "",
      category: "cloud"
    },
    {
      id: "c12",
      type: "conference",
      title: "Statistical pattern recognition and neural networks: a comparative study",
      authors: "Tushar Jain, Meenu",
      venue: "National Conference on Emerging Technologies in VLSI (NCETVLSI-2011), MIET Meerut",
      year: 2011,
      indexing: ["National Conference"],
      doi: "",
      category: "vision"
    },
    {
      id: "c13",
      type: "conference",
      title: "Computer vision and image processing: a new tool for industrial automation",
      authors: "Tushar Jain, Meenu",
      venue: "National Conference on Computer Engineering and Information Technology, NITTTR Chandigarh",
      year: 2012,
      indexing: ["National Conference"],
      doi: "",
      category: "vision"
    },
    {
      id: "c14",
      type: "conference",
      title: "Computer vision: an enterprise of industrial automation and integration",
      authors: "Tushar Jain, Meenu",
      venue: "Intl Conf on Advances in Modelling and Advanced Computing (AMOC-2011), IIT Roorkee",
      year: 2011,
      indexing: ["IIT Roorkee Intl Conf"],
      doi: "",
      category: "industry4"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
