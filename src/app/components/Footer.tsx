// Footer.jsx (or Footer.js)
const Footer = () => {
    return (
      <footer className="bg-[#1a1d1d] text-gray-300 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm mb-4">
            &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
          </p>
  
          {/* Social Media Links */}
          <div className="space-x-6">
            <a
              href="#"
              className="text-lime-500 hover:text-lime-600"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-lime-500 hover:text-lime-600"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-lime-500 hover:text-lime-600"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-lime-500 hover:text-lime-600"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  