import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "I deliver end-to-end full-stack development — from responsive frontend design to scalable backend systems and databases.",
    logo: "/fullStackLogo.png",
  },
  {
    title: "Backend (REST API) Development",
    description:
      "I build scalable backends with Node.js, Express, and MongoDB — delivering secure, high-performance APIs and reliable database solutions for seamless integration.",
    logo: "/backendLogo.png",
  },
  {
    title: "React.js Frontend",
    description:
      "I build dynamic frontend solutions using React.js that update in real-time, ensuring your web applications display data seamlessly and interactively. Delivering fast, responsive, and engaging user experiences, we turn your ideas into high-performance interfaces that adapt to your users’ needs.",
    logo: "/reactJsLogo.png",
  },
  {
    title: "SEO-Friendly Next.js Websites",
    description:
      "Professional Next.js SEO optimization to make your website faster, more search-engine-friendly, and highly discoverable. Enhance rankings, attract organic traffic, and ensure your web application reaches its full potential.",
    logo: "/next-js.svg",
  },
  {
    title: "Responsive Design",
    description:
      "I create fully responsive websites that look and perform perfectly on any device. From desktops to smartphones, your site will deliver a seamless and engaging user experience, ensuring your audience can access your content anytime, anywhere.",
    logo: "/responsiveLogo.png",
  },
  {
    title: "VPS Deployment",
    description:
      "Professional VPS deployment services — I set up, configure, and optimize your server so your web applications run securely, efficiently, and without downtime.",
    logo: "/vpsLogo.png",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
            repellendus.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {services.map((item, index) => (
            <Card key={index} className="group shadow-zinc-950/5">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Image
                    src={item.logo}
                    alt="My Logo"
                    width={50}
                    height={50}
                    className="size-6"
                  />
                </CardDecorator>

                <h3 className="mt-6 font-medium">{item.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
