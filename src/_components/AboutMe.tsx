"use client";

import { FC } from "react";
import { useTheme } from "next-themes";

type ProblemSolution = {
  id: number;
  title: string;
  problem: string;
  solution: string;
  extraInsight?: string;
};

const problemsAndSolutions: ProblemSolution[] = [
  {
    id: 1,
    title: "Performance Issue in REST API",
    problem:
      "While building a REST API with Node.js, Express, and MongoDB, the API response time was very slow when handling large datasets.",
    solution:
      "I implemented pagination and added MongoDB indexing to optimize query performance. This significantly reduced load times.",
    extraInsight:
      "I also explored query optimization, lean queries in Mongoose, and considered using Redis caching for further performance improvements.",
  },
  {
    id: 2,
    title: "Authentication Security Issue",
    problem:
      "Initially, I used JWT authentication without email verification, which created potential security risks.",
    solution:
      "I integrated email verification using Nodemailer with SMTP. Now, only verified users can access their accounts, improving security.",
    extraInsight:
      "I also applied best practices like password hashing with bcrypt, refresh tokens, and role-based access control (RBAC).",
  },
  {
    id: 3,
    title: "Choosing the Right Framework for SEO & Performance",
    problem:
      "Most of my early projects were built with React.js. While great for dashboards and frequently updated data, it was not suitable for SEO and rarely changing content like blogs or portfolios.",
    solution:
      "I switched to Next.js and leveraged SSR, SSG, and ISR to build fast, SEO-friendly, and scalable websites.",
    extraInsight:
      "I also used image optimization, code splitting, and metadata handling in Next.js to further boost performance and SEO rankings.",
  },
];

const AboutMe: FC = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      id="about"
      className={`w-full py-20 ${
        resolvedTheme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {/* Heading */}
      <h2 className="text-balance text-4xl font-semibold lg:text-5xl flex justify-center">
        About
      </h2>

      {/* Sub Title */}
      <p className="text-center mt-2 ">
        Things You Should Know About My Engineering DNA
      </p>

      {/* Intro Section */}
      <MyIntro />
    </section>
  );
};

const MyIntro: FC = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-15 ">
        {/* Left Side Box */}
        <div className="md:col-span-3 flex justify-center items-center">
          <div className="bg-[#191b1f] text-gray-300 w-100 p-4 rounded-lg flex flex-col gap-2 shadow-lg">
            <p>Residence: Bangladesh</p>
            <p>District: Dhaka</p>
            <p>City: Kishoreganj</p>
            <p>Experience: 3+ Years (Professional)</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-9 flex justify-center">
          <div className="ml-0 md:ml-16 tracking-wide leading-relaxed max-w-3xl">
            <p className="mt-2">
              Assalamu Alaykum, I’m Sahadat Hosen. I hold a B.Sc. in Computer
              Science & Engineering from Gono Bishwabidyalay, Savar, Dhaka.
              {/* I am a passionate Full-Stack Web Developer with over 3 years of
              experience, specialising in the{" "}
              <strong className="text-yellow-400">MERN stack</strong> (MongoDB,
              Express.js, React, and Node.js). I hold a B.Sc. in Computer
              Science and Engineering and enjoy building scalable web
              applications that solve real-world problems. With a focus on clean
              code, performance, and user experience, I’m always eager to learn,
              grow, and contribute to impactful software projects. */}
            </p>
            <p className="mt-2">
              I am a Full Stack Web Developer specializing in the MERN Stack —
              MongoDB, Express.js, React.js, and Node.js. Also use Node.js for
              best SEO Friendly Website I build production-ready, scalable
              applications using clean code and user-focused design principles.
            </p>
            <p className="mt-2">
              My strong frontend skills include JavaScript (ES6+), TypeScript,
              React.js, Redux, Next.js, Tailwind CSS, and Material-UI, enabling
              me to craft responsive and high-performance user interfaces. On
              the backend, I utilize Node.js, Express.js, MongoDB, Mongoose, API
              Documentation (Swagger, Postman) and REST API development to
              create secure and optimized server-side solutions.
            </p>
            <p className="mt-2">
              I have experience delivering full-stack web applications,
              including eCommerce platforms, admin dashboards, API integrations,
              and real-time applications. My development process covers project
              planning, database design, authentication (JWT), API development,
              deployment, and performance optimization.
            </p>

            {/* Skills / Highlights */}
            {/* <div className="mt-6 flex flex-col gap-3">
              <Highlight
                text={
                  <>
                    <strong className="text-orange-400">3+</strong> years of
                    hands-on experience
                  </>
                }
                aos="flip-left"
                duration={2000}
              />
              <Highlight text="Eager learner & problem solver" aos="fade-up" />
              <Highlight
                text={
                  <>
                    Builds{" "}
                    <strong className="text-yellow-400">50+ MERN Stack</strong>{" "}
                    Projects
                  </>
                }
                aos="fade-up"
                duration={2000}
              />
              <Highlight
                text={
                  <>
                    Solved{" "}
                    <strong className="text-yellow-400">100+ JavaScript</strong>{" "}
                    problems on HackerRank
                  </>
                }
                aos="fade-up"
                duration={3000}
              />
              <Highlight text="Comfortable with Git & GitHub" aos="fade-up" />
              <Highlight text="Integrated third-party services" aos="fade-up" />
              <Highlight text="Deployed full-stack projects" aos="fade-up" />
              <Highlight
                text={
                  <>
                    Practicing Data Structures & Algorithms{" "}
                    <strong className="text-orange-400">(DSA)</strong>
                  </>
                }
                aos="fade-up"
                duration={7000}
              />
              <Highlight
                text={
                  <>
                    Strong grasp of Object-Oriented Programming{" "}
                    <strong className="text-orange-400">(OOP)</strong>
                  </>
                }
                aos="fade-up"
                duration={8000}
              />
              <Highlight
                text="Strong debugging and testing skills"
                aos="fade-up"
                duration={9000}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="divide-y divide-dashed mt-30">
        <h2 className="text-balance text-2xl font-semibold ">
          Problems I Faced & How I Solved Them
        </h2>
        {problemsAndSolutions.map((item, index) => (
          <div key={index} className="pb-6 pt-10">
            <h3 className="font-medium">{item.title}</h3>
            {/* <p className="mt-4">
                    We offer a 30-day money back guarantee. If you are not
                    satisfied with our product, you can request a refund within
                    30 days of your purchase.
                  </p> */}

            <ol className="list-outside list-decimal space-y-2 pl-4">
              <li className="mt-4">Problem: {item.problem}</li>
              <li className="mt-4">Solution: {item.solution}</li>
              <li className="mt-4">Extra Insight: {item.extraInsight}</li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
