import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-6 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#c0823b] text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Have a question, feedback, or bulk inquiry? We’d love to hear from you.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhone className="text-[#c0823b] text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#c0823b] text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">support@royaltraders.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#c0823b] text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Office Address</h4>
                <p className="text-sm text-gray-600">
                  123, Trade Tower, Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-[#f8f8f8] p-6 rounded-xl shadow">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#c0823b] text-white py-2 px-6 rounded-lg hover:bg-[#a56e30] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
