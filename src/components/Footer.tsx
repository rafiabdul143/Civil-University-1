import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">Buniyaad</h2>
          <p className="text-sm text-gray-400 mt-3">
            Building Strong Foundations for Future Innovators.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/construpedia" className="hover:text-white transition">Construpedia</a></li>
            <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/17gSqpJXHX/
" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com/buniyaadec?igsh=N2NlNXVoam5zZGQw" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <FaInstagram size={16} />
            </a>
            <a href="https://x.com/Buniyaadec" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <FaXTwitter size={16} />
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://youtube.com/@buniyaadec?si=PaTcoOhHBtMhkEJ5" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@buniyaad.com</p>
          <p className="text-sm text-gray-300 mt-1">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300 mt-1">Hyderabad, India</p>
        </div>
      </div>

      {/* Bottom Copyright */}
   
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Buniyaad.com. All Rights Reserved.
  <br />
  Designed & Developed by{" "}
  <a
    href="https://abdulrafi.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white underline hover:text-gray-300"
  >
    Abdul Rafi
  </a>.
</div>

    </footer>
  );
};

export default Footer;
