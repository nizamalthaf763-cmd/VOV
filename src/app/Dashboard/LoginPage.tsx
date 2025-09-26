import { FaUser, FaLock, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-white">
      {/* Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center shadow-lg rounded-2xl overflow-hidden">
        {/* Left Illustration */}
        <div className="hidden md:flex flex-1 bg-indigo-50 items-center justify-center">
          <img
            src="/images/kayak-illustration.png"
            alt="Kayaking illustration"
            className="max-w-md"
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-yellow-400 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login to continue
          </h2>

          <form className="space-y-5">
            {/* Username */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Username/Email"
                className="flex-1 outline-none bg-transparent"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 outline-none bg-transparent"
              />
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm text-gray-700">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-700 hover:underline">
                Forget password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-900 text-white py-2 rounded-full shadow-md hover:bg-blue-800 transition">
              Login
            </button>
          </form>

          {/* Social login */}
          <p className="text-center text-sm text-gray-700 mt-6">or sign up using</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a
              href="#"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-sky-400 text-white rounded-full hover:bg-sky-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
