export interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  demo?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  certificate?: string;
  images: string[];
  imageDescriptions?: string[];
  imageCarousel?: boolean;
  featuredVideo?: boolean;
}

export const projects: Project[] = [
  {
    title: "College Canteen Ordering App",
    role: "Team Lead • Flutter Developer",
    description:
      "A Flutter-based canteen ordering app with real-time order tracking, QR pickup, Razorpay payment flow, Firebase backend, and cart persistence.",
    technologies: ["Flutter", "Dart", "Firebase", "Razorpay", "Hive"],
    demo: "https://www.youtube.com/embed/GvpodO7-AQc",
    certificate:
      "https://psapi.kmitonline.com/studentps/certificate/bf8ca6ee-c472-40e3-92cb-8251dfc81b58",
    images: [],
    featuredVideo: true,
  },
  {
    title: "Signature Verification System",
    role: "Full Stack Developer",
    description:
      "A MERN application integrated with a Python deep learning model for automated signature verification, image preprocessing, and model inference.",
    technologies: ["React", "Node.js", "MongoDB", "Python", "Machine Learning"],
    liveUrl: "https://signature-verification-mqtk.onrender.com",
    repositoryUrl:
      "https://github.com/Vinay-Shankar-Adepu/Signature-Verification.git",
    images: [
      "/images/projects/Signature_verification/0.png",
      "/images/projects/Signature_verification/1.png",
      "/images/projects/Signature_verification/2.png",
      "/images/projects/Signature_verification/3.png",
      "/images/projects/Signature_verification/4.png",
      "/images/projects/Signature_verification/5.png",
      "/images/projects/Signature_verification/6.png",
      "/images/projects/Signature_verification/7.png",
    ],
    imageDescriptions: [
      "Secure login screen with email, password, and social authentication options.",
      "Landing page introducing fast, AI-powered signature analysis.",
      "Platform highlights covering neural analysis, fast results, and privacy.",
      "Gallery of trained signature models with accuracy and sample insights.",
      "User profile dashboard with verification statistics and recent activity.",
      "Verification workspace for selecting a user and uploading a signature.",
      "Successful genuine-signature result with an authenticity score and forensic suggestions.",
      "Verification history with summary metrics, filters, export tools, and past results.",
    ],
    imageCarousel: true,
  },
  {
    title: "LocalHands",
    role: "Team Lead • Full Stack Developer",
    description:
      "A full-stack service booking platform connecting customers with service providers through listings, bookings, user management, and role-based access.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    liveUrl: "https://localhands-45.vercel.app/",
    repositoryUrl:
      "https://github.com/Vinay-Shankar-Adepu/Local-Hands-01.git",
    images: [
      "/images/projects/Local_hands/1.jpeg",
      "/images/projects/Local_hands/2.jpeg",
      "/images/projects/Local_hands/3.jpeg",
      "/images/projects/Local_hands/4.jpeg",
      "/images/projects/Local_hands/5.jpeg",
      "/images/projects/Local_hands/6.jpeg",
      "/images/projects/Local_hands/7.jpeg",
    ],
    imageDescriptions: [
      "Customer booking history with payment status, bills, and provider ratings.",
      "Sign-in screen supporting email, WhatsApp, and Google authentication.",
      "Customer dashboard for browsing, filtering, and booking nearby services.",
      "Provider dashboard for managing live offers, active bookings, and billing.",
      "Razorpay checkout with UPI, cards, net banking, wallet, and pay-later options.",
      "Customer profile with contact details, address controls, and an interactive map.",
      "Admin dashboard with booking analytics, quick service creation, and catalog management.",
    ],
    imageCarousel: true,
  },
  {
    title: "Disaster Response Platform",
    role: "Team Lead • Flutter Developer",
    description:
      "A disaster management application supporting SOS alerts, volunteer coordination, shelter discovery, resource requests, and live emergency assistance.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Cloud Functions"],
    demo: "https://www.youtube.com/embed/GvpodO7-AQc",
    certificate:
      "https://psapi.kmitonline.com/studentps/certificate/3b35953b-60c2-487a-bb2f-d5de2326d971",
    images: [
      "/images/projects/disaster-response/disaster.jpeg",
      "/images/projects/disaster-response/disaster1.jpeg",
      "/images/projects/disaster-response/disaster2.jpeg",
      "/images/projects/disaster-response/disaster3.jpeg",
      "/images/projects/disaster-response/disaster4.jpeg",
    ],
    imageDescriptions: [
      "Victim dashboard with SOS actions, resource requests, nearby shelters, and safe zones.",
      "Emergency login screen with an option to send an SOS without signing in.",
      "Volunteer dashboard mapping active requests and tracking aid distribution updates.",
      "Emergency SOS screen for requesting medical help, rescue, or food and water.",
      "Safety map showing danger zones, the user's location, and the nearest shelters.",
    ],
    imageCarousel: true,
  },
];
