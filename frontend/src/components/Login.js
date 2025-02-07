export default function Login() {
  return (
    <div class="flex justify-center items-center min-h-screen bg-pink-100">
      <div class="relative flex flex-col m-2 space-y-3 bg-white rounded-3xl shadow-2xl shadow-stale-100 md:flex-row md:space-y-0 md:space-x-3">
        <div class="p-4">
          <div class="flex p-2 justify-between items-start">
            <h2 class="text-md font-mono text-4xl font-bold">Log In</h2>
          </div>
          <div>
            <p class="max-w-sm mb-12 mt-4 font-sans font-light text-gray-600">
              Log in to your account to upload or download pictures, videos or
              music
            </p>
            <input
              class="border border-lg border-gray-300 rounded-lg p-3 mt-3 mb-3 w-full"
              placeholder="Enter your email address"
            />
          </div>
          <div class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <a href="#" class="text-pink-800 font-light text-sm mb-2 md:mb-0">
              Forgot Password?
            </a>
            <button class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-pink-700 shadow-pink-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          <div class="p-3 border-b border-b-gray-300"></div>

          <p class="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>

          <div class="flex flex-col md:flex-row space-x-0 space-y-6 md:space-x-4 md:space-y-0">
            <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src="images/facebook.png" alt="" class="w-9" />
              <span class="font-thin">Facebook</span>
            </button>
            <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src="images/google.png" alt="" class="w-9" />
              <span class="font-thin">Google</span>
            </button>
          </div>
        </div>

        <img
          src="images/logo.jpg"
          alt=""
          class="w-[430px] hidden md:block rounded-r-xl"
        />
        <div class="group absolute right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
