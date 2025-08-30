import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-35 pt-12 md:pb-32 lg:pb-30 lg:pt-44">
            <div className="mx-auto flex max-w-6xl flex-col items-center px-6 lg:flex-row lg:items-center">
              {/* Left side text */}
              <div className="max-w-lg text-center lg:mr-auto lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl xl:text-7xl">
                  Hi, I am <span className="text-blue-500">Sahadat Hosen</span>
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Full Stack Developer || MERN Stack Specialist || Fimilior with
                  SEO-FRIENDLY Next.js
                </p>

                <div className="mt-12 flex flex-col items-center justify-evenly gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-3 text-base">
                    <a
                      href="https://github.com/user-attachments/files/22057446/Sahadat_Hosen_Resume.pdf"
                      download="Sahadat_Hosen_Resume.pdf"
                    >
                      <span className="text-nowrap">Download Resume</span>
                    </a>
                  </Button>

                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    <a
                      href="https://calendly.com/sahadathosen-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4 className="font-bold">Book 1:1 Call</h4>
                    </a>
                  </Button>
                  <Button variant="link">
                    <Link href="/">
                      <h4>Video Resume</h4>
                    </Link>
                  </Button>
                </div>
                <div className="flex"></div>
              </div>

              {/* Right side image */}
              <div className="mt-12 flex justify-center lg:mt-0 lg:w-1/2 lg:justify-center">
                <Image
                  src="/topu.png"
                  alt="Abstract Object"
                  height={400}
                  width={400}
                  className="h-auto max-w-lg object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background pb-5 md:pb-20">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <h4 className="text-lg font-bold">Connect with me!</h4>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={10} speed={40} gap={112}>
                  <div className="flex">
                    <Link target="_blank" href="https://www.facebook.com/">
                      FACEBOOK
                    </Link>
                  </div>
                  <div className="flex">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/sahadathosendev"
                    >
                      LINKEDIN
                    </Link>
                  </div>
                  <div className="flex">
                    <Link
                      target="_blank"
                      href="https://github.com/Shahadathossan01"
                    >
                      GITHUB
                    </Link>
                  </div>
                  <div className="flex">
                    <Link target="_blank" href="">
                      TWITER
                    </Link>
                  </div>
                  <div className="flex">
                    <Link target="_blank" href="">
                      YOUTUBE
                    </Link>
                  </div>
                  <div className="flex">
                    <Link target="_blank" href="">
                      INSTRAGRAM
                    </Link>
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
