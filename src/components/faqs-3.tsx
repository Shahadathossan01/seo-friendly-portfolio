"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";
import { Button } from "./ui/button";

type FAQItem = {
  id: string;
  icon: IconName; // ✅ stays typed correctly
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "code",
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as Next.js for server-side rendering, Tailwind CSS for styling, and TypeScript for type-safe development. I am also familiar with RESTful APIs, GraphQL, and Firebase integration.",
    },
    {
      id: "item-2",
      icon: "database",
      question: "How do you handle database management?",
      answer:
        "I work primarily with MongoDB for NoSQL databases and have experience designing schemas, indexing for performance, and implementing Mongoose for data modeling. I also have experience with SQL databases like MySQL and PostgreSQL depending on project requirements.",
    },
    {
      id: "item-3",
      icon: "shield",
      question: "How do you ensure application security?",
      answer:
        "I implement JWT-based authentication, role-based access control, password hashing, and HTTPS for secure connections. Additionally, I validate inputs, sanitize data, and follow best practices to prevent common vulnerabilities like XSS, CSRF, and SQL injection.",
    },
    {
      id: "item-4",
      icon: "clock",
      question: "How do you optimize application performance?",
      answer:
        "I use techniques like lazy loading, code splitting, server-side rendering (SSR), caching strategies, and efficient database queries. I also monitor performance with tools like Lighthouse and optimize images and assets to reduce load times.",
    },
    {
      id: "item-5",
      icon: "cloud",
      question: "Do you deploy and maintain applications?",
      answer:
        "Yes, I deploy applications using platforms like Vercel, Netlify, and AWS. I also handle CI/CD pipelines, environment configuration, monitoring, and bug fixes to ensure smooth operation post-launch.",
    },
    {
      id: "item-6",
      icon: "package",
      question: "How do you manage state in front-end applications?",
      answer:
        "I use state management libraries such as Redux, Zustand, and Easy-Peasy for complex state scenarios. For simpler cases, I rely on React's Context API and Hooks like useState and useReducer.",
    },
    {
      id: "item-7",
      icon: "globe",
      question: "Can you work with third-party APIs and integrations?",
      answer:
        "Absolutely. I have experience integrating RESTful APIs, GraphQL APIs, and services like Firebase, Stripe, Cloudinary, and social login providers. I handle authentication, data fetching, and error handling efficiently.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Not finding what you need? I am always open to conversations.
                <Link
                  href="https://calendly.com/sahadathosen-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="font-bold text-green-500 hover:text-green-600">
                    Book 1:1 Call
                  </h4>
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon} // ✅ now works fine
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
