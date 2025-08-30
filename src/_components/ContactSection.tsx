import React from "react";
import ContactForm from "@/components/contact";
import Link from "next/link";

interface SocialLink {
  name: string;
  href: string;
}

const ContactSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "YouTube", href: "#" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="text-center">
        <h2 className="text-balance text-4xl font-semibold lg:text-5xl flex justify-center">
          Contact
        </h2>
      </div>

      <div className="container mx-auto px-4 pt-15">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div className="bg-gray-900 text-white rounded-xl p-8 flex flex-col justify-center shadow-lg">
            <h4 className="text-3xl font-bold mb-2">Don’t Say,</h4>
            <h5 className="text-2xl mb-4 pl-4">I Am Free!!</h5>
            <p className="text-center text-lg mb-6" data-aos="zoom-in">
              Get In Touch!
            </p>

            <div className="space-y-1 mb-4">
              <p>
                📞 Phone: <strong>+8808743837489</strong>
              </p>
              <p>
                ✉️ Email: <strong>sahadathosen.dev@gmail.com</strong>
              </p>
              <p>
                📍 Address: <strong>Kishoreganj, Dhaka, Bangladesh</strong>
              </p>
              <Link
                href="https://calendly.com/sahadathosen-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-green-500 hover:text-green-600">
                  Book 1:1 Call
                </h4>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform duration-300 hover:scale-150"
                  title={link.name}
                ></a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
