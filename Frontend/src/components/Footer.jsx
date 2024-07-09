const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2">123 Main Street, Cityville, Country</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex mt-2">
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <i className="fab fa-twitter-square text-3xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <i className="fab fa-facebook-square text-3xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <i className="fab fa-instagram-square text-3xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
