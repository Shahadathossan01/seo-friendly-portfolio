import React from "react";
import Link from "next/link";
// import { GitHubIcon, LinkIcon, BuildIcon } from "@/components/icons"; // Replace with your icons

interface Project {
  name: string;
  description: string;
  image: string; // URL or imported image
  liveUrl: string;
  gitHubLink?: string | null;
  duration: number;
  tackStack: string[];
  features: { title: string }[];
}

const ProjectCard: React.FC = () => {
  const projects: Project[] = [
    {
      name: "Sureline Health",
      description:
        "SurelineHealth.com is a full-featured healthcare management web application built using the MERN stack. It streamlines the digital consultation process by connecting patients, doctors, and health hubs through a secure, role-based system. From online appointments to real-time video consultations and prescription sharing, the platform ensures an efficient healthcare experience for all user types.",
      image: "/project-surelineHealth.png",
      liveUrl: "https://www.surelinehealth.com/",
      gitHubLink: null,
      duration: 6,
      tackStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "React Router",
        "Context API",
        "React Hook Form",
        "Material-Ui",
        "JWT Authentication",
        "Multer",
        "Cloudinary",
        "SSLCommerz",
        "Easy-peasy",
      ],
      features: [
        {
          title:
            "JWT-based authentication system with role-based access control",
        },
        { title: "Four user roles: Patient, Doctor, HealthHub, and Admin" },
        {
          title:
            "Patients, healthHubs and doctors can register; doctors must be approved by admin",
        },
        { title: "Dedicated dashboards for Admin and Doctor." },
        {
          title:
            "Patient and HealthHub can manage all activities from profile section.",
        },
        {
          title:
            "Appointment booking by Patient or HealthHub with doctor approval",
        },
        {
          title:
            "Real-time video consultation system based on schedule and slot",
        },
        { title: "Doctors can generate prescriptions after consultation" },
        { title: "Patients and HealthHubs can view prescriptions securely" },
        { title: "Admin & HealthHub can generate promo codes" },
        { title: "Patient gets 10% discount when using promo code." },
        {
          title:
            "HealthHub receives 20% reward if anyone uses their promo code.",
        },
        {
          title:
            "Admin-only forced password reset feature for enhanced control",
        },
        {
          title:
            "Admin can monitor all user and appointment activity in one place",
        },
      ],
    },
    {
      name: "Library Management System",
      description:
        "A complete web application to manage library books, users, reviews, and book issues. Users can explore the list of books, provide reviews, and issue books, while admins have full control over book, user, and review management.",
      image: "/lms.png",
      liveUrl: "#",
      gitHubLink: "#",
      duration: 8,
      tackStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Swagger",
      ],
      features: [
        { title: "Secure Authentication" },
        { title: "User & Role Management" },
        { title: "Book Management" },
        { title: "Review System" },
        { title: "Book Issue Tracking" },
        { title: "Private Routes" },
      ],
    },
    {
      name: "Employee Management System",
      description:
        "A role-based web application where admins can manage employees and tasks. Employees can log in, view assigned tasks, submit results with files/images, and receive feedback from admins. The system ensures smooth communication and task tracking between admin and employees.",
      image: "/emsPhoto.png",
      liveUrl: "#",
      gitHubLink: "#",
      duration: 7,
      tackStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Multer",
      ],
      features: [
        { title: "Role-Based Authentication" },
        { title: "Employee Management" },
        { title: "Task Assignment" },
        { title: "Task Submission" },
        { title: "Feedback System" },
        { title: "Employee Dashboard" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Image Section */}
          <div
            className="h-72 bg-top bg-cover transition-all duration-[4000ms] hover:bg-bottom"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>

          {/* Content Section */}
          <div className="p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center">
              {index + 1}. {project.name}
            </h2>

            <p className="text-gray-300">{project.description}</p>

            {/* Links */}
            <div className="flex justify-evenly items-center mt-4">
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-white hover:text-green-400"
              >
                {/* <LinkIcon className="w-6 h-6" />  */}
                Live Link
              </Link>

              {project.gitHubLink ? (
                <Link
                  href={project.gitHubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:text-blue-400"
                >
                  {/* <GitHubIcon className="w-5 h-5" />  */}
                  Source Code
                </Link>
              ) : (
                <span className="flex items-center gap-2 text-gray-500 cursor-not-allowed">
                  {/* <GitHubIcon className="w-5 h-5" />  */}
                  Private Project
                </span>
              )}
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2">
                {/* <BuildIcon className="w-5 h-5" /> */}
                <span className="font-bold text-white">Tech Stack:</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tackStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-white rounded-full text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-white mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
