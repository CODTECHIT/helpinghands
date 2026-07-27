export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export type Project = {
  slug: string;
  title: string;
  focus: "Education" | "Healthcare" | "Empowerment" | "Environment";
  status: "Ongoing" | "Completed" | "Upcoming";
  location: string;
  year: string;
  summary: string;
  beneficiaries: string;
  budget: number;
  partners: string[];
  story: string[];
  outcomes: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "village-library-network",
    title: "Village Library Network",
    focus: "Education",
    status: "Ongoing",
    location: "Nashik & Ahmednagar, Maharashtra",
    year: "2021 — present",
    summary:
      "Twelve reading rooms built inside existing gram panchayat buildings, each staffed by a trained local reading facilitator.",
    beneficiaries: "3,400 children",
    budget: 4200000,
    partners: ["Zilla Parishad Education Dept.", "Pratham Books"],
    story: [
      "We started with a single steel cupboard of donated books in Pimpalgaon. Attendance was strong for three weeks and then collapsed — the books were there, but nobody was reading with the children.",
      "The redesign put a paid local facilitator in every room, running two ninety-minute sessions a day. Within a year, independent reading assessments in partner schools moved from 31% to 68% at grade level.",
      "Every library is handed over to the panchayat after three years, with a five-year maintenance grant and an annual restocking budget.",
    ],
    outcomes: [
      { label: "Libraries operating", value: "12" },
      { label: "Grade-level readers", value: "68%" },
      { label: "Books in circulation", value: "18,600" },
      { label: "Facilitators employed", value: "12" },
    ],
  },
  {
    slug: "mobile-health-camps",
    title: "Mobile Health Camps",
    focus: "Healthcare",
    status: "Ongoing",
    location: "Marathwada rural belt",
    year: "2019 — present",
    summary:
      "A fitted-out van and a rotating clinical team reaching 40 villages on a fixed monthly calendar, with follow-up referrals tracked to closure.",
    beneficiaries: "22,000 consultations",
    budget: 9600000,
    partners: ["District Civil Hospital", "Volunteer Physicians' Guild"],
    story: [
      "Rural health failure is rarely about diagnosis — it is about the second visit. Our first year showed that 6 in 10 referrals never reached a hospital.",
      "So the camp calendar became fixed and public: same village, same date, every month. A referral coordinator now follows each case by phone until it is closed or escalated.",
      "Referral closure has risen to 81%, and anaemia screening is now bundled into every women's consultation.",
    ],
    outcomes: [
      { label: "Villages on calendar", value: "40" },
      { label: "Referral closure", value: "81%" },
      { label: "Consultations / month", value: "480" },
      { label: "Cost per consultation", value: "₹214" },
    ],
  },
  {
    slug: "women-skill-centre",
    title: "Women's Skill & Enterprise Centre",
    focus: "Empowerment",
    status: "Ongoing",
    location: "Pune, Maharashtra",
    year: "2022 — present",
    summary:
      "A six-month tailoring, retail and digital-payments course ending in a placement or a seeded micro-enterprise.",
    beneficiaries: "620 women",
    budget: 5800000,
    partners: ["SEWA Maharashtra", "Local retail employers"],
    story: [
      "Training alone does not create income. We only count a graduate as successful when she has earned for three consecutive months.",
      "The centre pairs each cohort with an employer panel before the course begins, so the curriculum is written against real hiring requirements.",
      "Graduates who choose enterprise over employment receive a ₹25,000 seed grant, a bookkeeping kit and twelve months of mentoring.",
    ],
    outcomes: [
      { label: "Graduates", value: "620" },
      { label: "Earning at 3 months", value: "74%" },
      { label: "Median monthly income", value: "₹9,800" },
      { label: "Enterprises seeded", value: "88" },
    ],
  },
  {
    slug: "watershed-restoration",
    title: "Watershed & Green Cover Restoration",
    focus: "Environment",
    status: "Ongoing",
    location: "Aurangabad district",
    year: "2020 — present",
    summary:
      "Desilting of community water bodies, contour trenching and native-species plantation maintained under a five-year survival contract.",
    beneficiaries: "9 villages",
    budget: 7100000,
    partners: ["Watershed Organisation Trust", "Gram Panchayats"],
    story: [
      "Plantation drives photograph well and die quietly. We refuse to count a sapling until it has survived three monsoons.",
      "Each village signs a five-year maintenance contract, funded by us and executed by a local self-help group paid per surviving tree.",
      "Groundwater levels in four of the nine villages have risen by more than two metres since desilting began.",
    ],
    outcomes: [
      { label: "Trees at 3-year survival", value: "41,200" },
      { label: "Survival rate", value: "79%" },
      { label: "Water bodies desilted", value: "14" },
      { label: "Groundwater gain", value: "+2.3 m" },
    ],
  },
  {
    slug: "school-kit-drive",
    title: "Annual School Kit Drive",
    focus: "Education",
    status: "Completed",
    location: "34 cities",
    year: "2025",
    summary:
      "Uniform, footwear, stationery and a year's textbooks delivered before the first day of the academic term.",
    beneficiaries: "11,500 children",
    budget: 3400000,
    partners: ["Corporate CSR partners", "District school administrations"],
    story: [
      "Enrolment dips hardest in the first fortnight of term, when families discover the real cost of sending a child back to school.",
      "Kits are delivered to the school, not the household, and distributed on day one — attendance in partner schools held at 94% through the first month.",
    ],
    outcomes: [
      { label: "Kits delivered", value: "11,500" },
      { label: "Schools covered", value: "212" },
      { label: "Month-1 attendance", value: "94%" },
      { label: "Cost per kit", value: "₹296" },
    ],
  },
  {
    slug: "eldercare-companions",
    title: "Eldercare Companion Programme",
    focus: "Healthcare",
    status: "Upcoming",
    location: "Nagpur, Maharashtra",
    year: "2026",
    summary:
      "Trained volunteers making weekly home visits to isolated elderly residents, with medication tracking and a monthly clinical review.",
    beneficiaries: "500 households (target)",
    budget: 2200000,
    partners: ["Municipal Corporation", "Geriatric Care Society"],
    story: [
      "A pilot of 40 households showed that missed medication, not disease progression, drove most emergency admissions.",
      "The full programme launches in October 2026 and will pair every household with a named volunteer for a minimum of twelve months.",
    ],
    outcomes: [
      { label: "Pilot households", value: "40" },
      { label: "Target households", value: "500" },
      { label: "Volunteers to train", value: "120" },
      { label: "Launch", value: "Oct 2026" },
    ],
  },
];

export type Campaign = {
  slug: string;
  title: string;
  focus: string;
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  urgent?: boolean;
  summary: string;
  detail: string[];
  breakdown: { label: string; amount: number }[];
};

export const CAMPAIGNS: Campaign[] = [
  {
    slug: "school-kits-2000",
    title: "School Kits for 2,000 Children",
    focus: "Education",
    raised: 742000,
    goal: 1200000,
    donors: 386,
    daysLeft: 24,
    summary:
      "₹600 puts one child in uniform, with shoes, books and stationery, before the first day of term.",
    detail: [
      "Term begins in eight weeks. Every kit funded before the cut-off is delivered to the school, not the household, and handed over on day one alongside enrolment paperwork.",
      "Unfunded kits are not carried forward — they simply do not reach a child this year.",
    ],
    breakdown: [
      { label: "Uniform & footwear", amount: 312 },
      { label: "Textbooks", amount: 168 },
      { label: "Stationery & bag", amount: 84 },
      { label: "Delivery & logistics", amount: 36 },
    ],
  },
  {
    slug: "mobile-health-van",
    title: "Second Mobile Health Van",
    focus: "Healthcare",
    raised: 385000,
    goal: 600000,
    donors: 174,
    daysLeft: 11,
    urgent: true,
    summary:
      "One van currently serves 40 villages. A second van adds 28 more and halves the wait between visits.",
    detail: [
      "The existing van runs six days a week and is fully booked eleven months ahead. Villages beyond the current route are turned away every month.",
      "Funds cover the vehicle fit-out, a year of fuel and maintenance, and the salary of one additional referral coordinator.",
    ],
    breakdown: [
      { label: "Vehicle & clinical fit-out", amount: 410000 },
      { label: "Fuel & maintenance (12 mo)", amount: 96000 },
      { label: "Referral coordinator", amount: 66000 },
      { label: "Diagnostics consumables", amount: 28000 },
    ],
  },
  {
    slug: "skill-centre-expansion",
    title: "Skill Centre — Second Floor",
    focus: "Empowerment",
    raised: 918000,
    goal: 1000000,
    donors: 512,
    daysLeft: 39,
    summary:
      "Doubling cohort capacity from 60 to 120 women per intake, with a dedicated digital-skills lab.",
    detail: [
      "The waiting list for the Pune centre currently stands at 340 women, most of whom will not wait another year.",
      "The second floor adds two classrooms, twenty workstations and a crèche so mothers of young children can attend.",
    ],
    breakdown: [
      { label: "Civil work & fit-out", amount: 520000 },
      { label: "Machines & workstations", amount: 290000 },
      { label: "Crèche setup", amount: 110000 },
      { label: "Trainer salaries (6 mo)", amount: 80000 },
    ],
  },
  {
    slug: "monsoon-relief-fund",
    title: "Monsoon Relief Reserve",
    focus: "Emergency",
    raised: 268000,
    goal: 900000,
    donors: 141,
    daysLeft: 6,
    urgent: true,
    summary:
      "A standing reserve so we can move within 24 hours of a flood alert, instead of fundraising after the water arrives.",
    detail: [
      "In 2024 it took us nine days to fund a response that should have taken one. Families in relief camps do not have nine days.",
      "The reserve is held separately, audited annually, and released only on a declared district-level alert.",
    ],
    breakdown: [
      { label: "Dry ration kits", amount: 420000 },
      { label: "Tarpaulin & bedding", amount: 210000 },
      { label: "Medical supplies", amount: 180000 },
      { label: "Transport standby", amount: 90000 },
    ],
  },
];

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  place: string;
  type: "Camp" | "Training" | "Drive" | "Ceremony";
  past?: boolean;
  summary: string;
};

export const EVENTS: EventItem[] = [
  {
    slug: "community-health-camp-nashik",
    title: "Community Health Camp",
    date: "12 August 2026",
    day: "12",
    month: "Aug",
    time: "8:00 AM — 4:00 PM",
    place: "Zilla Parishad School, Nashik",
    type: "Camp",
    summary:
      "General medicine, paediatrics, eye screening and free diagnostics. Walk-ins welcome; bring any previous prescriptions.",
  },
  {
    slug: "volunteer-orientation-pune",
    title: "Volunteer Orientation — Batch 14",
    date: "27 August 2026",
    day: "27",
    month: "Aug",
    time: "10:00 AM — 1:00 PM",
    place: "Foundation Office, Pune",
    type: "Training",
    summary:
      "Mandatory half-day induction covering field conduct, child-safety protocol and reporting. Required before any field placement.",
  },
  {
    slug: "teachers-day-felicitation",
    title: "Teachers' Day Felicitation",
    date: "5 September 2026",
    day: "05",
    month: "Sep",
    time: "5:00 PM — 7:30 PM",
    place: "Deshpande Hall, Nagpur",
    type: "Ceremony",
    summary:
      "Honouring 40 government-school teachers nominated by their own students. Open to the public.",
  },
  {
    slug: "tree-plantation-aurangabad",
    title: "Monsoon Tree Plantation Drive",
    date: "21 September 2026",
    day: "21",
    month: "Sep",
    time: "6:30 AM — 11:00 AM",
    place: "Kanhori village, Aurangabad",
    type: "Drive",
    summary:
      "Planting 2,000 native saplings with the village self-help group. Transport from Aurangabad provided; register in advance.",
  },
  {
    slug: "annual-day-2026",
    title: "Foundation Annual Day 2026",
    date: "14 June 2026",
    day: "14",
    month: "Jun",
    time: "6:00 PM",
    place: "Balgandharva, Pune",
    type: "Ceremony",
    past: true,
    summary:
      "Annual report presentation, donor felicitation and a performance by children from the Village Library Network.",
  },
  {
    slug: "blood-donation-may",
    title: "Blood Donation Camp",
    date: "3 May 2026",
    day: "03",
    month: "May",
    time: "9:00 AM — 3:00 PM",
    place: "Foundation Office, Pune",
    type: "Camp",
    past: true,
    summary: "218 units collected in partnership with the District Civil Hospital blood bank.",
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  tag: "Field Report" | "Press" | "Update" | "Story";
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const NEWS: NewsItem[] = [
  {
    slug: "village-libraries-reading-habits",
    title: "How twelve village libraries changed reading habits",
    tag: "Field Report",
    date: "18 July 2026",
    readTime: "6 min read",
    excerpt:
      "Three years of assessment data from the Village Library Network, including the redesign that saved the programme in year one.",
    body: [
      "When the first reading room opened in Pimpalgaon, we assumed access was the constraint. Books arrived, shelves were built, and for three weeks the room was full.",
      "By the fourth week attendance had fallen by two-thirds. The books were still there. What was missing was an adult who read alongside the children and expected them back tomorrow.",
      "The redesign was expensive and obvious: hire a local facilitator in every village, pay them properly, and run two structured ninety-minute sessions a day. It raised the per-library cost by 60%.",
      "Independent assessment across partner schools now puts 68% of enrolled children at grade-level reading, up from 31% at baseline. The programme hands each library to its gram panchayat after three years, with a maintenance grant attached.",
    ],
  },
  {
    slug: "state-csr-conclave-recognition",
    title: "Foundation recognised at State CSR Conclave",
    tag: "Press",
    date: "2 July 2026",
    readTime: "3 min read",
    excerpt:
      "Our quarterly utilisation reporting was cited as a model practice for mid-sized non-profits at the annual state conclave.",
    body: [
      "The Foundation was among four organisations recognised for financial transparency at the State CSR Conclave held in Mumbai this week.",
      "The citation specifically referenced our practice of publishing project-wise fund utilisation every quarter rather than annually, and of listing unspent balances alongside spend.",
      "We have published quarterly since 2018. Every report from that year onward remains available in the Documents section of this site.",
    ],
  },
  {
    slug: "annual-report-2025-26",
    title: "Annual Report 2025-26 is now available",
    tag: "Update",
    date: "24 June 2026",
    readTime: "2 min read",
    excerpt:
      "Audited accounts, programme-wise outcomes and the full donor list for the financial year are now published.",
    body: [
      "The audited Annual Report for FY 2025-26 is available for download, along with the Form 10B audit report and the FCRA return.",
      "Total programme expenditure for the year was ₹4.62 crore, against administrative costs of 7.8% — below our self-imposed ceiling of 10%.",
      "Donors who contributed above ₹10,000 and did not opt for anonymity are listed in Annexure C.",
    ],
  },
  {
    slug: "sunita-story",
    title: '"She wants to be a doctor now" — Sunita\'s story',
    tag: "Story",
    date: "9 June 2026",
    readTime: "4 min read",
    excerpt:
      "A mother in Sinnar describes the two years her daughter spent out of school, and what brought her back.",
    body: [
      "Sunita Kale works as a farm labourer in Sinnar taluka. When her husband fell ill in 2022, her eldest daughter Rupali stopped attending school to look after two younger siblings.",
      '"Nobody asked where she went," Sunita says. "The school marked her absent for a year and then stopped marking her."',
      "A field volunteer conducting an out-of-school survey found Rupali in 2023. Re-enrolment took four months of paperwork, a bridge course, and a school kit.",
      'Rupali is now in Class 9 and ranks third in her section. Her mother has one correction to make to our records: "Write that she wants to be a doctor. Not that she might."',
    ],
  },
  {
    slug: "monsoon-preparedness-note",
    title: "Why we are building a relief reserve before the rains",
    tag: "Update",
    date: "21 May 2026",
    readTime: "3 min read",
    excerpt:
      "Reactive fundraising cost us nine days in 2024. Here is what a standing reserve changes.",
    body: [
      "In the 2024 floods, the gap between the district alert and our first truck leaving the warehouse was nine days. Seven of those days were spent raising money.",
      "A standing reserve inverts the sequence. Funds are held separately, audited annually, and released only on a declared district-level alert.",
      "The target is ₹9 lakh — enough for 24-hour deployment of ration, shelter and medical supplies to roughly 600 families.",
    ],
  },
];

export const GALLERY = [
  { id: 1, cat: "Education", caption: "Reading session, Pimpalgaon library", tone: "teal" },
  { id: 2, cat: "Healthcare", caption: "Morning queue at the Marathwada camp", tone: "navy" },
  { id: 3, cat: "Empowerment", caption: "Cohort 9 graduation, Pune skill centre", tone: "orange" },
  { id: 4, cat: "Environment", caption: "Contour trenching before the monsoon", tone: "teal" },
  { id: 5, cat: "Education", caption: "School kit distribution, day one of term", tone: "coral" },
  { id: 6, cat: "Healthcare", caption: "Anaemia screening for women", tone: "navy" },
  { id: 7, cat: "Environment", caption: "Three-year survival count, Kanhori", tone: "teal" },
  { id: 8, cat: "Empowerment", caption: "Tailoring floor, second shift", tone: "orange" },
  { id: 9, cat: "Education", caption: "Handover of the Sinnar reading room", tone: "coral" },
  { id: 10, cat: "Healthcare", caption: "Referral follow-up desk", tone: "navy" },
  { id: 11, cat: "Environment", caption: "Desilting the village tank", tone: "teal" },
  { id: 12, cat: "Empowerment", caption: "First micro-enterprise seed handover", tone: "orange" },
] as const;

export const DOCUMENTS = [
  { name: "Annual Report 2025-26", cat: "Annual Reports", size: "4.2 MB", date: "24 Jun 2026" },
  { name: "Annual Report 2024-25", cat: "Annual Reports", size: "3.9 MB", date: "19 Jun 2025" },
  { name: "Audited Accounts FY 2025-26", cat: "Financials", size: "1.8 MB", date: "24 Jun 2026" },
  { name: "Form 10B Audit Report", cat: "Financials", size: "620 KB", date: "24 Jun 2026" },
  {
    name: "Quarterly Utilisation — Q1 FY26",
    cat: "Financials",
    size: "410 KB",
    date: "12 Jul 2026",
  },
  { name: "12A Registration Certificate", cat: "Registrations", size: "280 KB", date: "—" },
  { name: "80G Exemption Certificate", cat: "Registrations", size: "310 KB", date: "—" },
  { name: "FCRA Registration", cat: "Registrations", size: "295 KB", date: "—" },
  { name: "NGO Darpan Listing", cat: "Registrations", size: "180 KB", date: "—" },
  { name: "Child Protection Policy", cat: "Policies", size: "540 KB", date: "01 Apr 2026" },
  { name: "Whistleblower Policy", cat: "Policies", size: "330 KB", date: "01 Apr 2026" },
  { name: "Donation & Refund Policy", cat: "Policies", size: "260 KB", date: "01 Apr 2026" },
];

export type Person = {
  name: string;
  role: string;
  group: "Board" | "Leadership" | "Programme" | "Advisory";
  since: string;
  bio: string;
  initials: string;
  tone: "teal" | "navy" | "orange" | "coral";
};

export const TEAM: Person[] = [
  {
    name: "Anjali Deshpande",
    role: "Founder & Managing Trustee",
    group: "Board",
    since: "2011",
    bio: "Former district education officer. Started the Foundation with a single reading room in Pimpalgaon and still spends one week a month in the field.",
    initials: "AD",
    tone: "teal",
  },
  {
    name: "Ramesh Kulkarni",
    role: "Chairperson, Board of Trustees",
    group: "Board",
    since: "2013",
    bio: "Chartered accountant in practice for 28 years. Chairs the audit and finance committee and signs off every quarterly utilisation statement.",
    initials: "RK",
    tone: "navy",
  },
  {
    name: "Dr. Farida Sheikh",
    role: "Trustee — Health Programmes",
    group: "Board",
    since: "2016",
    bio: "Consultant physician who designed the mobile camp protocol and the referral-closure system now used across all forty villages.",
    initials: "FS",
    tone: "coral",
  },
  {
    name: "Vikram Sathe",
    role: "Executive Director",
    group: "Leadership",
    since: "2018",
    bio: "Runs day-to-day operations across four programme verticals. Previously led rural delivery for a national livelihoods mission.",
    initials: "VS",
    tone: "navy",
  },
  {
    name: "Sneha Rane",
    role: "Head of Programmes",
    group: "Leadership",
    since: "2019",
    bio: "Owns programme design, monitoring and the outcome dashboards. Insists nothing is reported that has not been independently verified.",
    initials: "SR",
    tone: "orange",
  },
  {
    name: "Imran Qureshi",
    role: "Head of Finance & Compliance",
    group: "Leadership",
    since: "2020",
    bio: "Manages statutory filings, FCRA compliance and donor reporting. Publishes the quarterly statements on the tenth working day.",
    initials: "IQ",
    tone: "teal",
  },
  {
    name: "Meera Patil",
    role: "Manager — Education",
    group: "Programme",
    since: "2021",
    bio: "Trains and supervises the twelve library facilitators and runs the annual reading assessment with partner schools.",
    initials: "MP",
    tone: "coral",
  },
  {
    name: "Sagar Bhosale",
    role: "Manager — Environment",
    group: "Programme",
    since: "2020",
    bio: "Oversees watershed works and the five-year survival contracts with village self-help groups.",
    initials: "SB",
    tone: "teal",
  },
  {
    name: "Nazneen Shaikh",
    role: "Manager — Women's Enterprise",
    group: "Programme",
    since: "2022",
    bio: "Builds the employer panels that shape each cohort's curriculum, and tracks graduate income for twelve months after placement.",
    initials: "NS",
    tone: "orange",
  },
  {
    name: "Prof. Anil Marathe",
    role: "Advisor — Monitoring & Evaluation",
    group: "Advisory",
    since: "2017",
    bio: "Development economist. Designs our sampling method and reviews every impact claim before it is published.",
    initials: "AM",
    tone: "navy",
  },
  {
    name: "Kavita Joshi",
    role: "Advisor — Child Safeguarding",
    group: "Advisory",
    since: "2019",
    bio: "Child rights lawyer. Authored our child protection policy and conducts the annual safeguarding audit.",
    initials: "KJ",
    tone: "coral",
  },
];

export const MILESTONES = [
  {
    year: "2011",
    title: "Foundation registered",
    text: "Registered as a public charitable trust in Pune with three trustees and one reading room in Pimpalgaon.",
  },
  {
    year: "2014",
    title: "12A and 80G granted",
    text: "Tax exemption secured, opening the door to individual and corporate giving with statutory receipts.",
  },
  {
    year: "2016",
    title: "First health camp",
    text: "A borrowed van and four volunteer physicians ran the first camp in Marathwada — 212 consultations in two days.",
  },
  {
    year: "2018",
    title: "Quarterly reporting begins",
    text: "We moved from annual to quarterly fund-utilisation reporting, publishing unspent balances alongside spend.",
  },
  {
    year: "2020",
    title: "FCRA registration",
    text: "Cleared for foreign contribution, with a dedicated designated bank account and separate audit trail.",
  },
  {
    year: "2022",
    title: "Women's skill centre opens",
    text: "The Pune centre took its first cohort of sixty women, built around employer panels rather than fixed curricula.",
  },
  {
    year: "2024",
    title: "50,000 lives reached",
    text: "Cumulative direct beneficiaries across education, health, enterprise and environment programmes crossed fifty thousand.",
  },
  {
    year: "2026",
    title: "State CSR Conclave citation",
    text: "Recognised for financial transparency as a model practice for mid-sized non-profits.",
  },
];

export const AWARDS = [
  {
    title: "State CSR Conclave — Transparency Citation",
    body: "Government of Maharashtra",
    year: "2026",
  },
  {
    title: "Best Rural Health Initiative (Runner-up)",
    body: "Western India Health Forum",
    year: "2025",
  },
  { title: "GuideStar India — Platinum Certification", body: "GuideStar India", year: "2024" },
  { title: "Green Cover Award, Aurangabad District", body: "District Collectorate", year: "2023" },
  {
    title: "Literacy Champion — Institutional",
    body: "Zilla Parishad Education Department",
    year: "2022",
  },
  { title: "Credibility Alliance — Desirable Norms", body: "Credibility Alliance", year: "2021" },
];

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  summary: string;
  responsibilities: string[];
};

export const JOBS: Job[] = [
  {
    slug: "programme-officer-education",
    title: "Programme Officer — Education",
    team: "Programmes",
    location: "Nashik (field-based)",
    type: "Full-time",
    experience: "3-5 years",
    summary:
      "Supervise eight village libraries, coach facilitators and run the termly reading assessment with partner schools.",
    responsibilities: [
      "Weekly field visits to assigned libraries and monthly facilitator coaching sessions",
      "Administer and quality-check the termly reading assessment",
      "Maintain the panchayat handover schedule and maintenance grant records",
    ],
  },
  {
    slug: "referral-coordinator",
    title: "Referral Coordinator — Mobile Health",
    team: "Health",
    location: "Aurangabad",
    type: "Full-time",
    experience: "2+ years",
    summary:
      "Follow every camp referral by phone until the case is closed or escalated, and keep the closure dashboard current.",
    responsibilities: [
      "Track each referral from camp to hospital admission or closure",
      "Coordinate transport and paperwork with the district civil hospital",
      "Flag repeat cases and drop-offs to the programme manager weekly",
    ],
  },
  {
    slug: "finance-associate",
    title: "Finance & Compliance Associate",
    team: "Finance",
    location: "Pune (office)",
    type: "Full-time",
    experience: "2-4 years",
    summary:
      "Support statutory filings, FCRA returns and the quarterly utilisation statements published on this site.",
    responsibilities: [
      "Prepare project-wise utilisation workings for quarterly publication",
      "Maintain donor receipts, 80G issuance and the donation ledger",
      "Assist the statutory and internal auditors through the annual cycle",
    ],
  },
  {
    slug: "communications-intern",
    title: "Communications Intern",
    team: "Communications",
    location: "Pune / hybrid",
    type: "Internship",
    experience: "Students & freshers",
    summary:
      "Six-month paid internship writing field reports, editing photo stories and maintaining the newsroom.",
    responsibilities: [
      "Draft field reports from programme visits with the programme teams",
      "Caption and archive field photography under the consent protocol",
      "Support the monthly donor newsletter",
    ],
  },
];

export const PRESS_ITEMS = [
  {
    outlet: "The Indian Express",
    title: "Twelve village libraries, one stubborn idea",
    date: "12 July 2026",
    kind: "Feature",
  },
  {
    outlet: "Lokmat",
    title: "मराठवाड्यात फिरता दवाखाना: ४० गावांचा मासिक दौरा",
    date: "28 June 2026",
    kind: "Report",
  },
  {
    outlet: "Hindustan Times (Pune)",
    title: "NGO cited for transparency at state CSR conclave",
    date: "3 July 2026",
    kind: "News",
  },
  {
    outlet: "Sakal",
    title: "पुण्यातील कौशल्य केंद्रातून ६२० महिलांना रोजगार",
    date: "19 May 2026",
    kind: "Report",
  },
  {
    outlet: "The Hindu",
    title: "What survives three monsoons: rethinking plantation drives",
    date: "2 April 2026",
    kind: "Opinion",
  },
  {
    outlet: "Mid-Day",
    title: "Relief reserves: preparing before the flood alert",
    date: "17 March 2026",
    kind: "News",
  },
];
