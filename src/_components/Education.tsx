import { FC } from "react";

const Versity: FC = () => {
  return (
    <div className="flex justify-start mt-15">
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
    <div className="flex justify-end mt-5">
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
    <section className=" p-20">
      <h2 className="text-balance text-4xl font-semibold lg:text-5xl flex justify-center">
        Education
      </h2>
      {/* Cards */}
      <Versity />
      <College />
    </section>
  );
};

export default Education;
