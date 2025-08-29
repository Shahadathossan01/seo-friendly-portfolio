import Image from "next/image";

const relivantSkills = [
  { logo: "/html.webp", name: "HTML" },
  { logo: "/css.png", name: "CSS" },
  { logo: "/javaScriptpng.webp", name: "JavaScript" },
  { logo: "/reactJsLogo.png", name: "React" },
  { logo: "/reactRouterDom.png", name: "React Router Dom" },
  { logo: "/rhf.png", name: "React Hook Form" },
  { logo: "/redux.png", name: "Redux" },
  { logo: "/easy peasy.png", name: "Easy-Peasy" },
  { logo: "/bootstrap.png", name: "Boostrap" },
  { logo: "/tailwind.png", name: "Tailwind-css" },
  { logo: "/material.png", name: "Material-Ui" },
  { logo: "/restapi.png", name: "Rest Api" },
  { logo: "/mongodb.png", name: "Mongodb" },
  { logo: "/mongoose.png", name: "Mongoose" },
  { logo: "/express.webp", name: "Express" },
  { logo: "/nodejs.png", name: "Node.js" },
  { logo: "/firebase.png", name: "Firebase" },
  { logo: "/strapi.png", name: "Strapi" },
  { logo: "/github.png", name: "Github" },
  { logo: "/vscode.png", name: "VScode" },
  { logo: "/jest.png", name: "Jest" },
  { logo: "/react testing library.png", name: "React Testing Library" },
  { logo: "/postman.png", name: "Postman" },
  { logo: "/swagger.png", name: "Swagger" },
  { logo: "/docker.png", name: "Docker" },
  { logo: "/docker-compoose.png", name: "Docker Compoose" },
];

export default function LogoCloud() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">Relivant Skills</h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          {relivantSkills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Image
                className="h-10 w-fit dark:invert rounded-2xl"
                src={item.logo}
                alt="Nvidia Logo"
                height="100"
                width="100"
              />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
