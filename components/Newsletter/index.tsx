import { FormEvent } from "react";

function Newsletter() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log("form submitted ✅");
  };
  return (
    <div className="m-3 md:m-auto max-w-screen-xl">
      <div className="module-border-wrap">
        <div className="module">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold mb-2">
                Suscribe to Newsletter
              </p>
              <p className="text-base">
                A newsletter to inform you about events and new updates from Pie
                & AI San Salvador.
              </p>
            </div>
            <form method="post" onSubmit={handleSubmit}>
              <div className="grid-newsletter bg-white drop-shadow h-16 md:h-20 mt-4">
                <div className="flex justify-center items-center">
                  <input
                    className="placeholder:text-black appearance-none border border-transparent w-full py-4 md:ml-6 px-2 h-16 text-black leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    id="email"
                    placeholder="Your email address"
                    name="email"
                    type={"email"}
                    required
                    pattern=".+@*\.com"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type={"submit"}
                    className="text-xl md:text-2xl font-extrabold"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-redpie-500 to-pie-500">
                      Subscribe
                    </span>
                  </button>
                  <div className="hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7"
                      viewBox="0 0 20 20"
                      fill="#ffb100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
