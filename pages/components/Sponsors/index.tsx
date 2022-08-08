import React from "react";

function Sponsors() {
  const sponsorsBrands = [
    {
      name: "DeepLearning.AI",
      website: "https://www.deeplearning.ai/",
      logo: '<svg\n              viewBox="0 0 272 34"\n              xmlns="http://www.w3.org/2000/svg"\n              height="34"  class="fill-gray-400 hover:fill-gray-700 cursor-pointer gap-3"  \n            >\n              <g>\n                <path d="M56.775 16.108c0 6.206-4.252 10.005-10.747 10.005H39.42V5.961h6.608c6.495 0 10.747 3.924 10.747 10.147zm-10.747 7.306c4.778 0 7.337-2.724 7.337-7.306 0-4.581-2.56-7.452-7.337-7.452H42.73v14.758h3.298z" />\n                <path d="M66.97 26.371c-4.602 0-8.007-3.244-8.007-8.26s3.259-8.226 8.006-8.226c4.571 0 7.804 3.159 7.804 7.856.007.535-.027 1.07-.103 1.6H62.412c.233 2.638 2.123 4.232 4.57 4.232 2.038 0 3.173-.988 3.786-2.234h3.582c-.915 2.802-3.448 5.032-7.38 5.032zm-4.541-9.683h8.878c-.056-2.462-2.007-4.03-4.484-4.03-2.24 0-4.044 1.525-4.394 4.03z" />\n                <path d="M84.938 26.371c-4.601 0-8.007-3.244-8.007-8.26s3.263-8.226 8.007-8.226c4.57 0 7.803 3.159 7.803 7.856a9.792 9.792 0 01-.116 1.6H80.367c.233 2.638 2.128 4.232 4.57 4.232 2.042 0 3.177-.988 3.786-2.234h3.582c-.902 2.802-3.435 5.032-7.367 5.032zm-4.541-9.683h8.878c-.056-2.462-2.007-4.03-4.48-4.03-2.244 0-4.048 1.525-4.398 4.03z" />\n                <path d="M104.917 9.885c4.221 0 7.541 3.245 7.541 8.166 0 4.92-3.32 8.32-7.541 8.32a7.277 7.277 0 01-3.095-.664 7.248 7.248 0 01-2.516-1.914v9.915h-3.319v-23.57h3.32v2.347a7.004 7.004 0 015.61-2.6zm-.729 2.871c-2.473 0-4.86 1.943-4.86 5.364 0 3.42 2.387 5.39 4.86 5.39 2.473 0 4.894-2.02 4.894-5.46 0-3.437-2.391-5.303-4.894-5.303v.009z" />\n                <path d="M119.074 5.961v17.484h6.841v2.668h-10.16V5.961h3.319z" />\n                <path d="M135.584 26.371c-4.602 0-8.007-3.244-8.007-8.26s3.263-8.226 8.007-8.226c4.57 0 7.803 3.159 7.803 7.856a9.927 9.927 0 01-.116 1.625h-12.258c.233 2.639 2.128 4.233 4.571 4.233 2.041 0 3.176-.988 3.785-2.235h3.582c-.902 2.777-3.435 5.007-7.367 5.007zm-4.541-9.683h8.878c-.056-2.462-2.007-4.03-4.48-4.03-2.244 0-4.048 1.525-4.398 4.03z" />\n                <path d="M153.116 9.885a6.864 6.864 0 013.088.633 6.839 6.839 0 012.475 1.946v-2.325h3.349v15.974h-3.349v-2.38a6.906 6.906 0 01-5.611 2.638c-4.165 0-7.514-3.39-7.514-8.32s3.353-8.166 7.562-8.166zm.699 2.87c-2.473 0-4.86 1.853-4.86 5.304 0 3.451 2.387 5.45 4.86 5.45 2.473 0 4.864-1.938 4.864-5.39 0-3.45-2.361-5.372-4.864-5.372v.009z" />\n                <path d="M169.72 26.114h-3.319V10.139h3.319v2.325c.928-1.595 2.534-2.579 4.804-2.579v3.438h-.863c-2.447 0-3.958 1.014-3.958 4.405l.017 8.386z" />\n                <path d="M188.966 17.191c0-2.93-1.602-4.435-4.019-4.435s-4.044 1.504-4.044 4.435v8.922h-3.319V10.14h3.319v1.826a6.16 6.16 0 014.774-2.08c3.755 0 6.582 2.347 6.582 6.812v9.416h-3.293v-8.922z" />\n                <path d="M196.049 5.905a2.105 2.105 0 011.309-1.931 2.117 2.117 0 012.294.458 2.102 2.102 0 01-1.48 3.588 2.109 2.109 0 01-1.509-.612 2.08 2.08 0 01-.614-1.503zm.431 4.234h3.319v15.974h-3.319V10.14z" />\n                <path d="M215.558 17.191c0-2.93-1.602-4.435-4.019-4.435s-4.048 1.504-4.048 4.435v8.922h-3.337V10.14h3.319v1.826a6.192 6.192 0 014.796-2.08c3.755 0 6.56 2.338 6.56 6.803v9.425h-3.289l.018-8.922z" />\n                <path d="M229.538 9.885c2.62 0 4.571 1.216 5.559 2.579v-2.325h3.349V26.37c0 4.35-2.823 7.629-7.829 7.629-4.282 0-7.454-2.119-7.864-5.656h3.289c.496 1.655 2.274 2.785 4.575 2.785 2.559 0 4.48-1.569 4.48-4.758v-2.664a6.903 6.903 0 01-5.559 2.665c-4.222 0-7.571-3.392-7.571-8.321 0-4.93 3.337-8.166 7.571-8.166zm.699 2.87c-2.478 0-4.864 1.853-4.864 5.304 0 3.452 2.386 5.45 4.864 5.45 2.477 0 4.86-1.938 4.86-5.39 0-3.45-2.357-5.372-4.86-5.372v.009z" />\n                <path d="M242.702 26.316a2.134 2.134 0 01-1.987-1.287 2.114 2.114 0 011.53-2.908 2.138 2.138 0 012.194.896c.235.349.361.76.361 1.18a2.096 2.096 0 01-1.289 1.956 2.11 2.11 0 01-.809.163z" />\n                <path d="M260.584 21.996h-8.477l-1.455 4.117h-3.453l7.251-20.2h3.846l7.247 20.2h-3.492l-1.467-4.117zM256.38 9.932l-3.341 9.365h6.612l-3.271-9.365z" />\n                <path d="M268.681 5.961H272v20.152h-3.319V5.961z" />\n                <path\n                  fillRule="evenodd"\n                  clipRule="evenodd"\n                  d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73zm-.125-2.918c-6.289 0-11.386-4.925-11.386-11.002C5.257 6.52 10.36 1.59 16.643 1.59c6.284 0 11.386 4.93 11.386 11.007s-5.097 11.002-11.386 11.002zm-.242-4.508c4.77 0 8.633-3.679 8.633-8.218 0-4.538-3.885-8.221-8.633-8.221-4.747 0-8.632 3.679-8.632 8.221 0 4.543 3.885 8.218 8.632 8.218zm.126-1.59c-3.734 0-6.76-3.207-6.76-7.16 0-3.954 3.018-7.16 6.75-7.16 3.734 0 6.76 3.206 6.76 7.16s-3.021 7.16-6.76 7.16h.01zm-.126-6.28c.729 0 1.44-.214 2.046-.617a3.67 3.67 0 001.356-1.646 3.652 3.652 0 00-.798-3.995 3.687 3.687 0 00-4.012-.794 3.679 3.679 0 00-1.653 1.35 3.655 3.655 0 00-.62 2.037c.002.971.39 1.902 1.08 2.59a3.698 3.698 0 002.601 1.076z"\n                />\n                <path\n                  fillRule="evenodd"\n                  clipRule="evenodd"\n                  d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73zm-.125-2.918c-6.289 0-11.386-4.925-11.386-11.002C5.257 6.52 10.36 1.59 16.643 1.59c6.284 0 11.386 4.93 11.386 11.007s-5.097 11.002-11.386 11.002zm-.242-4.508c4.77 0 8.633-3.679 8.633-8.218 0-4.538-3.885-8.221-8.633-8.221-4.747 0-8.632 3.679-8.632 8.221 0 4.543 3.885 8.218 8.632 8.218z"\n                />\n                <path\n                  fillRule="evenodd"\n                  clipRule="evenodd"\n                  d="M16.643 33.145c-3.292 0-6.51-.972-9.246-2.793a16.588 16.588 0 01-6.13-7.438A16.507 16.507 0 01.32 13.34a16.55 16.55 0 014.555-8.485A16.665 16.665 0 0113.396.318a16.71 16.71 0 019.616.944 16.628 16.628 0 017.47 6.103 16.522 16.522 0 012.804 9.207c0 4.396-1.753 8.61-4.874 11.719a16.68 16.68 0 01-11.769 4.854zm.125-6.628c6.906 0 12.517-5.698 12.517-12.73 0-7.03-5.61-12.725-12.517-12.725-6.906 0-12.517 5.698-12.517 12.725 0 7.027 5.611 12.73 12.517 12.73z"\n                />\n              </g>\n            </svg>',
    },
  ];
  return (
    <div className="text-center m-3">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="text-2xl md:text-4xl font-extrabold">
            <span>Sponsors</span>
          </div>
          <br />
          <div className="text-xl md:text-2xl font-semibold">
            <span>Companies that trust the AI community in El Salvador</span>
          </div>
          <br />
          <div className="max-w-screen-md m-auto">
            <p className="text-base">
              Thank you for your support, without you it would not be possible.
              In addition we can reach more people, make raffles and improve the
              quality of the events
            </p>
          </div>
          <div className="flex justify-center">
            <div className="text-base text-center md:text-left">
              <a
                target={"_blank"}
                href="mailto:pieaisv@gmail.com?subject=Event%20Sponsorship&amp;body=Hello 👋, I want to sponsor a Pie & AI event."
                className="bg-white bg-pie text-xl text-black hover:text-white py-2 mt-6 px-4 border-l-2 border-t-2 border-r-4 border-b-4 border-black rounded inline-flex items-center ease-in-out"
                rel="noreferrer"
              >
                <span className="ml-1">I want to sponsor the event!</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-8 md:mt-0">
          {sponsorsBrands.map((brand) => {
            return (
              <a
                key={brand.name}
                href={brand.website}
                target={"_blank"}
                rel="noreferrer"
              >
                <div dangerouslySetInnerHTML={{ __html: brand.logo }} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
