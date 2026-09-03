export const site = {
  name: "VidyaPath Academy",
  tagline: "Learn better. Score higher. Grow faster.",
  email: "vidhyapath.support@edu.in",
  admissionsEmail: "vidhyapath.admission@edu.in",
  phoneDisplay: "+91 48394 24329",
  phoneHref: "tel:+914839424329",
  hours: "Mon – Sat, 9:00 AM – 8:00 PM IST",
  address: "3rd Floor, Knowledge Tower, Sector 62, Noida, Uttar Pradesh 201301",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/batches", label: "Batches" },
  { to: "/notes", label: "Notes" },
  { to: "/pyq", label: "PYQ" },
  { to: "/doubt", label: "Doubts" },
  { to: "/help", label: "Help" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type Batch = {
  slug: string;
  title: string;
  grade: string;
  audience: "School" | "Professional";
  price: number;
  oldPrice: number;
  duration: string;
  starts: string;
  seats: string;
  highlights: string[];
};

export const batches: Batch[] = [
  {
    slug: "foundation-9",
    title: "Foundation Batch — Class 9",
    grade: "Class 9",
    audience: "School",
    price: 1999,
    oldPrice: 3499,
    duration: "10 months",
    starts: "15 April 2026",
    seats: "120 seats",
    highlights: [
      "Science, Maths, SST & English live classes",
      "Weekly chapter tests with detailed solutions",
      "Printable notes for every chapter",
    ],
  },
  {
    slug: "foundation-10",
    title: "Board Booster — Class 10",
    grade: "Class 10",
    audience: "School",
    price: 2499,
    oldPrice: 4000,
    duration: "10 months",
    starts: "15 April 2026",
    seats: "150 seats",
    highlights: [
      "Full CBSE / ICSE board syllabus coverage",
      "10 years of solved previous year papers",
      "Board-pattern mock tests every month",
    ],
  },
  {
    slug: "science-11",
    title: "Science Sprint — Class 11",
    grade: "Class 11",
    audience: "School",
    price: 3199,
    oldPrice: 4000,
    duration: "11 months",
    starts: "1 May 2026",
    seats: "100 seats",
    highlights: [
      "Physics, Chemistry, Maths & Biology tracks",
      "JEE / NEET foundation problem sets",
      "Doubt sessions six evenings a week",
    ],
  },
  {
    slug: "science-12",
    title: "Target 12th — Boards + Competitive",
    grade: "Class 12",
    audience: "School",
    price: 4000,
    oldPrice: 5500,
    duration: "12 months",
    starts: "1 May 2026",
    seats: "90 seats",
    highlights: [
      "Board + JEE / NEET dual preparation",
      "Weekly full-length mock exams with rank list",
      "One-to-one mentor call every fortnight",
    ],
  },
  {
    slug: "commerce-11-12",
    title: "Commerce Pro — Class 11 & 12",
    grade: "Class 11–12",
    audience: "School",
    price: 3499,
    oldPrice: 4800,
    duration: "12 months",
    starts: "1 May 2026",
    seats: "80 seats",
    highlights: [
      "Accountancy, Business Studies & Economics",
      "Case-study based practice sheets",
      "CA Foundation orientation module",
    ],
  },
  {
    slug: "weekend-professionals",
    title: "Weekend Upskill — Working Professionals",
    grade: "Professionals",
    audience: "Professional",
    price: 3999,
    oldPrice: 6500,
    duration: "16 weeks",
    starts: "Every month",
    seats: "Rolling intake",
    highlights: [
      "Data analytics, Excel & communication tracks",
      "Saturday–Sunday live classes, recordings included",
      "Capstone project reviewed by industry mentors",
    ],
  },
];

export const noteSets = [
  {
    subject: "Physics",
    grade: "Class 9–12",
    chapters: 68,
    format: "PDF + mind maps",
    blurb: "Concept notes with derivations, solved numericals and formula sheets.",
  },
  {
    subject: "Chemistry",
    grade: "Class 9–12",
    chapters: 61,
    format: "PDF + reaction charts",
    blurb: "Organic mechanisms, NCERT summaries and quick-revision tables.",
  },
  {
    subject: "Mathematics",
    grade: "Class 9–12",
    chapters: 74,
    format: "PDF + practice sets",
    blurb: "Theory, worked examples and graded exercises from basic to advanced.",
  },
  {
    subject: "Biology",
    grade: "Class 9–12",
    chapters: 45,
    format: "PDF + labelled diagrams",
    blurb: "Diagram-first notes designed for fast board-exam revision.",
  },
  {
    subject: "Accountancy",
    grade: "Class 11–12",
    chapters: 32,
    format: "PDF + formats",
    blurb: "Journal to final accounts with ready-to-use statement formats.",
  },
  {
    subject: "Business Communication",
    grade: "Professionals",
    chapters: 18,
    format: "PDF + templates",
    blurb: "Email, reporting and presentation frameworks for the workplace.",
  },
];

export const pyqPapers = [
  { exam: "CBSE Class 10 Board", years: "2016 – 2025", papers: 40, solution: "Step-wise solutions" },
  { exam: "CBSE Class 12 Board", years: "2016 – 2025", papers: 55, solution: "Step-wise solutions" },
  { exam: "JEE Main", years: "2019 – 2025", papers: 62, solution: "Video + PDF" },
  { exam: "NEET UG", years: "2015 – 2025", papers: 22, solution: "Video + PDF" },
  { exam: "ICSE Class 10", years: "2018 – 2025", papers: 28, solution: "Step-wise solutions" },
  { exam: "State Board (UP / MP / RJ)", years: "2018 – 2025", papers: 36, solution: "PDF keys" },
];

export const faqs = [
  {
    q: "Who can join VidyaPath Academy?",
    a: "Students from Class 9 to Class 12, college students, and working professionals looking to upskill on weekends. Every batch clearly states the audience it is built for.",
  },
  {
    q: "How much do the school batches cost?",
    a: "All Class 9 to Class 12 study batches are priced up to Rs 4,000 for the full session. There are no hidden charges and printable notes are included.",
  },
  {
    q: "Are recordings available if I miss a live class?",
    a: "Yes. Every live class is recorded and uploaded within two hours, so you can revise at your own pace. Recordings stay accessible for the entire batch duration.",
  },
  {
    q: "How quickly are doubts answered?",
    a: "Text doubts are answered within 30 minutes during support hours, and live doubt rooms run every evening from 6 PM to 9 PM.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. Write to vidhyapath.support@edu.in within 7 days of enrolment and we process a full refund, no questions asked.",
  },
  {
    q: "Do professionals get a certificate?",
    a: "Weekend Upskill learners receive a verifiable completion certificate after submitting the capstone project.",
  },
];

export const inr = (value: number) => `₹${value.toLocaleString("en-IN")}`;
