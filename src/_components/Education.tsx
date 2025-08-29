import { FC } from "react";

const Versity: FC = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      className="flex justify-start mt-5"
    >
      <div className="bg-[#191b1f] text-white p-5 max-w-xl rounded-lg shadow-lg">
        <h3 className="text-lg font-bold">
          B.Sc. in Computer Science and Engineering
        </h3>
        <p className="text-gray-300">
          Gono Bishwabidyalay, Savar, Dhaka, Bangladesh.
        </p>
        <p className="text-gray-400 text-sm">2019 – 2024</p>
      </div>
    </div>
  );
};

const College: FC = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="flex justify-end mt-5"
    >
      <div className="bg-[#191b1f] text-white p-5 max-w-xl rounded-lg shadow-lg">
        <h3 className="text-lg font-bold">
          Higher Secondary Certificate (HSC) – Science
        </h3>
        <p className="text-gray-300">
          Pakundia Govt. College, Kishoreganj, Dhaka, Bangladesh.
        </p>
        <p className="text-gray-400 text-sm">2016 – 2018</p>
      </div>
    </div>
  );
};

const Education: FC = () => {
  return (
    <section className="my-12 px-4">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mt-16"
      >
        Education
      </h2>
      <div className="w-52 h-[3px] bg-blue-600 mx-auto my-3"></div>

      {/* Cards */}
      <Versity />
      <College />
    </section>
  );
};

export default Education;
