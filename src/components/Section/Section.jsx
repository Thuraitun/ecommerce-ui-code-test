import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image_1 from "../../assets/image/section_1.png";
import deal from "../../assets/image/vape_1.png";
import deal_2 from "../../assets/image/vape_3.png";
import deal_3 from "../../assets/image/vape_4.png";

const Section = ({ products }) => {
  return (
    <div className="my-10">
        <div className="px-4 py-6 relative">
          <img
            className="rounded-lg object-cover h-[300px] w-full"
            src="https://t3.ftcdn.net/jpg/01/08/81/98/360_F_108819818_1Schnn0A0GpkHo2UOxrfXOLx7OUFH8P8.jpg"
            alt=""
          />
          <div className="absolute z-20 bottom-16 right-20 md:bottom-20 md:right-32">
            <div className="text-white text-center space-y-4">
              <h1 className="text-3xl font-bold">Try New Flavor</h1>
              <p className="">Citrus Monster</p>
              <div className="flex justify-center">
                <button className="py-2 px-3 border border-white bg-slate-900 opacity-[0.7] rounded-xl">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

      

      <div className="mx-4 py-6 relative bg-black h-[700px] md:h-[350px] rounded-lg mb-4">
        <div className="md:flex h-[300px]">
          <div className="w-full md:w-1/4">
            <div className="flex justify-between items-center text-white">
              <div className="">
                <img className="object-cover h-[300px]" src={Image_1} alt="" />
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl">Devices</h1>
                <p className="">Find the best for you here</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 text-white ">
            <div className="">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                spacing={16}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 4,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
              >
                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_2} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 py-6 relative bg-black h-[700px] md:h-[350px] rounded-lg mb-4">
        <div className="md:flex h-[300px]">
          <div className="w-full md:w-1/4">
            <div className="flex justify-between items-center text-white">
              <div className="">
                <img className="object-cover h-[300px]" src={deal_3} alt="" />
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl">Pops</h1>
                <p className="">Variety of choices available</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 text-white ">
            <div className="">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                spacing={16}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 4,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
              >
                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_2} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 py-6 relative bg-black h-[700px] md:h-[350px] rounded-lg mb-4">
        <div className="md:flex h-[300px]">
          <div className="w-full md:w-1/4">
            <div className="flex justify-between items-center text-white">
              <div className="">
                <img className="object-cover h-[300px]" src={deal_2} alt="" />
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl">Disposable</h1>
                <p className="">Easy, clean & superb flavor</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 text-white ">
            <div className="">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                spacing={16}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 4,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
              >
                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_2} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-1">
                  <div className="bg-gray-300 px-12 rounded-lg">
                    <div className="">
                      <img className="w-full h-[150px]" src={deal_3} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="">Refeshing Mint</h1>
                    <p className="">30000 MMK</p>
                    <p className="line-through text-red-500">35000 MMK</p>
                    <div className="flex space-x-2 items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-orange-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <span className=" text-orange-500">600 Points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
