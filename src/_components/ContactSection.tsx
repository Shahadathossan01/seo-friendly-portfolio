import React from "react";
import ContactForm from "@/components/contact";

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
    <section id="contact" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-3" data-aos="fade-up">
          Contact
        </h3>
        <div className="w-40 h-1 mx-auto bg-primary mb-3"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div
            className="bg-gray-900 text-white rounded-xl p-8 flex flex-col justify-center shadow-lg"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
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
