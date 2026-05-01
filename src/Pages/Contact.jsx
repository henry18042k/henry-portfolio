
import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
// Đã xóa import Komentar
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    try {
      const formSubmitUrl = 'https://formsubmit.co/lytran18042k@gmail.com'; // Nhớ đổi email này nhé Henry
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'New Message from Portfolio - Henry Ly');
      submitData.append('_captcha', 'false');

      await axios.post(formSubmitUrl, submitData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] mb-10">
      {/* Header */}
      <div className="text-center lg:mt-[5%] mt-10 mb-2">
        <h2 data-aos="fade-down" className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Get In Touch
        </h2>
        <p data-aos="fade-up" className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Have a question or want to discuss a project? Send me a message!
        </p>
      </div>

      <div className="h-auto py-10 flex items-center justify-center" id="Contact">
        {/* Căn giữa và giới hạn chiều rộng tối đa để form không bị quá to khi bỏ comment */}
        <div className="container max-w-4xl px-[1%]">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 border border-white/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Contact Me
                </h2>
                <p className="text-gray-400">
                  Feel free to reach out. I'll get back to you as soon as possible.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="100" className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1]" />
                <input
                  type="text" name="name" placeholder="Your Name"
                  value={formData.name} onChange={handleChange}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all"
                  required
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1]" />
                <input
                  type="email" name="email" placeholder="Your Email"
                  value={formData.email} onChange={handleChange}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all"
                  required
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1]" />
                <textarea
                  name="message" placeholder="Your Message"
                  value={formData.message} onChange={handleChange}
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 h-[10rem] transition-all"
                  required
                />
              </div>
              <button
                type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Social Links nằm gọn bên dưới form */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;