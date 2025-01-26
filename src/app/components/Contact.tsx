// Contact.jsx (or Contact.js)
const Contact = () => {
    return (
      <section
        id="contact"
        className="bg-[#0e1111] text-white py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-8 text-lime-500">
            Get in Touch
          </h2>
  
          {/* Contact Form */}
          <form
            action="#"
            method="post"
            className="bg-[#1a1d1d] p-6 rounded-lg shadow-md"
          >
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-[#0e1111] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
  
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#0e1111] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
  
            {/* Message Input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4} // Change this line
                placeholder="Write your message"
                className="w-full px-4 py-2 bg-[#0e1111] border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
            ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400  to-lime-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition duration-150"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  