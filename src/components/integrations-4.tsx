import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StatsSection from "./stats";
import Image from "next/image";
import LogoCloud from "./logo-cloud";

export default function IntegrationsSection() {
  return (
    <section id="skills">
      <div className="bg-muted dark:bg-background py-20">
        <div className="mx-auto max-w-lg space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            SKILLS
          </h2>
          <p className="text-muted-foreground">This is my Development Stack.</p>

          <Button variant="outline" size="sm" asChild>
            <Link href="#">Full Stack Developer</Link>
          </Button>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-5">
          <div className="relative mx-auto flex max-w-sm items-center justify-between">
            <div className="space-y-6">
              <IntegrationCard position="left-top">
                <Image
                  src="/reactJsLogo.png" // put file in /public/
                  alt="React.js Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </IntegrationCard>
              <IntegrationCard position="left-middle">
                <Image
                  src="/nextJsLogo2.png" // put file in /public/logos/
                  alt="My Custom Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </IntegrationCard>
              <IntegrationCard position="left-bottom">
                <Image
                  src="/tailwind.png" // put file in /public/logos/
                  alt="My Custom Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-2xl border p-1">
                <IntegrationCard
                  className="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
                  isCenter={true}
                >
                  <Image
                    src="/fullStackLogo.png" // put file in /public/logos/
                    alt="My Custom Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                </IntegrationCard>
              </div>
            </div>
            <div
              role="presentation"
              className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
            ></div>

            <div className="space-y-6">
              <IntegrationCard position="right-top">
                <Image
                  src="/nodejs.png" // put file in /public/logos/
                  alt="My Custom Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </IntegrationCard>
              <IntegrationCard position="right-middle">
                <Image
                  src="/express.webp" // put file in /public/logos/
                  alt="My Custom Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </IntegrationCard>
              <IntegrationCard position="right-bottom">
                <Image
                  src="/mongodb.png" // put file in /public/logos/
                  alt="My Custom Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </IntegrationCard>
            </div>
          </div>
        </div>
        <LogoCloud></LogoCloud>
        <StatsSection></StatsSection>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  position,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-12 rounded-xl border dark:bg-transparent",
        className
      )}
    >
      <div
        className={cn(
          "relative z-20 m-auto size-fit *:size-6",
          isCenter && "*:size-8"
        )}
      >
        {children}
      </div>
      {position && !isCenter && (
        <div
          className={cn(
            "bg-linear-to-r to-muted-foreground/25 absolute z-10 h-px",
            position === "left-top" &&
              "left-full top-1/2 w-[130px] origin-left rotate-[25deg]",
            position === "left-middle" &&
              "left-full top-1/2 w-[120px] origin-left",
            position === "left-bottom" &&
              "left-full top-1/2 w-[130px] origin-left rotate-[-25deg]",
            position === "right-top" &&
              "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[-25deg]",
            position === "right-middle" &&
              "bg-linear-to-l right-full top-1/2 w-[120px] origin-right",
            position === "right-bottom" &&
              "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[25deg]"
          )}
        />
      )}
    </div>
  );
};
