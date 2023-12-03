
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>

        {/* Additional Options */}
        <div className="mt-2 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
                {/* Create New Account Link */}
                <div className="mt-4">
          <p>
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Create New Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
