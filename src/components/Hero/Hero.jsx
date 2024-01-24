const Hero = () => {
  return (
    <div className="my-6 px-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:w-2/4 relative">
          <img
            className="w-full object-cover h-[250px] md:h-[420px] rounded-lg"
            src="https://pbs.twimg.com/media/D_gcp5OUYAEsmnK.jpg"
            alt=""
          />
          <div className="absolute bottom-8 left-6 md:bottom-20 md:left-12">
            <p className="text-white mb-2 text-md max-w-56 md:text-xl md:max-w-96">
              Be a Vape Pi member and get our special exclusive offers
            </p>
            <button className="py-2 px-4 bg-black rounded-lg opacity-[0.8] hover:opacity-[10] text-white">
              View
            </button>
          </div>
        </div>

        <div className="md:w-2/4 flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2 relative">
            <img
              className="object-cover w-full h-[250px] md:h-[420px] rounded-lg"
              src="https://cdn.create.vista.com/api/media/small/109618852/stock-photo-electronic-cigarette-over-a-dark-background"
              alt=""
            />
            <div className="space-y-3 absolute w-2/3 bottom-8 left-6 md:bottom-20 md:left-8">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-white text-3xl">Devices</h1>
                </div>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-white md:text-lg max-w-[160px]">
                Find the best for you here
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="mb-3 md:mb-0 relative">
              <img
                className="object-cover rounded-lg md:h-[200px] w-full"
                src="https://img.freepik.com/premium-photo/different-types-vaping-devices-black-background_256506-64.jpg"
                alt=""
              />

              <div className="space-y-3 absolute w-2/3 bottom-8 left-6 md:bottom-4 md:left-8">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className="text-white text-3xl">Pods</h1>
                  </div>
                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-white md:text-lg max-w-[160px]">
                  Variety for choose available
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="object-cover rounded-lg md:h-[200px] w-full"
                src="https://img.freepik.com/premium-photo/different-types-vaping-devices-black-background_256506-63.jpg"
                alt=""
              />
              <div className="space-y-3 absolute w-2/3 bottom-8 left-6 md:bottom-4 md:left-8">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className="text-white text-3xl">Disposable</h1>
                  </div>
                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-white md:text-lg max-w-[160px]">
                  Easy, clean & superb flavor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
