// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left - Logo & Description */}
        <div className="text-center md:text-left">
          <img
            src="/src/assets/VBD_logo.png"
            alt="Logo"
            className="w-24 mx-auto md:mx-0 mb-3"
          />
          <p className="text-sm text-gray-300">
            “Volunteer for Bangladesh” has been providing the youth of
            Bangladesh a voice and platform to contribute to nation building.
          </p>
        </div>

        {/* Middle - Get In Touch */}
        <div>
          <h3 className="text-teal-400 text-lg font-semibold mb-4">
            Get In Touch
          </h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              {/* <MdLocationOn className="text-yellow-400" /> */}
              House #57 Road #7/B Block #H Banani, 1213, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              {/* <MdEmail className="text-yellow-400" /> */}
              info@vbd.com.bd
            </li>
            <li className="flex items-center gap-2">
              {/* <MdPhone className="text-yellow-400" /> */}
              +88 01777 742 153
            </li>
          </ul>
          {/* <div className="flex gap-3 mt-4">
            <a href="#">
              <FaFacebookF className="text-white hover:text-blue-500" />
            </a>
            <a href="#">
              <FaTwitter className="text-white hover:text-blue-400" />
            </a>
            <a href="#">
              <FaInstagram className="text-white hover:text-pink-500" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-white hover:text-blue-600" />
            </a>
            <a href="#">
              <FaYoutube className="text-white hover:text-red-500" />
            </a>
          </div> */}
        </div>

        {/* Right - Newsletter */}
        <div>
          <h3 className="text-teal-400 text-lg font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Enter your email and you will get the latest news and events updates
            about us
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />

            <div className="bg-white flex items-center justify-between p-2 rounded">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <span>✔️</span>
                <span>Success!</span>
              </div>
              <img
                src="https://cdn.cloudflare.com/static/logo/logo-cloudflare-dark.svg"
                alt="cloudflare"
                className="h-4"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
