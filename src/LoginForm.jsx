


function LoginForm() {
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome</h1>
          <p className="text-sm text-gray-400 text-center mb-6">
            Please enter your name to proceed
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginForm;
  