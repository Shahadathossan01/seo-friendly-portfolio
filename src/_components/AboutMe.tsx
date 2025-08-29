import { FC, ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

const AboutMe: FC = () => {
  return (
    <section id="about" className="w-full py-20">
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center"
      >
        About Me
      </h2>

      {/* Divider */}
      <div className="w-52 h-[3px] bg-blue-600 mx-auto my-3"></div>

      {/* Sub Title */}
      <p className="text-center mt-2 text-gray-400">
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Side Box */}
        <div className="md:col-span-3 flex justify-center">
          <div
            data-aos="zoom-in-down"
            className="bg-[#191b1f] text-gray-300 w-48 p-4 rounded-lg flex flex-col gap-4 shadow-lg"
          >
            <p>Residence: Bangladesh</p>
            <p>District: Dhaka</p>
            <p>City: Kishoreganj</p>
            <p>Experience: 3+ Years (Professional)</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-9 flex justify-center">
          <div className="ml-0 md:ml-16 tracking-wide leading-relaxed max-w-3xl">
            <p className="text-gray-300">
              I am a passionate Full-Stack Web Developer with over 3 years of
              experience, specialising in the{" "}
              <strong className="text-yellow-400">MERN stack</strong> (MongoDB,
              Express.js, React, and Node.js). I hold a B.Sc. in Computer
              Science and Engineering and enjoy building scalable web
              applications that solve real-world problems. With a focus on clean
              code, performance, and user experience, I’m always eager to learn,
              grow, and contribute to impactful software projects.
            </p>

            {/* Skills / Highlights */}
            <div className="mt-6 flex flex-col gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Props typing for Highlight component
interface HighlightProps {
  text: ReactNode;
  aos?: string;
  duration?: number;
}

const Highlight: FC<HighlightProps> = ({ text, aos, duration }) => (
  <p
    data-aos={aos}
    data-aos-duration={duration?.toString() || "1000"}
    className="text-sm md:text-base text-gray-400 flex items-center gap-2"
  >
    <CheckCircle2 className="text-blue-500 w-5 h-5" />
    {text}
  </p>
);

export default AboutMe;
